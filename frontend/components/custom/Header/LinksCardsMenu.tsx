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
    <NavigationMenu className="linksCardMenu hidden lg:block">
      <NavigationMenuList className="flex gap-x-2">
        {linksCardMenu.map((item: any) => (
          <div key={`link_${item.menu}`} className="h-full">
            <NavigationMenuItem className="h-full">
              <NavigationMenuTrigger className="linksCardMenu__trigger">
                {item.menu}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="linksCardMenu__content">
                {item.submenu.map((item: any) => (
                  <NavigationMenuLink
                    key={`submenu_${item.menu}`}
                    className="linksCardMenu__menuLink"
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
