import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About This Trip</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">🏎️</div>
            <h3>The Adventure</h3>
            <p>
              Join Simon (70) and Jeremy (39) Marks on an unforgettable father-son journey
              to the Lion City. This isn't just any trip—it's a celebration of shared passions,
              cutting-edge technology, world-class cuisine, and the roaring engines of Formula 1.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🇦🇺</div>
            <h3>From Down Under</h3>
            <p>
              Traveling from Australia, this dynamic duo brings their love for innovation
              and gastronomy to Singapore's vibrant streets. Five days of exploration,
              excitement, and creating memories that will last a lifetime.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🍜</div>
            <h3>What Drives Us</h3>
            <p>
              Technology enthusiasts by day, food connoisseurs by night. From hawker centers
              to fine dining, from the Singapore F1 Grand Prix to peaceful botanical gardens—
              this trip perfectly balances adrenaline with relaxation.
            </p>
          </div>
        </div>

        <div className="trip-highlights">
          <h3>Trip Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-icon">🏁</span>
              <span>Singapore F1 Grand Prix</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🍲</span>
              <span>Authentic Hawker Centers</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🌳</span>
              <span>Gardens by the Bay</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🏙️</span>
              <span>Marina Bay Sands</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🎨</span>
              <span>ArtScience Museum</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🌺</span>
              <span>Cultural Neighborhoods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
