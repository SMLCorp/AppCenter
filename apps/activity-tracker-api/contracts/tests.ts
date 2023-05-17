/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import "@japa/runner";

declare module "@japa/runner" {
  interface TestContext {
    // Extend context
  }

  interface Test<TestData> {
    // Extend test
  }
}
