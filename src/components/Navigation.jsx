import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu';
import { Button } from '@radix-ui/themes';

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="nav-list">
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#battle-pass">
            Battle Pass
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#item-shop">
            Item Shop
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#news">
            News
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#competitive">
            Competitive
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button className="nav-button" variant="outline">
            Play Now ⬇
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="/customers">
            Crew
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
