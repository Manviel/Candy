export const GameCard = ({
  gradientClass,
  title,
  subtitle,
  badge,
  joinButton,
  active,
  href,
  SocialIcon,
  socialColor
}) => {
  return (
    <a href={href || '#'} className={`game-card ${active ? 'active' : ''}`}>
      <div className={`game-card-bg ${gradientClass}`}>
        {SocialIcon && (
          <div className='game-card-social-icon' style={{ color: socialColor }}>
            <SocialIcon size={52} strokeWidth={1.5} />
          </div>
        )}
      </div>
      {badge && <span className='game-card-badge'>+{badge}</span>}
      {joinButton && <span className='game-card-join'>JOIN</span>}
      <div className='game-card-overlay'>
        <h3 className='game-card-title'>{title}</h3>
        {subtitle && <p className='game-card-subtitle'>{subtitle}</p>}
      </div>
    </a>
  );
};
