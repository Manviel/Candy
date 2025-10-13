import SocialLinks from './SocialLinks';

const Home = () => {
  return (
    <div className="home-container">
      <main className="hero-section home-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Fortnitemares 2025
            <br />
            Horror Icons
          </h1>
          <p className="hero-subtitle">
            A Terrifying Cast of Horror Icons
            <br />
            returns to Battle Royale and Reload
            <br />
            OCT 09, 2025
          </p>
        </div>
      </main>

      <footer className="footer">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Home;
