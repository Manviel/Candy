import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@radix-ui/react-navigation-menu';

const Header = ({ activeRoute = '' }) => {
  const getNavLinkClass = route => {
    return `nav-link${activeRoute === route ? ' active' : ''}`;
  };

  return (
    <nav className="fortnite-nav">
      <div className="nav-container">
        <NavigationMenu>
          <NavigationMenuList className="nav-links">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={getNavLinkClass('/')}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/battle-pass" className={getNavLinkClass('/battle-pass')}>
                Battle Pass
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/item-shop" className={getNavLinkClass('/item-shop')}>
                Item Shop
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className={getNavLinkClass('/news')}>
                News
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/competitive" className={getNavLinkClass('/competitive')}>
                Competitive
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/crew" className={getNavLinkClass('/crew')}>
                Crew
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Header;
