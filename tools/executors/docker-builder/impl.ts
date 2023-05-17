import { ExecutorContext } from "@nrwl/devkit";
import * as childProcess from "child_process";

interface Options {
  build: boolean;
  push: boolean;
  registry: string;
  tag: string;
}

const packager = async (
  options: Options,
  context: ExecutorContext,
): Promise<{ success: boolean; error?: Error }> => {
  const { build: shouldBuild, push: shouldPush, registry, tag } = options;
  const { root, projectName } = context;

  if (!projectName) {
    return { success: false, error: new Error("Project name undefined") };
  }

  const projectRoot = `${root}/apps/${projectName}`;
  const commands: any[] = [];

  // build app if not specified otherwise
  if (shouldBuild) {
    commands.push([
      `pnpm ${projectName}:build --prod --optimization --skip-nx-cache`,
      { cwd: root },
    ]);
  }
  // Copy apps artifacts to app folder
  commands.push([
    `cp -Rf dist/apps/${projectName} ${projectRoot}/dist`,
    { cwd: root },
  ]);

  // Copy pnpm-lock.yaml to app folder
  commands.push([`cp -Rf pnpm-lock.yaml ${projectRoot}/`, { cwd: root }]);

  // Build and tag image for given app
  commands.push([
    `docker build --tag ${registry}/${projectName}:${tag} .`,
    { cwd: `${projectRoot}` },
  ]);
  // Push tagged image to registry
  if (shouldPush) {
    commands.push([
      `docker push ${registry}/${projectName}:${tag}`,
      { cwd: `${projectRoot}` },
    ]);
  }
  // We clean up the dist folder from appname
  if (shouldBuild) {
    commands.push([`rm -rf ${projectRoot}/dist`, { cwd: root }]);
  }

  let error: Error;
  try {
    commands.forEach((command) => {
      childProcess.execSync(command[0], { ...command[1], stdio: "inherit" });
    });
  } catch (err) {
    error = err;
    console.error(error);
  }

  return new Promise((resolve) => {
    resolve({
      success: error === undefined,
      error: error ? new Error(error.message) : undefined,
    });
  });
};

export default packager;
