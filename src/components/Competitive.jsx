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

          <div className="chip-frame">
            <div className="tournament-icon">🏆</div>
            <div className="chip-label">TOURNAMENTS</div>
          </div>
          <div className="chip-grid">
            <div className="bracket-section">
              <div className="bracket-silhouette">🏟️</div>
            </div>
            <div className="prize-section">
              <div className="prize-silhouette">💎</div>
            </div>
            <div className="stats-section">
              <div className="stats-silhouette">📊</div>
            </div>
            <div className="leaderboard-section">
              <div className="leaderboard-silhouette">👑</div>
            </div>
          </div>

          {/* Competitive Description */}
          <div className="performance-description">
            <p>
              Enter the arena and compete in epic Fortnite tournaments. Battle through brackets,
              claim massive prize pools, and climb the leaderboards to prove your dominance. From
              casual play to professional esports, every victory brings you closer to legendary
              status.
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
