import { DiscoverCarousel } from './home/DiscoverCarousel.jsx';
import { HeroContent } from './home/HeroContent.jsx';
import { RightPanel } from './home/RightPanel.jsx';
import '../styles/home-redesign.css';

const Home = () => {
  return (
    <div className='home-redesign-container'>
      {/* Center hero character placeholder */}
      <div className='home-hero-scene'>
        <div className='hero-character-placeholder'>🎮</div>
      </div>

      {/* Left + Right panels */}
      <div className='home-main-content'>
        <HeroContent />
        <RightPanel />
      </div>

      {/* Bottom horizontal carousel */}
      <DiscoverCarousel />
    </div>
  );
};

export default Home;
