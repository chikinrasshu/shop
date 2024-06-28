import Link from "next/link";
import { Button } from "./ui/button";
import { FiPackage, FiSettings, FiShoppingCart } from "react-icons/fi";
import { ThemeButton } from "./ui/theme-button";
import { Fragment } from "react";

function Navbar() {
  const links = [
    { label: "Point of Sale", url: "/pos", icon: <FiShoppingCart /> },
    { label: "Inventory", url: "/inventory", icon: <FiPackage /> },
    { label: "Settings", url: "/settings", icon: <FiSettings /> },
  ];

  return (
    <nav className="sticky inset-x-0 top-0 z-30 flex h-10 items-center gap-1 border-b border-blue-6 bg-blue-3/70 px-1 text-blue-11 shadow-md backdrop-blur-sm">
      <Button
        className="text-md h-full border-y-0 font-extrabold md:text-xl"
        rounded="none"
        variant="primary"
        kind="ghost"
        asChild
      >
        <Link href="/">chkApp</Link>
      </Button>

      <div className="flex h-full items-center">
        {links.map((link, i) => {
          const isFirst = i == 0;
          const isLast = i == links.length - 1;
          const side = isFirst ? "left" : isLast ? "right" : "middle";

          return (
            <Fragment key={link.url}>
              <Button
                className="hidden px-2 md:flex"
                side={side}
                kind="ghost"
                asChild
              >
                <Link href="/pos">
                  {link.icon}
                  {link.label}
                </Link>
              </Button>

              <Button className="md:hidden" side={side} kind="ghost" asChild>
                <Link href="/pos">{link.icon}</Link>
              </Button>
            </Fragment>
          );
        })}
      </div>

      <div className="mx-auto" />

      <div className="flex items-center">
        <ThemeButton variant="primary" />
      </div>
    </nav>
  );
}

export { Navbar };
