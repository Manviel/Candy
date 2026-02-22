import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport
} from '@radix-ui/react-scroll-area';
import { Camera, Hash, MessageCircle, Music, Send, Video } from 'lucide-react';
import { GameCard } from './GameCard.jsx';

const socialIcons = [
  { Icon: MessageCircle, color: '#1877f2' },
  { Icon: Send, color: '#0088cc' },
  { Icon: Camera, color: '#FCAF45' },
  { Icon: Video, color: '#ff0000' },
  { Icon: Music, color: '#ff0050' },
  { Icon: Hash, color: '#1da1f2' }
];

const games = [
  {
    id: 1,
    title: 'ZERO BUILD',
    subtitle: 'Remember to always thank the Bus Driver.',
    gradientClass: 'gradient-green',
    joinButton: true,
    active: true,
    href: '/competitive'
  },
  {
    id: 2,
    title: 'BATTLE ROYALE',
    gradientClass: 'gradient-purple',
    href: '/news'
  },
  {
    id: 3,
    title: 'Competitive +1',
    gradientClass: 'gradient-orange',
    href: '/',
    active: false
  },
  {
    id: 4,
    title: 'Reload',
    gradientClass: 'gradient-blue',
    badge: '3',
    href: '/item-shop'
  },
  {
    id: 6,
    title: 'FESTIVAL',
    gradientClass: 'gradient-pink',
    href: '/news'
  }
];

export const DiscoverCarousel = () => {
  return (
    <div className='carousel-wrapper'>
      <ScrollArea type='auto' scrollbars='horizontal' style={{ width: '100%' }}>
        <ScrollAreaViewport style={{ width: '100%' }}>
          <div className='carousel-content'>
            {games.map((game, i) => {
              const { Icon, color } = socialIcons[i % socialIcons.length];
              return (
                <GameCard
                  key={game.id}
                  title={game.title}
                  subtitle={game.subtitle}
                  gradientClass={game.gradientClass}
                  badge={game.badge}
                  joinButton={game.joinButton}
                  active={game.active}
                  href={game.href}
                  SocialIcon={Icon}
                  socialColor={color}
                />
              );
            })}
          </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation='horizontal'>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </div>
  );
};
