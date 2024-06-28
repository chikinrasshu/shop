import { cn } from "@/utils/cn";
import { Slottable } from "@radix-ui/react-slot";
import * as TabPrimitive from "@radix-ui/react-tabs";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Button, ButtonProps } from "./button";
import { cva, VariantProps } from "class-variance-authority";

const Tabs = forwardRef<
  ElementRef<typeof TabPrimitive.Root>,
  ComponentPropsWithoutRef<typeof TabPrimitive.Root>
>(({ children, className, ...props }, ref) => {
  return (
    <TabPrimitive.Root
      className={cn("flex flex-col rd-orientation-v:flex-row", className)}
      {...props}
    >
      {children}
    </TabPrimitive.Root>
  );
});
Tabs.displayName = TabPrimitive.Root.displayName;

const TabsList = forwardRef<
  ElementRef<typeof TabPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabPrimitive.List>
>(({ children, className, ...props }, ref) => {
  return (
    <TabPrimitive.List
      ref={ref}
      className={cn(
        "flex rd-orientation-v:flex-col",
        "rd-orientation-h:chk-child:border-b-0 rd-orientation-v:chk-child:border-e-0",
        "rd-orientation-h:chk-child:border-x-[0.5px] rd-orientation-v:chk-child:border-y-[0.5px]",
        "rd-orientation-h:chk-child-first:border-s rd-orientation-h:chk-child-last:border-e",
        "rd-orientation-v:chk-child-first:border-t rd-orientation-v:chk-child-last:border-b",
        "rd-orientation-h:chk-child-first:rounded-ss-md",
        "rd-orientation-h:chk-child-last:rounded-se-md",
        "rd-orientation-v:chk-child-first:rounded-ss-md ",
        "rd-orientation-v:chk-child-last:rounded-es-md",
        className
      )}
      {...props}
    >
      {children}
    </TabPrimitive.List>
  );
});
TabsList.displayName = TabPrimitive.List.displayName;

type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabPrimitive.Trigger> &
  Omit<ButtonProps, "side" | "rounded">;

const TabsTrigger = forwardRef<
  ElementRef<typeof TabPrimitive.Trigger>,
  TabsTriggerProps
>(({ children, className, variant, kind, asChild = false, ...props }, ref) => (
  <TabPrimitive.Trigger ref={ref} {...props} asChild>
    <Button rounded="unset" variant={variant} kind={kind} asChild={asChild}>
      <Slottable>{children}</Slottable>
    </Button>
  </TabPrimitive.Trigger>
));
TabsTrigger.displayName = TabPrimitive.Trigger.displayName;

const tabsContentVariants = cva(
  "rd-on:flex flex-col grow border rounded-md rounded-ss-none rd-orientation-h:rounded-se-none rd-orientation-v:rounded-es-none",
  {
    variants: {
      variant: {
        default: "bg-gray-2 border-gray-6 text-gray-11",
        primary: "bg-blue-2 border-blue-6 text-blue-11",
        secondary: "bg-purple-2 border-purple-6 text-purple-11",
        success: "bg-green-2 border-green-6 text-green-11",
        warning: "bg-yellow-2 border-yellow-6 text-yellow-11",
        failure: "bg-red-2 border-red-6 text-red-11",
        destructive: "bg-red-2 border-red-6 text-red-11",
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
);

type TabsContentProps = ComponentPropsWithoutRef<typeof TabPrimitive.Content> &
  VariantProps<typeof tabsContentVariants>;

const TabsContent = forwardRef<
  ElementRef<typeof TabPrimitive.Content>,
  TabsContentProps
>(({ children, className, variant, ...props }, ref) => (
  <TabPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants({ variant }), className)}
    {...props}
  >
    {children}
  </TabPrimitive.Content>
));
TabsContent.displayName = TabPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent, type TabsTriggerProps };
