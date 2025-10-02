import React from 'react';
import './Attractions.css';

interface Attraction {
  name: string;
  description: string;
  icon: string;
  category: string;
}

const Attractions: React.FC = () => {
  const attractions: Attraction[] = [
    {
      name: 'Gardens by the Bay',
      description: 'Explore the iconic Supertree Grove, Cloud Forest, and Flower Dome. A must-see blend of nature and technology.',
      icon: '🌳',
      category: 'Nature & Tech'
    },
    {
      name: 'Marina Bay Sands',
      description: 'Visit the SkyPark observation deck for breathtaking 360° views of Singapore\'s skyline.',
      icon: '🏙️',
      category: 'Iconic Landmarks'
    },
    {
      name: 'Singapore Flyer',
      description: 'Experience one of the world\'s largest observation wheels with panoramic views of the city.',
      icon: '🎡',
      category: 'Iconic Landmarks'
    },
    {
      name: 'ArtScience Museum',
      description: 'Perfect for tech enthusiasts! Interactive exhibitions blending art, science, and innovation.',
      icon: '🎨',
      category: 'Culture & Tech'
    },
    {
      name: 'Sentosa Island',
      description: 'Relax on beaches, visit S.E.A. Aquarium, or enjoy entertainment and leisure activities.',
      icon: '🏝️',
      category: 'Relaxation'
    },
    {
      name: 'Singapore Botanic Gardens',
      description: 'UNESCO World Heritage site with peaceful walks through lush tropical greenery.',
      icon: '🌺',
      category: 'Nature'
    },
    {
      name: 'Chinatown',
      description: 'Discover rich heritage, Buddha Tooth Relic Temple, and vibrant street markets.',
      icon: '🏮',
      category: 'Culture'
    },
    {
      name: 'Little India',
      description: 'Immerse yourself in colorful streets, aromatic spices, and stunning architecture.',
      icon: '🕌',
      category: 'Culture'
    },
    {
      name: 'National Gallery Singapore',
      description: 'World-class art museum housed in beautifully restored colonial buildings.',
      icon: '🖼️',
      category: 'Art & Culture'
    }
  ];

  return (
    <section className="attractions">
      <div className="container">
        <h2 className="section-title">Must-See Attractions</h2>
        <p className="section-subtitle">
          Discover the perfect blend of nature, technology, culture, and modern marvels
        </p>

        <div className="attractions-grid">
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-card">
              <div className="attraction-icon">{attraction.icon}</div>
              <div className="attraction-category">{attraction.category}</div>
              <h3 className="attraction-name">{attraction.name}</h3>
              <p className="attraction-description">{attraction.description}</p>
              <button className="attraction-btn">Get Directions</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
