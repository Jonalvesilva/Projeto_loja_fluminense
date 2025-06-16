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

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <IoMenu size={20} className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent className="mobileMenuContent">
        <SheetHeader className="border-b border-gray-50/30">
          <SheetTitle>
            <img src="logo.png" className="w-[150px]" />
          </SheetTitle>
        </SheetHeader>
        {/*Div Search*/}
        <div className="mobileMenuContent__divSearch">
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
