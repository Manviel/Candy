const Crew = () => {
  return (
    <div className="ios26-container">
      {/* iOS 26 Header */}
      <div className="ios26-header">
        <div className="learn-more-link">
          <a href="/news">Learn more about Fortnitemares →</a>
        </div>
      </div>

      {/* Main iOS 26 Content */}
      <main className="ios26-main">
        <div className="ios26-hero">
          <h1 className="ios26-title">
            FORTNITEMARES <span className="title-accent">2025</span>
            <br />
            Horror Icons Return
          </h1>
        </div>

        <div className="ios26-features">
          {/* Liquid Glass Section */}
          <div className="feature-section liquid-glass">
            <div className="feature-visual">
              <div className="feature-silhouette liquid-silhouette">
                <div className="liquid-emoji">💎</div>
              </div>
            </div>
            <div className="feature-content">
              <h2>Liquid Glass.</h2>
              <p>Enhanced visual effects in Fortnite bring your favorite characters to life with dynamic reflections and real-time adaptations. Experience horror icons with stunning 3D depth effects that respond to your every move.</p>
            </div>
          </div>

          {/* Lock Screen Section */}
          <div className="feature-section lock-screen">
            <div className="feature-visual">
              <div className="feature-silhouette lock-silhouette">
                <div className="lock-emoji">🔒</div>
              </div>
            </div>
            <div className="feature-content">
              <h2>Dynamic Lock Screen.</h2>
              <p>Fortnite's enhanced lock screen brings your favorite characters and moments to life with vibrant wallpapers and dynamic notifications. Every glance at your screen becomes an immersive experience.</p>
            </div>
          </div>

          {/* Call Screening Section */}
          <div className="feature-section call-screening">
            <div className="feature-visual">
              <div className="feature-silhouette call-silhouette">
                <div className="call-emoji">🔔</div>
              </div>
            </div>
            <div className="feature-content">
              <h2>Smart Notifications.</h2>
              <p>Fortnite's intelligent notification system filters and prioritizes your alerts, ensuring you never miss important squad invites or limited-time events while staying focused on the battle.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
