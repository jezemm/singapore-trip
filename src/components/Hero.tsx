import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-02T00:00:00+08:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Simon & Jeremy's Singapore Adventure</h1>
        <p className="hero-tagline">Father & Son. F1. Food. Tech. Adventure.</p>
        <p className="hero-dates">October 2-7, 2025</p>

        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Hero;
