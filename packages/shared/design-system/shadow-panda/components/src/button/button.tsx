import { Slot } from "@radix-ui/react-slot";
import { type HTMLStyledProps, styled } from "@SMLCorp/styled-system/jsx";
import { button } from "@SMLCorp/styled-system/recipes";
import * as React from "react";

const BaseButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children?: React.ReactNode;
  }
>(({ asChild = false, ...properties }, reference) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={reference} {...properties} />;
});
BaseButton.displayName = "Button";

export const Button = styled(BaseButton, button);
export type ButtonProperties = HTMLStyledProps<typeof Button>;
