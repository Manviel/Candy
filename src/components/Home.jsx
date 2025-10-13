import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">⚔</span>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Бригада
            <br />
            Спартан
          </h1>
          <p className="hero-subtitle">
            3-я бригада оперативного призначення
            <br />
            імені полковника Петра
            <br />
            Болбочана Національної гвардії України
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
