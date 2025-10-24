import SocialLinks from './SocialLinks';

const relatedArticles = [
  {
    id: 1,
    date: 'SEP 19, 2025',
    title: 'Look Out for #1 in Fortnite Delulu',
    category: 'Battle Royale',
    gradient: 'rainbow'
  },
  {
    id: 2,
    date: 'SEP 18, 2025',
    title: 'Summon Megazord in Battle Royale v37.30',
    category: 'Battle Royale',
    gradient: 'purple-blue'
  }
];

const News = () => {
  return (
    <div className="news-container">
      <main className="news-main">
        {/* Article Header */}
        <div className="article-header">
          <div className="article-date">OCT 09, 2025</div>
          <h1 className="article-title">
            Fortnitemares 2025: A Terrifying New Cast of Horror Icons
          </h1>
          <div className="article-categories">
            <span className="category-tag">Battle Royale</span>
            <span className="category-tag">Reload</span>
          </div>
        </div>

        {/* Main Characters Showcase */}
        <div className="characters-showcase">
          <div className="character-card jason">
            <div className="character-image jason-bg">
              <div className="character-overlay">
                <div className="jason-silhouette"></div>
              </div>
            </div>
          </div>

          <div className="character-card doja-cat">
            <div className="character-image doja-bg">
              <div className="character-overlay">
                <div className="doja-silhouette"></div>
              </div>
            </div>
          </div>

          <div className="character-card ghost-face">
            <div className="character-image ghost-face-bg">
              <div className="character-overlay">
                <div className="ghost-face-silhouette"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="article-content">
          <div className="article-text">
            <p>
              Fear gets a new face. Meet the Mother of Thorns, Doja Cat, who's twisting Battle
              Royale into her haunted kingdom and unleashing chaos with a wild cast of
              characters. From Jason to Wednesday Addams to Scooby-Doo and Ghost Face, VIPs
              of fright await.
            </p>

            <p>
              Step into the nightmare now 'til November 1!
            </p>

            <p>
              And watch as the horror spreads to Reload on October 10, where the all-new
              Nitmare Island will debut.
            </p>
          </div>
        </div>

        {/* Twitch Drops Section */}
        <div className="twitch-drops-section">
          <h2 className="twitch-title">Twitch Drops</h2>
          <p className="twitch-description">
            Fortnitemares is screaming into streams too. Watch any stream in the{' '}
            <a href="#" className="twitch-link">Fortnite category on Twitch</a> from October 9
            at 9 AM ET 'til October 12 at 11:59 PM ET to unlock:
          </p>

          <ul className="twitch-rewards">
            <li>Treat Sack Back Bling (Watch for 30 minutes cumulative)</li>
            <li>Treat Axe Pickaxe (Watch for 1 hour cumulative)</li>
          </ul>

          <p className="twitch-info">
            Visit <a href="#" className="fortnite-link">fortnite.com/twitch-drops</a> for more info!
          </p>
        </div>

        {/* More Like This Section */}
        <div className="more-like-this-section">
          <h2 className="more-like-title">More Like This</h2>
          <div className="related-categories">
            <span className="category-tag">Battle Royale</span>
            <span className="category-tag">Reload</span>
          </div>

          <div className="related-articles">
            {relatedArticles.map((article) => (
              <div key={article.id} className={`related-article ${article.gradient}`}>
                <div className="related-image">
                  <div className={`related-visual ${article.gradient}`}></div>
                </div>
                <div className="related-content">
                  <div className="related-date">{article.date}</div>
                  <h3 className="related-title">{article.title}</h3>
                  <div className="related-category">
                    <span className="category-tag small">{article.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default News;
