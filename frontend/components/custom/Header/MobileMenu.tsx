import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import MobileMenuAccordion from "./MobileMenuAccordion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <IoMenu size={20} className="cursor-pointer text-white" />
      </SheetTrigger>{" "}
      <SheetContent className="bg-green !gap-0 overflow-y-auto !border-none">
        <SheetHeader className="border-b border-gray-50/30">
          <SheetTitle>
            <img src="logo.png" className="w-[150px]" />
          </SheetTitle>
        </SheetHeader>
        {/*Div Search*/}
        <div className="flex w-full gap-x-2 border-b border-gray-50/30 px-2 py-4">
          <Input
            className="!border-gray-400/70 bg-white"
            placeholder="Buscar"
          />
          <Button className="bg-maroon hover:bg-green cursor-pointer">
            Buscar
          </Button>
        </div>

        {/*Menu Accordion*/}
        <MobileMenuAccordion />
        <SheetFooter className="border-t border-gray-50/30">teste</SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
