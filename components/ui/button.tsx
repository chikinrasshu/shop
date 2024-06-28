import { FiChevronRight } from "react-icons/fi";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  `flex gap-1 justify-center items-center whitespace-nowrap border p-1 min-w-8 min-h-8 transition-colors duration-50 disabled:pointer-events-none disabled:opacity-50
  rd-toggle:rd-on:block rd-toggle:rd-off:block rd-toggle:rd-on:rotate-90`,
  {
    variants: {
      rounded: {
        none: "rounded-none",
        unset: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      variant: {
        default: `bg-gray-3 hover:bg-gray-4 active:bg-gray-5 rd-on:bg-gray-5
          border-gray-6 hover:border-gray-7 active:border-gray-8 rd-on:border-gray-8
          text-gray-11 chk-hactive:text-gray-12 rd-on:text-gray-12`,
        primary: `bg-blue-3 hover:bg-blue-4 active:bg-blue-5 rd-on:bg-blue-5
          border-blue-6 hover:border-blue-7 active:border-blue-8 rd-on:border-blue-8
          text-blue-11 chk-hactive:text-blue-12 rd-on:text-blue-12`,
        secondary: `bg-purple-3 hover:bg-purple-4 active:bg-purple-5 rd-on:bg-purple-5
          border-purple-6 hover:border-purple-7 active:border-purple-8 rd-on:border-purple-8
          text-purple-11 chk-hactive:text-purple-12 rd-on:text-purple-12`,
        success: `bg-green-3 hover:bg-green-4 active:bg-green-5 rd-on:bg-green-5
          border-green-6 hover:border-green-7 active:border-green-8 rd-on:border-green-8
          text-green-11 chk-hactive:text-green-12 rd-on:text-green-12`,
        warning: `bg-yellow-3 hover:bg-yellow-4 active:bg-yellow-5 rd-on:bg-yellow-5
          border-yellow-6 hover:border-yellow-7 active:border-yellow-8 rd-on:border-yellow-8
          text-yellow-11 chk-hactive:text-yellow-12 rd-on:text-yellow-12`,
        failure: `bg-red-3 hover:bg-red-4 active:bg-red-5 rd-on:bg-red-5
          border-red-6 hover:border-red-7 active:border-red-8 rd-on:border-red-8
          text-red-11 chk-hactive:text-red-12 rd-on:text-red-12`,
        destructive: `bg-red-3 hover:bg-red-4 active:bg-red-5 rd-on:bg-red-5
          border-red-6 hover:border-red-7 active:border-red-8 rd-on:border-red-8
          text-red-11 chk-hactive:text-red-12 rd-on:text-red-12`,
      },
      kind: {
        default: "",
        ghost: `bg-opacity-0 border-opacity-0 
          chk-hactive:bg-opacity-100 chk-hactive:border-opacity-100 
          rd-on:bg-opacity-100 rd-on:border-opacity-100`,
        outline: `bg-opacity-0 
          chk-hactive:bg-opacity-100 chk-hactive:border-opacity-100 
          rd-on:bg-opacity-100 rd-on:border-opacity-100`,
      },

      side: {
        default: "",
        left: "rounded-e-none border-e-[0.5px]",
        middle:
          "rounded-e-none rounded-s-none border-e-[0.5px] border-s-[0.5px]",
        right: "rounded-s-none border-s-[0.5px]",
      },
    },
    defaultVariants: {
      rounded: "md",
      variant: "default",
      kind: "default",
      side: "default",
    },
  }
);

type ButtonProps = {
  toggleClassName?: string;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      toggleClassName,
      className,
      rounded,
      variant,
      kind,
      side,
      ...props
    },
    ref
  ) => {
    const Comp = props.asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ rounded, variant, kind, side }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children && <Slottable>{children}</Slottable>}
        <FiChevronRight
          className={cn("toggle hidden transition-transform", toggleClassName)}
        />
      </Comp>
    );
  }
);
Button.displayName = "button";

export { Button, type ButtonProps };
