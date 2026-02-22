const relatedArticles = [
  {
    id: 1,
    date: 'OCT 20, 2025',
    title: 'Fortnite OG Returns - Classic Map is Back!',
    category: 'Battle Royale',
    gradient: 'rainbow'
  },
  {
    id: 2,
    date: 'OCT 15, 2025',
    title: 'New Marvel Heroes Join the Battle Bus',
    category: 'Battle Royale',
    gradient: 'purple-blue'
  }
];

const News = () => {
  return (
    <div className='news-container'>
      <main className='news-main'>
        {/* Article Header */}
        <div className='article-header'>
          <div className='article-date'>OCT 09, 2025</div>
          <h1 className='article-title'>Fortnitemares 2025: Horror Icons Return to the Island</h1>
          <div className='article-categories'>
            <span className='category-tag'>Battle Royale</span>
            <span className='category-tag'>Reload</span>
          </div>
        </div>

        {/* Main Characters Showcase */}
        <div className='characters-showcase'>
          <div className='character-card jason'>
            <div className='character-image jason-bg'>
              <div className='character-overlay'>
                <div className='jason-silhouette'></div>
              </div>
            </div>
          </div>

          <div className='character-card doja-cat'>
            <div className='character-image doja-bg'>
              <div className='character-overlay'>
                <div className='doja-silhouette'></div>
              </div>
            </div>
          </div>

          <div className='character-card ghost-face'>
            <div className='character-image ghost-face-bg'>
              <div className='character-overlay'>
                <div className='ghost-face-silhouette'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className='article-content'>
          <div className='article-text'>
            <p>
              Fear gets a new face in Fortnitemares 2025! The Cube Queen has returned to twist the
              Island into her haunted domain, unleashing chaos with legendary horror-themed outfits
              and weapons. From Skull Trooper to Shadow Midas to Raven, iconic dark skins have
              returned to celebrate the spookiest season.
            </p>

            <p>
              Jump into the nightmare from now until November 1st and experience exclusive
              Fortnitemares Quests with spooky rewards, haunted locations, and special horror-themed
              weapons and items.
            </p>

            <p>
              The horror spreads to Reload on October 10th, where Nightmare Island makes its
              terrifying debut with all-new challenges and rewards.
            </p>
          </div>
        </div>

        {/* Twitch Drops Section */}
        <div className='twitch-drops-section'>
          <h2 className='twitch-title'>Twitch Drops</h2>
          <p className='twitch-description'>
            Fortnitemares is screaming into streams too. Watch any stream in the{' '}
            <button type='button' className='twitch-link'>
              Fortnite category on Twitch
            </button>{' '}
            from October 9 at 9 AM ET 'til October 12 at 11:59 PM ET to unlock:
          </p>

          <ul className='twitch-rewards'>
            <li>Treat Sack Back Bling (Watch for 30 minutes cumulative)</li>
            <li>Treat Axe Pickaxe (Watch for 1 hour cumulative)</li>
          </ul>

          <p className='twitch-info'>
            Visit{' '}
            <button type='button' className='fortnite-link'>
              fortnite.com/twitch-drops
            </button>{' '}
            for more info!
          </p>
        </div>

        {/* More Like This Section */}
        <div className='more-like-this-section'>
          <h2 className='more-like-title'>More Like This</h2>

          <div className='related-articles'>
            {relatedArticles.map(article => (
              <div key={article.id} className={`related-article ${article.gradient}`}>
                <div className='related-image'>
                  <div className={`related-visual ${article.gradient}`}></div>
                </div>
                <div className='related-content'>
                  <div className='related-date'>{article.date}</div>
                  <h3 className='related-title'>{article.title}</h3>
                  <div className='related-category'>
                    <span className='category-tag small'>{article.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;
