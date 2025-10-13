const SocialLinks = () => {
  const socialLinks = [
    { name: 'Facebook', url: '#', color: '#1877f2' },
    { name: 'Telegram', url: '#', color: '#0088cc' },
    { name: 'Instagram', url: '#', color: '#e4405f' },
    { name: 'YouTube', url: '#', color: '#ff0000' },
    { name: 'TikTok', url: '#', color: '#000000' },
    { name: 'X', url: '#', color: '#1da1f2' }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          className="social-link"
          style={{ '--social-color': social.color }}
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
