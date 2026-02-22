const shopItems = [
  {
    id: 1,
    name: 'Renegade Raider',
    price: 1500,
    isNew: false,
    gradient: 'blue-purple',
    type: 'outfit'
  },
  {
    id: 2,
    name: 'Skull Trooper',
    price: 1200,
    isNew: false,
    gradient: 'red-orange',
    type: 'outfit'
  },
  {
    id: 3,
    name: 'Rainbow Smash',
    price: 800,
    isNew: true,
    gradient: 'blue-cyan',
    type: 'pickaxe'
  },
  {
    id: 4,
    name: 'Fresh Emote',
    price: 400,
    isNew: false,
    gradient: 'purple-pink',
    type: 'emote'
  }
];

const ItemShop = () => {
  return (
    <div className='item-shop-container'>
      {/* Shop Header */}
      <header className='shop-header'>
        <h1 className='shop-title'>ITEM SHOP</h1>
      </header>

      {/* Main Content */}
      <main className='shop-main'>
        {/* Event Title */}
        <div className='event-title'>
          <h2>FORTNITEMARES 2025</h2>
        </div>

        {/* Featured Bundle */}
        <div className='featured-bundle'>
          <div className='bundle-card featured'>
            <div className='bundle-badge'>800 V-BUCKS OFF</div>
            <div className='bundle-visual'>
              <div className='character-large'></div>
            </div>
            <div className='bundle-info'>
              <h3>Midnight Raven Bundle</h3>
              <div className='bundle-pricing'>
                <span className='vbucks-icon'>V</span>
                <span className='current-price'>2,200</span>
                <span className='original-price'>3,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className='items-grid'>
          {shopItems.map(item => (
            <div key={item.id} className={`item-card ${item.gradient}`}>
              <div className='new-badge'>NEW!</div>
              <div className='item-visual'>
                <div className={`item-character ${item.type}`}></div>
              </div>
              <div className='item-info'>
                <h4>{item.name}</h4>
                <div className='item-pricing'>
                  <span className='vbucks-icon'>V</span>
                  <span className='price'>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Grid Section */}
        <div className='bundle-grid-section'>
          <div className='bundle-grid'>
            <div className='bundle-card scooby'>
              <div className='bundle-badge'>4,600 V-BUCKS OFF</div>
              <div className='bundle-visual'>
                <div className='bundle-characters'>
                  <div className='character-silhouette shaggy'>🧑</div>
                  <div className='character-silhouette scooby'>🐕</div>
                </div>
              </div>
              <div className='bundle-info'>
                <h3>Original Heroes Bundle</h3>
                <div className='bundle-pricing'>
                  <span className='vbucks-icon'>V</span>
                  <span className='current-price'>3,400</span>
                  <span className='original-price'>8,000</span>
                </div>
              </div>
            </div>

            <div className='bundle-card mystery-inc'>
              <div className='bundle-badge'>5,600 V-BUCKS OFF</div>
              <div className='bundle-visual'>
                <div className='bundle-characters'>
                  <div className='character-silhouette fred'>🧑</div>
                  <div className='character-silhouette daphne'>👩</div>
                  <div className='character-silhouette velma'>👩</div>
                </div>
              </div>
              <div className='bundle-info'>
                <h3>Galaxy Bundle</h3>
                <div className='bundle-pricing'>
                  <span className='vbucks-icon'>V</span>
                  <span className='current-price'>3,800</span>
                  <span className='original-price'>9,400</span>
                </div>
              </div>
            </div>

            <div className='bundle-card mystery-machine'>
              <div className='bundle-badge'>2,000 V-BUCKS OFF</div>
              <div className='bundle-visual'>
                <div className='bundle-characters'>
                  <div className='character-silhouette van'>🚐</div>
                </div>
              </div>
              <div className='bundle-info'>
                <h3>Battle Bus Bundle</h3>
                <div className='bundle-pricing'>
                  <span className='vbucks-icon'>V</span>
                  <span className='current-price'>2,000</span>
                </div>
              </div>
            </div>

            <div className='bundle-card simple-plan'>
              <div className='bundle-badge'>500 V-BUCKS OFF</div>
              <div className='bundle-visual'>
                <div className='bundle-characters'>
                  <div className='character-silhouette band'>🎸</div>
                </div>
              </div>
              <div className='bundle-info'>
                <h3>
                  Icon Series
                  <br />
                  Emote Bundle
                </h3>
                <div className='bundle-pricing'>
                  <span className='vbucks-icon'>V</span>
                  <span className='current-price'>500</span>
                </div>
              </div>
            </div>

            <div className='bundle-card ghost'>
              <div className='bundle-badge'>1,200 V-BUCKS OFF</div>
              <div className='bundle-visual'>
                <div className='bundle-characters'>
                  <div className='character-silhouette ghost'>👻</div>
                </div>
              </div>
              <div className='bundle-info'>
                <h3>Dark Series Bundle</h3>
                <div className='bundle-pricing'>
                  <span className='vbucks-icon'>V</span>
                  <span className='current-price'>1,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemShop;
