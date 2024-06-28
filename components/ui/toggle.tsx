import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as TogglePrimitives from "@radix-ui/react-toggle";

const Toggle = forwardRef<
  ElementRef<typeof TogglePrimitives.Root>,
  ComponentPropsWithoutRef<typeof TogglePrimitives.Root>
>(({ children, ...props }, ref) => {
  return (
    <TogglePrimitives.Root ref={ref} {...props}>
      {children}
    </TogglePrimitives.Root>
  );
});
Toggle.displayName = TogglePrimitives.Root.displayName;

export { Toggle };
