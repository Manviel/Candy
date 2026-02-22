import { Home as HomeIcon, Menu, Search } from 'lucide-react';
import '../styles/home-redesign.css';

const Header = ({ activeRoute = '' }) => {
  return (
    <>
      {/* Floating glass pill HUD — center only */}
      <nav className='fn-header'>
        <div className='fn-header-left'>
          <div className='fn-home-btn'>
            <HomeIcon size={18} strokeWidth={2.5} />
            <Menu size={18} strokeWidth={2.5} />
          </div>
        </div>

        <div className='fn-header-center'>
          <button type='button' className='fn-search-btn'>
            <Search size={20} strokeWidth={2.5} />
          </button>

          <div className='fn-nav-tabs'>
            <a href='/' className={`fn-tab ${activeRoute === '/' ? 'active' : ''}`}>
              DISCOVER
            </a>
            <a
              href='/battle-pass'
              className={`fn-tab ${activeRoute === '/battle-pass' ? 'active' : ''}`}
            >
              LIBRARY
            </a>
            <div className='fn-divider' />
            <a
              href='/item-shop'
              className={`fn-tab ${activeRoute === '/item-shop' ? 'active' : ''}`}
            >
              ITEM SHOP <span className='fn-badge'>0</span>
            </a>
            <a href='/crew' className={`fn-tab ${activeRoute === '/crew' ? 'active' : ''}`}>
              CREW
            </a>
          </div>

          <div className='fn-vbucks'>
            <div className='vbucks-icon'>V</div>
            <span>1,800</span>
          </div>
        </div>

        <div className='fn-header-right'>
          {/* intentionally empty — avatar is outside the pill */}
        </div>
      </nav>

      {/* Avatar sits independently in top-right corner */}
      <div className='fn-avatar-standalone'>
        🎭
        <div className='fn-status-dot' />
      </div>
    </>
  );
};

export default Header;
