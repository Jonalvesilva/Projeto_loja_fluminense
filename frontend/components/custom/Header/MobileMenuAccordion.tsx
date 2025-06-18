import { ScrollArea } from "@/components/ui/scroll-area";
import { linksCardMenu } from "@/constants/linksCardsMenu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileMenuAccordion() {
  return (
    <ScrollArea className="flex-1">
      <Accordion type="single" collapsible className="mobileMenuAccordion">
        {linksCardMenu.map((item: any, index: number) => (
          <AccordionItem
            key={`accordion_${item.menu}`}
            value={`item-${index}`}
            className="mobileMenuAccordion__item"
          >
            <AccordionTrigger className="cursor-pointer">
              {item.menu}
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {item.submenu.map((subItem: any) => (
                  <li key={subItem.menu} className="py-2 pl-4">
                    {subItem.menu}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollArea>
  );
}
