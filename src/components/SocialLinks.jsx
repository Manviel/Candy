import { Camera, Hash, MessageCircle, Music, Send, Video } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', color: '#1877f2', Icon: MessageCircle },
    { name: 'Telegram', url: 'https://telegram.org', color: '#0088cc', Icon: Send },
    { name: 'Instagram', url: 'https://instagram.com', color: '#FCAF45', Icon: Camera },
    { name: 'YouTube', url: 'https://youtube.com', color: '#ff0000', Icon: Video },
    { name: 'TikTok', url: 'https://tiktok.com', color: '#ff0050', Icon: Music },
    { name: 'X', url: 'https://x.com', color: '#1da1f2', Icon: Hash }
  ];

  return (
    <div className='social-links'>
      {socialLinks.map(social => (
        <a
          key={social.name}
          href={social.url}
          className='social-link'
          style={{
            '--social-color': social.color,
            '--social-hover-bg': social.color,
            '--social-hover-shadow': `${social.color}40`
          }}
        >
          <social.Icon className='social-icon' fill='currentColor' />
          <span className='social-name'>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
