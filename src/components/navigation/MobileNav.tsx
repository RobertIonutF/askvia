"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks } from "./NavLinks";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center p-2 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="py-12">
        <div className="flex flex-col space-y-6">
          <a href="/" className="text-xl font-bold">Askvia</a>
          <NavLinks 
            className="flex-col items-start space-y-4" 
            onClick={() => {
              const sheet = document.querySelector('[data-state="open"]');
              if (sheet) {
                (sheet as HTMLElement).click();
              }
            }} 
          />
          <div className="pt-6 flex flex-col space-y-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-medium w-full">
              Create a Survey
            </button>
            <div className="flex justify-center pt-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 