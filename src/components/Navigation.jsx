import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu';
import { Button } from '@radix-ui/themes';

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="nav-list">
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#about">
            Як стати Спартанцем
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#heroes">
            Наші герої
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#faq">
            FAQ
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link" href="#contact">
            Контакти
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button className="nav-button" variant="outline">
            Приєднатись ⬇
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button className="nav-button merch-button">
            Мерч ⬇
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
