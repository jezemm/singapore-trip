import React from 'react';
import './TravelTips.css';

interface Tip {
  category: string;
  icon: string;
  tips: string[];
}

const TravelTips: React.FC = () => {
  const travelTips: Tip[] = [
    {
      category: 'Weather & Clothing',
      icon: '☀️',
      tips: [
        'Tropical climate: hot & humid (26-32°C)',
        'Pack light, breathable clothing',
        'Bring sunscreen and sunglasses',
        'Light rain jacket for sudden showers',
        'Comfortable walking shoes essential'
      ]
    },
    {
      category: 'Transportation',
      icon: '🚇',
      tips: [
        'MRT (subway) is fast, cheap, and efficient',
        'Get an EZ-Link card for easy travel',
        'Download Grab app (like Uber)',
        'Taxis are metered and reliable',
        'Marina Bay Circuit has special F1 transport'
      ]
    },
    {
      category: 'Technology & Connectivity',
      icon: '📱',
      tips: [
        'Get a local SIM card at airport',
        'Free WiFi at most malls and attractions',
        'Download maps offline before traveling',
        'Power outlets: Type G (UK style)',
        'Changi Airport has charging stations everywhere'
      ]
    },
    {
      category: 'F1 Grand Prix Tips',
      icon: '🏎️',
      tips: [
        'Bring ear protection - it\'s LOUD!',
        'Arrive early to explore the circuit',
        'Download the F1 app for live timing',
        'Bay Grandstand offers great views',
        'Stay hydrated throughout the event'
      ]
    },
    {
      category: 'Money & Payments',
      icon: '💰',
      tips: [
        'Currency: Singapore Dollar (SGD)',
        'Cards accepted almost everywhere',
        'ATMs widely available',
        '1 AUD ≈ 0.88 SGD (check current rates)',
        'Hawker centers prefer cash'
      ]
    },
    {
      category: 'Cultural Etiquette',
      icon: '🙏',
      tips: [
        'No chewing gum (it\'s illegal to import)',
        'No tipping required (service charge included)',
        'Remove shoes when entering homes/temples',
        'Respect diverse cultures and religions',
        'Clean, safe city - littering fines apply'
      ]
    }
  ];

  return (
    <section className="travel-tips">
      <div className="container">
        <h2 className="section-title">Travel Tips & Essentials</h2>
        <p className="section-subtitle">
          Everything you need to know for a smooth Singapore adventure
        </p>

        <div className="tips-grid">
          {travelTips.map((tip, index) => (
            <div key={index} className="tip-card">
              <div className="tip-header">
                <span className="tip-icon">{tip.icon}</span>
                <h3>{tip.category}</h3>
              </div>
              <ul className="tip-list">
                {tip.tips.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="emergency-info">
          <h3>🚨 Emergency Contacts</h3>
          <div className="emergency-grid">
            <div className="emergency-item">
              <strong>Emergency:</strong> 999
            </div>
            <div className="emergency-item">
              <strong>Police:</strong> 999
            </div>
            <div className="emergency-item">
              <strong>Ambulance:</strong> 995
            </div>
            <div className="emergency-item">
              <strong>Tourism Hotline:</strong> 1800 736 2000
            </div>
          </div>
        </div>

        <div className="useful-apps">
          <h3>📱 Useful Apps to Download</h3>
          <div className="apps-list">
            <button
              className="app-tag"
              onClick={() => window.open('https://www.grab.com/sg/download/', '_blank')}
            >
              Grab (Transport)
            </button>
            <button
              className="app-tag"
              onClick={() => window.open('https://www.google.com/maps', '_blank')}
            >
              Google Maps
            </button>
            <button
              className="app-tag"
              onClick={() => window.open('https://www.smrt.com.sg/Journey-with-Us/Mobile-Application', '_blank')}
            >
              Singapore MRT Map
            </button>
            <button
              className="app-tag"
              onClick={() => window.open('https://www.formula1.com/en/latest/article.the-official-f1-app-your-mobile-guide-to-f1.5VASRjQW9yO0se8CAkieO2.html', '_blank')}
            >
              F1 Official App
            </button>
            <button
              className="app-tag"
              onClick={() => window.open('https://www.whatsapp.com/download', '_blank')}
            >
              WhatsApp (Communication)
            </button>
            <button
              className="app-tag"
              onClick={() => window.open('https://www.xe.com/apps/', '_blank')}
            >
              XE Currency Converter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
