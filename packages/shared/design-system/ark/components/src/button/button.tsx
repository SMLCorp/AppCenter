import { ark } from "@ark-ui/react";
import { styled } from "@SMLCorp/styled-system/jsx";
import {
  button,
  type ButtonVariantProps,
} from "@SMLCorp/styled-system/recipes";
import type { ComponentPropsWithoutRef } from "react";

export type ButtonProperties = ButtonVariantProps &
  ComponentPropsWithoutRef<typeof ark.button>;
export const Button = styled(ark.button, button);
