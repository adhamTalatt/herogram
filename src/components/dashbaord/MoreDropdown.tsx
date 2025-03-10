"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Activity,
  BookMarked,
  ChevronLeft,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
const MoreDropdown = () => {
  const [open, setOpen] = useState(false);
  const [showModeToggle, setShowModeToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  //Strat======================================================================
  useEffect(
    () => {
      // Close the dropdown when the user clicks outside
      function handleOutsideClike(event: MouseEvent) {
        if (!event.target) return;
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setShowModeToggle(false);
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleOutsideClike);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClike);
      };
    }
    //End=======================================================================
  );
  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant={"ghost"}
          className="md:w-full !justify-start !px-3"
          size={"lg"}
        >
          <Menu />
          <div className="hidden lg:block">More</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        ref={ref}
        className={cn(
          "dark:bg-neutral-800 w-64 !rounded-xl !p-0 transition-opacity",
          !open && "opacity-0"
        )}
        align="end"
        alignOffset={-40}
      >
        {!showModeToggle && (
          <>
            <DropdownMenuItem className="menuItem">
              <Settings size={20} />
              <p>Settings</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="menuItem">
              <Activity size={20} />
              <p>Your activity</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="menuItem">
              <BookMarked size={20} />
              <p>saved</p>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="menuItem"
              onClick={() => {
                setShowModeToggle(true);
              }}
            >
              <Moon size={20} />
              <p>Switch appearance</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="menuItem">
              <LogOut size={20} />
              <p>log out</p>
            </DropdownMenuItem>
          </>
        )}
        {showModeToggle && (
          <>
            <div className=" flex items-center border-b border-gray-200 dark:border-neutral-700 py-3.5 px-2.5">
              <ChevronLeft
                className="!cursor-pointer"
                size={18}
                onClick={() => {
                  setShowModeToggle(false);
                }}
              />
              <p className="font-bold ml-1">switch appearance</p>
              {theme === "dark" ? (
                <Moon size={20} className="ml-auto" />
              ) : (
                <Sun size={20} className="ml-auto" />
              )}
            </div>

            <Label htmlFor="dark-mode" className=" menuItem">
              Dark Mode
              <DropdownMenuItem className="ml-auto !p-0">
                <Switch
                  id="dark-mode"
                  className="ml-auto"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => {
                    setTheme(checked ? "dark" : "light");
                  }}
                />
              </DropdownMenuItem>
            </Label>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreDropdown;
