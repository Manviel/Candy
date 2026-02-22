const BattlePass = () => {
  return (
    <div className='battle-pass-container'>
      <main className='design-section'>
        <div className='design-content'>
          {/* Battle Pass Label */}
          <div className='design-label'>
            <span>Battle Pass</span>
          </div>

          {/* Main Title */}
          <h1 className='design-title'>
            Unlock Epic Rewards
            <br />
            Every Season
            <br />
            <span className='title-accent'>Level Up</span>
          </h1>

          {/* Description */}
          <div className='design-description'>
            <p>
              The Fortnite Battle Pass is your gateway to exclusive cosmetics, emotes, and V-Bucks.
              Progress through 100 tiers of rewards by completing challenges and playing your way to
              legendary status.
            </p>
          </div>

          {/* Battle Pass Visual */}
          <div className='iphone-visual'>
            <div className='battle-pass-card'>
              <div className='battle-pass-image'>
                <div className='battle-pass-overlay'>
                  <div className='bp-silhouette'>
                    <div className='tier-number'>100</div>
                    <div className='tier-rewards'>
                      <div className='reward-icon'>🎖️</div>
                      <div className='reward-icon'>💎</div>
                      <div className='reward-icon'>⚡</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BattlePass;
