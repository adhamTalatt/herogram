"use client";

import { navLinks } from "@/lib/links";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const NavLinks = () => {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathName === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? "secondary" : "ghost",
              className: cn("navlink", { "hidden md:flex": link.hideOnMobile }),
              size: "lg",
            })}
          >
            <LinkIcon className="w-6" />
            <p
              className={`${cn("hidden lg:block", {
                "font-extrabold": isActive,
              })}`}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
