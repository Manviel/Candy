import { Heart, Users } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className='hero-content-wrapper'>
      <h1 className='hero-fortnite-logo'>FORTNITE</h1>
      <span className='hero-zero-build'>ZERO BUILD</span>

      <div className='friends-playing-badge'>
        <span className='friends-dot' />3 FRIENDS PLAYING
      </div>

      <div className='playing-stats'>
        <div className='stat-item'>
          <Users size={14} />
          4.2K
        </div>
        <div className='stat-item'>
          <Heart size={14} />
          96%
        </div>
      </div>
    </div>
  );
};
