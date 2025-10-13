import Navigation from './Navigation.jsx';
import { Sword } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="/" className="logo-link">
            <Sword className="logo-icon" />
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
