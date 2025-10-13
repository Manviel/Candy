const Crew = () => {
  return (
    <section className="crew-section">
      <div className="crew-container">
        <h1 className="crew-title">Fortnite Crew</h1>
        <p className="crew-subtitle">
          Join the ultimate Fortnite experience with exclusive monthly content,
          premium rewards, and endless adventures. Level up your game today.
        </p>

        <div className="crew-benefits">
          <div className="benefit-item">
            <h3>Monthly Crew Pack</h3>
            <p>Get an exclusive Outfit Bundle with matching accessories, emotes, and more delivered every month</p>
          </div>
          <div className="benefit-item">
            <h3>Battle Pass Included</h3>
            <p>Automatic access to the current season&apos;s Battle Pass with all rewards and exclusive challenges</p>
          </div>
          <div className="benefit-item">
            <h3>1,000 V-Bucks Monthly</h3>
            <p>Receive 1,000 V-Bucks every month to spend on your favorite items in the Item Shop</p>
          </div>
          <div className="benefit-item">
            <h3>Exclusive Rocket Pass</h3>
            <p>Premium access to Rocket Racing and other game modes with exclusive vehicle customizations</p>
          </div>
        </div>

        <div className="subscription-cta">
          <h2 className="cta-title">Join Fortnite Crew Today</h2>
          <p className="cta-subtitle">
            Starting at $11.99/month • Cancel anytime • Exclusive content every month
          </p>
          <a href="/subscribe" className="cta-button">
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Crew;
