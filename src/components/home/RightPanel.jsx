export const RightPanel = () => {
  return (
    <div className='right-panel-wrapper'>
      {/* Promotional card — clickable */}
      <a href='/item-shop' className='promo-card'>
        <div className='promo-image'>🦸</div>
        <div className='promo-content'>
          <p className='promo-title'>
            New bundles
            <br />
            ARE HERE
          </p>
          <div className='promo-accent' />
        </div>
      </a>

      {/* Social/notification card */}
      <a href='/news' className='notification-card'>
        <div className='notification-avatar'>🤠</div>
        <div className='notification-text'>
          <strong>Sammy</strong> shared a new
          <br />
          world to explore!
        </div>
      </a>
    </div>
  );
};
