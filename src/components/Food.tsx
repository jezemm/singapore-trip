import React, { useState } from 'react';
import './Food.css';

interface FoodPlace {
  name: string;
  type: string;
  description: string;
  specialties: string[];
  icon: string;
}

const Food: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const foodPlaces: FoodPlace[] = [
    {
      name: 'Maxwell Food Centre',
      type: 'hawker',
      description: 'Legendary hawker center home to Tian Tian Hainanese Chicken Rice',
      specialties: ['Hainanese Chicken Rice', 'Char Kway Teow', 'Congee'],
      icon: '🍜'
    },
    {
      name: 'Lau Pa Sat',
      type: 'hawker',
      description: 'Historic hawker center with Victorian architecture and satay street',
      specialties: ['Satay', 'Laksa', 'Oyster Omelette'],
      icon: '🍢'
    },
    {
      name: 'Tekka Centre',
      type: 'hawker',
      description: 'Little India\'s vibrant hawker center with authentic Indian cuisine',
      specialties: ['Biryani', 'Roti Prata', 'Fish Head Curry'],
      icon: '🍛'
    },
    {
      name: 'Odette',
      type: 'fine',
      description: '3 Michelin stars - Contemporary French cuisine at National Gallery',
      specialties: ['Tasting Menu', 'French Fine Dining', 'Wine Pairing'],
      icon: '⭐'
    },
    {
      name: 'Burnt Ends',
      type: 'fine',
      description: 'Modern Australian barbecue with open kitchen concept',
      specialties: ['Wood-fired Dishes', 'BBQ', 'Craft Cocktails'],
      icon: '🔥'
    },
    {
      name: 'Candlenut',
      type: 'fine',
      description: 'World\'s first Michelin-starred Peranakan restaurant',
      specialties: ['Peranakan Cuisine', 'Buah Keluak', 'Modern Nonya'],
      icon: '🌟'
    },
    {
      name: 'Ya Kun Kaya Toast',
      type: 'local',
      description: 'Iconic breakfast spot since 1944, perfect morning tradition',
      specialties: ['Kaya Toast', 'Soft-boiled Eggs', 'Kopi'],
      icon: '☕'
    },
    {
      name: 'Jumbo Seafood',
      type: 'local',
      description: 'Famous for Singapore chili crab and fresh seafood',
      specialties: ['Chili Crab', 'Black Pepper Crab', 'Cereal Prawns'],
      icon: '🦀'
    },
    {
      name: 'Newton Food Centre',
      type: 'local',
      description: 'Open-air hawker center, great for late-night eats post-F1',
      specialties: ['BBQ Stingray', 'Hokkien Mee', 'Carrot Cake'],
      icon: '🌙'
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
              <button className="food-btn">Get Directions</button>
            </div>
          ))}
        </div>

        <div className="must-try">
          <h3>Must-Try Dishes</h3>
          <div className="dishes-grid">
            <div className="dish-item">🍗 Hainanese Chicken Rice</div>
            <div className="dish-item">🦀 Chili Crab</div>
            <div className="dish-item">🍜 Laksa</div>
            <div className="dish-item">🍢 Satay</div>
            <div className="dish-item">☕ Kaya Toast</div>
            <div className="dish-item">🍝 Hokkien Mee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
