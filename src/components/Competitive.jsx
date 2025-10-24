import SocialLinks from './SocialLinks';

const Competitive = () => {
  return (
    <div className="competitive-container">
      <main className="performance-section">
        <div className="performance-content">
          {/* Competitive Label */}
          <div className="performance-label">
            <span>Competitive</span>
          </div>

          {/* Main Title */}
          <h1 className="performance-title">
            Rise to the <span className="title-accent">Top</span>
          </h1>

          {/* Tournament Visualization */}
          <div className="chip-visualization">
            <div className="chip-frame">
              <div className="tournament-icon">🏆</div>
              <div className="chip-label">TOURNAMENTS</div>
            </div>
            <div className="chip-grid">
              <div className="cpu-section">
                <div className="cpu-cores">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="cpu-core"></div>
                  ))}
                </div>
              </div>
              <div className="gpu-section">
                <div className="gpu-cores">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="gpu-core"></div>
                  ))}
                </div>
              </div>
              <div className="neural-section">
                <div className="neural-engine">
                  <div className="neural-core"></div>
                  <div className="neural-core"></div>
                  <div className="neural-core"></div>
                  <div className="neural-core"></div>
                </div>
              </div>
              <div className="memory-section">
                <div className="memory-blocks">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} className="memory-block"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Description */}
          <div className="performance-description">
            <p>
              Compete in Fortnite tournaments and climb the rankings to prove your skills.
              From casual matches to professional esports events, there's a competitive mode
              for every player. Track your progress, earn rewards, and become a legend.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Competitive;
