import {
  MessageCircle,
  Camera,
  Video,
  Send,
  Music,
  Hash
} from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'Facebook', url: '#', color: '#1877f2', Icon: MessageCircle },
    { name: 'Telegram', url: '#', color: '#0088cc', Icon: Send },
    { name: 'Instagram', url: '#', color: '#FCAF45', Icon: Camera },
    { name: 'YouTube', url: '#', color: '#ff0000', Icon: Video },
    { name: 'TikTok', url: '#', color: '#ff0050', Icon: Music },
    { name: 'X', url: '#', color: '#1da1f2', Icon: Hash }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="social-link"
          style={{
            '--social-color': social.color,
            '--social-hover-bg': social.color,
            '--social-hover-shadow': `${social.color}40`
          }}
        >
          <social.Icon className="social-icon" fill="currentColor" />
          <span className="social-name">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
