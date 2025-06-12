import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { linksCardMenu } from "@/constants/linksCardsMenu";

export default function LinksCardsMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="flex gap-x-2">
        {linksCardMenu.map((item: any) => (
          <div key={`link_${item.menu}`} className="h-full">
            <NavigationMenuItem className="h-full">
              <NavigationMenuTrigger className="[&_svg]:hidden h-14 bg-transparent text-white data-[state=open]:hover:text-[#800320] cursor-pointer border-b border-6 border-transparent data-[state=open]:hover:border-b-[#800320]">
                {item.menu}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!w-[720px] grid grid-cols-3 gap-x-6 gap-y-4 auto-rows-[38px]">
                {item.submenu.map((item: any) => (
                  <NavigationMenuLink
                    key={`submenu_${item.menu}`}
                    className="text-[#800320] font-semibold cursor-pointer"
                  >
                    {item.menu}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
