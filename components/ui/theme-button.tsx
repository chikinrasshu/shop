"use client";

import { forwardRef, MouseEvent, useEffect, useState } from "react";
import { Button, ButtonProps } from "./button";
import { Slot } from "@radix-ui/react-slot";
import { TbLoaderQuarter, TbMoon, TbSun, TbSunMoon } from "react-icons/tb";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

type ThemeButtonProps = {
  iconClassName?: string;
} & ButtonProps;

const ThemeButton = forwardRef<HTMLButtonElement, ThemeButtonProps>(
  ({ children, iconClassName, onClick, ...props }, ref) => {
    const [loaded, setLoaded] = useState(false);
    const { theme, setTheme } = useTheme();

    const Comp = props.asChild ? Slot : Button;

    useEffect(() => setLoaded(true), []);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (loaded && theme !== undefined) {
        switch (theme) {
          case "system":
            setTheme("light");
            break;
          case "light":
            setTheme("dark");
            break;
          case "dark":
            setTheme("system");
            break;
        }
      }

      if (onClick) {
        onClick(e);
      }
    };

    return loaded ? (
      <Comp ref={ref} onClick={handleClick} {...props}>
        {theme === "system" && <TbSunMoon />}
        {theme === "light" && <TbSun />}
        {theme === "dark" && <TbMoon />}
        {children}
      </Comp>
    ) : (
      <Comp ref={ref} onClick={onClick} {...props}>
        <TbLoaderQuarter className={cn("animate-spin-steps", iconClassName)} />
        {children}
      </Comp>
    );
  }
);
ThemeButton.displayName = "theme-button";

export { ThemeButton, type ThemeButtonProps };
