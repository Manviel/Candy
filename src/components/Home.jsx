import SocialLinks from './SocialLinks';

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            FORTNITE
            <br />
            <span className="hero-title-pro">BATTLE ROYALE</span>
          </h1>

          <div className="hero-image">
            <div className="iphone-camera-card">
              <div className="iphone-camera-image">
                <div className="iphone-camera-overlay">
                  <div className="iphone-silhouette">
                    <div className="iphone-emoji">📱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="buy-button">Buy</button>
            <div className="pricing">
              <span className="pricing-text">From $1099 or $45.79/mo. for 24 mo.<sup>*</sup></span>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Home;
