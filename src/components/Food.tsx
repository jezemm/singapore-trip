import React, { useState } from 'react';
import './Food.css';

interface FoodPlace {
  name: string;
  type: string;
  description: string;
  specialties: string[];
  icon: string;
  mapsUrl: string;
}

const Food: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const foodPlaces: FoodPlace[] = [
    {
      name: 'Maxwell Food Centre',
      type: 'hawker',
      description: 'Legendary hawker center home to Tian Tian Hainanese Chicken Rice',
      specialties: ['Hainanese Chicken Rice', 'Char Kway Teow', 'Congee'],
      icon: '🍜',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maxwell+Food+Centre+Singapore'
    },
    {
      name: 'Lau Pa Sat',
      type: 'hawker',
      description: 'Historic hawker center with Victorian architecture and satay street',
      specialties: ['Satay', 'Laksa', 'Oyster Omelette'],
      icon: '🍢',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lau+Pa+Sat+Singapore'
    },
    {
      name: 'Tekka Centre',
      type: 'hawker',
      description: 'Little India\'s vibrant hawker center with authentic Indian cuisine',
      specialties: ['Biryani', 'Roti Prata', 'Fish Head Curry'],
      icon: '🍛',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tekka+Centre+Singapore'
    },
    {
      name: 'Odette',
      type: 'fine',
      description: '3 Michelin stars - Contemporary French cuisine at National Gallery',
      specialties: ['Tasting Menu', 'French Fine Dining', 'Wine Pairing'],
      icon: '⭐',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Odette+Restaurant+Singapore'
    },
    {
      name: 'Burnt Ends',
      type: 'fine',
      description: 'Modern Australian barbecue with open kitchen concept',
      specialties: ['Wood-fired Dishes', 'BBQ', 'Craft Cocktails'],
      icon: '🔥',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Burnt+Ends+Singapore'
    },
    {
      name: 'Candlenut',
      type: 'fine',
      description: 'World\'s first Michelin-starred Peranakan restaurant',
      specialties: ['Peranakan Cuisine', 'Buah Keluak', 'Modern Nonya'],
      icon: '🌟',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Candlenut+Restaurant+Singapore'
    },
    {
      name: 'Ya Kun Kaya Toast',
      type: 'local',
      description: 'Iconic breakfast spot since 1944, perfect morning tradition',
      specialties: ['Kaya Toast', 'Soft-boiled Eggs', 'Kopi'],
      icon: '☕',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ya+Kun+Kaya+Toast+Singapore'
    },
    {
      name: 'Jumbo Seafood',
      type: 'local',
      description: 'Famous for Singapore chili crab and fresh seafood',
      specialties: ['Chili Crab', 'Black Pepper Crab', 'Cereal Prawns'],
      icon: '🦀',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jumbo+Seafood+Singapore'
    },
    {
      name: 'Newton Food Centre',
      type: 'local',
      description: 'Open-air hawker center, great for late-night eats post-F1',
      specialties: ['BBQ Stingray', 'Hokkien Mee', 'Carrot Cake'],
      icon: '🌙',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Newton+Food+Centre+Singapore'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: '🍽️' },
    { id: 'hawker', label: 'Hawker Centers', icon: '🍜' },
    { id: 'fine', label: 'Fine Dining', icon: '⭐' },
    { id: 'local', label: 'Local Favorites', icon: '🦀' }
  ];

  const filteredPlaces = activeCategory === 'all'
    ? foodPlaces
    : foodPlaces.filter(place => place.type === activeCategory);

  return (
    <section className="food">
      <div className="container">
        <h2 className="section-title">Food & Dining Guide</h2>
        <p className="section-subtitle">
          From hawker centers to Michelin stars - a culinary journey through Singapore
        </p>

        <div className="food-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="food-grid">
          {filteredPlaces.map((place, index) => (
            <div key={index} className="food-card">
              <div className="food-icon">{place.icon}</div>
              <h3 className="food-name">{place.name}</h3>
              <p className="food-description">{place.description}</p>
              <div className="food-specialties">
                {place.specialties.map((specialty, idx) => (
                  <span key={idx} className="specialty-tag">{specialty}</span>
                ))}
              </div>
              <button
                className="food-btn"
                onClick={() => window.open(place.mapsUrl, '_blank')}
              >
                Get Directions
              </button>
            </div>
          ))}
        </div>

        <div className="must-try">
          <h3>Must-Try Dishes</h3>
          <div className="dishes-grid">
            <div className="dish-card">
              <div className="dish-image" style={{ backgroundImage: "url('https://static01.nyt.com/images/2025/01/28/multimedia/KP-Hainan-Chicken-Rice-hcgv/KP-Hainan-Chicken-Rice-hcgv-threeByTwoMediumAt2X.jpg?quality=75&auto=webp')" }}></div>
              <h4>🍗 Hainanese Chicken Rice</h4>
              <p>Singapore's national dish featuring tender poached chicken, fragrant rice cooked in chicken stock, and served with chili sauce and ginger paste.</p>
            </div>
            <div className="dish-card">
              <div className="dish-image" style={{ backgroundImage: "url('https://www.seriouseats.com/thmb/i0oXTPxJ-fF1ifXOa5Fqw9dy_Nw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__02__20130224-242112-singapore-chili-crab-edit-e02be72e16974f5da6fef41ec4ca7ea4.jpg')" }}></div>
              <h4>🦀 Chili Crab</h4>
              <p>Iconic Singaporean dish with succulent mud crab smothered in a sweet, savory, and slightly spicy tomato-based sauce. Perfect with fried mantou buns!</p>
            </div>
            <div className="dish-card">
              <div className="dish-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1637806930600-37fa8892069d?q=80&w=600')" }}></div>
              <h4>🍜 Laksa</h4>
              <p>Rich and spicy coconut curry noodle soup loaded with prawns, fish cakes, and tau pok. A perfect blend of Malay and Chinese flavors.</p>
            </div>
            <div className="dish-card">
              <div className="dish-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=600')" }}></div>
              <h4>🍢 Satay</h4>
              <p>Grilled skewered meat (chicken, beef, or mutton) marinated in turmeric and spices, served with peanut sauce, cucumber, and onions.</p>
            </div>
            <div className="dish-card">
              <div className="dish-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600')" }}></div>
              <h4>☕ Kaya Toast</h4>
              <p>Traditional breakfast of crispy toast with sweet coconut egg jam (kaya) and butter, served with soft-boiled eggs and strong local coffee (kopi).</p>
            </div>
            <div className="dish-card">
              <div className="dish-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600')" }}></div>
              <h4>🍝 Hokkien Mee</h4>
              <p>Stir-fried yellow noodles and rice vermicelli in a rich prawn and pork stock, topped with prawns, squid, pork belly, and sambal chili.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
