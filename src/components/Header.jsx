import { Home as HomeIcon, Menu, Search } from 'lucide-react';
import '../styles/home-redesign.css';

const Header = ({ activeRoute = '' }) => {
  return (
    <>
      {/* Floating glass pill HUD — center only */}
      <nav className='fn-header'>
        <div className='fn-header-center'>
          <div className='fn-nav-tabs'>
            <a href='/' className={`fn-tab ${activeRoute === '/' ? 'active' : ''}`}>
              DISCOVER
            </a>
            <a
              href='/battle-pass'
              className={`fn-tab ${activeRoute === '/battle-pass' ? 'active' : ''}`}
            >
              PASS
            </a>
            <div className='fn-divider' />
            <a
              href='/item-shop'
              className={`fn-tab ${activeRoute === '/item-shop' ? 'active' : ''}`}
            >
              ITEM SHOP
            </a>
            <a href='/crew' className={`fn-tab ${activeRoute === '/crew' ? 'active' : ''}`}>
              CREW
            </a>
          </div>
        </div>
      </nav>

      {/* Avatar sits independently in top-right corner */}
      <a href='/news' className='fn-avatar-standalone'>
        🎭
        <div className='fn-status-dot' />
      </a>
    </>
  );
};

export default Header;
