const Crew = () => {
  return (
    <div className='ios26-container'>
      {/* Main iOS 26 Content */}
      <main className='ios26-main'>
        <div className='ios26-hero'>
          <h1 className='ios26-title'>
            FORTNITE <span className='title-accent'>CREW</span>
            <br />
            Premium Subscription
          </h1>
        </div>

        <div className='ios26-features'>
          {/* Liquid Glass Section */}
          <div className='feature-section liquid-glass'>
            <div className='feature-visual'>
              <div className='feature-silhouette liquid-silhouette'>
                <div className='liquid-emoji'>👕</div>
              </div>
            </div>
            <div className='feature-content'>
              <h2>Exclusive Monthly Outfits</h2>
              <p>
                Get brand new premium outfits delivered monthly, including skins, back bling,
                pickaxes, and emotes. Each month features unique themes and collaborations you can't
                get anywhere else.
              </p>
            </div>
          </div>

          {/* Lock Screen Section */}
          <div className='feature-section lock-screen'>
            <div className='feature-visual'>
              <div className='feature-silhouette lock-silhouette'>
                <div className='lock-emoji'>💸</div>
              </div>
            </div>
            <div className='feature-content'>
              <h2>1,000 V-Bucks Monthly</h2>
              <p>
                Receive 1,000 V-Bucks every month to spend in the Item Shop on your favorite
                cosmetics, emotes, or save them up for limited-time bundles and exclusive
                collaborations.
              </p>
            </div>
          </div>

          {/* Call Screening Section */}
          <div className='feature-section call-screening'>
            <div className='feature-visual'>
              <div className='feature-silhouette call-silhouette'>
                <div className='call-emoji'>🎫</div>
              </div>
            </div>
            <div className='feature-content'>
              <h2>Season Battle Pass Included</h2>
              <p>
                Every season's Battle Pass is included with your Crew membership, giving you instant
                access to 100+ tiers of exclusive rewards, emotes, and V-Bucks as you level up.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
