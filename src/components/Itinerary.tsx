import React, { useState } from 'react';
import './Itinerary.css';

interface Activity {
  time: string;
  title: string;
  description: string;
  icon: string;
}

interface Day {
  date: string;
  day: string;
  theme: string;
  activities: Activity[];
  highlight: string;
}

const Itinerary: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  const itinerary: Day[] = [
    {
      date: 'October 2',
      day: 'Thursday',
      theme: 'Arrival & Settling In',
      highlight: '🛬',
      activities: [
        {
          time: 'Morning',
          title: 'Arrive in Singapore',
          description: 'Land at Changi Airport, hotel check-in, freshen up and relax',
          icon: '✈️'
        },
        {
          time: 'Afternoon',
          title: 'Marina Bay Exploration',
          description: 'Gentle walk around Marina Bay area and Gardens by the Bay',
          icon: '🌳'
        },
        {
          time: 'Evening',
          title: 'Hawker Center Dinner',
          description: 'Relaxed dinner at Maxwell Food Centre or Lau Pa Sat',
          icon: '🍜'
        },
        {
          time: 'Night',
          title: 'Rest & Recover',
          description: 'Early night to adjust to timezone',
          icon: '😴'
        }
      ]
    },
    {
      date: 'October 3',
      day: 'Friday',
      theme: 'F1 Practice Day & Tech',
      highlight: '🏎️',
      activities: [
        {
          time: 'Morning',
          title: 'Leisurely Breakfast',
          description: 'Ya Kun Kaya Toast for traditional Singapore breakfast',
          icon: '☕'
        },
        {
          time: 'Late Morning',
          title: 'ArtScience Museum',
          description: 'Explore interactive tech and art exhibitions',
          icon: '🎨'
        },
        {
          time: 'Afternoon',
          title: 'F1 Practice Sessions',
          description: 'Head to Marina Bay Street Circuit for practice rounds',
          icon: '🏁'
        },
        {
          time: 'Evening',
          title: 'F1 Entertainment',
          description: 'Food, drinks, and entertainment at the circuit',
          icon: '🎪'
        }
      ]
    },
    {
      date: 'October 4',
      day: 'Saturday',
      theme: 'F1 Qualifying Day',
      highlight: '⚡',
      activities: [
        {
          time: 'Morning',
          title: 'Relaxed Morning',
          description: 'Sleep in, leisurely breakfast, hotel downtime',
          icon: '🌅'
        },
        {
          time: 'Afternoon',
          title: 'F1 Qualifying Session',
          description: 'Watch teams battle for pole position',
          icon: '🏎️'
        },
        {
          time: 'Evening',
          title: 'F1 Concerts & Shows',
          description: 'Enjoy live performances and entertainment',
          icon: '🎵'
        },
        {
          time: 'Night',
          title: 'Post-Qualifying Celebrations',
          description: 'Dinner and drinks, soak in the atmosphere',
          icon: '🥂'
        }
      ]
    },
    {
      date: 'October 5',
      day: 'Sunday',
      theme: 'GRAND PRIX DAY! 🏆',
      highlight: '🏆',
      activities: [
        {
          time: 'Morning',
          title: 'Light Breakfast',
          description: 'Prepare for the biggest day - the main event!',
          icon: '🍳'
        },
        {
          time: 'Afternoon',
          title: 'SINGAPORE F1 GRAND PRIX',
          description: 'The race! Experience the thrill of Formula 1 under the lights',
          icon: '🏁'
        },
        {
          time: 'Evening',
          title: 'Race Excitement',
          description: 'Watch the podium ceremony and celebrations',
          icon: '🏆'
        },
        {
          time: 'Night',
          title: 'Post-Race Concert Finale',
          description: 'Major headliner performance and celebrations',
          icon: '🎸'
        }
      ]
    },
    {
      date: 'October 6',
      day: 'Monday',
      theme: 'Recovery & Relaxation',
      highlight: '🌺',
      activities: [
        {
          time: 'Morning',
          title: 'Sleep In & Brunch',
          description: 'Well-deserved rest after the Grand Prix excitement',
          icon: '☕'
        },
        {
          time: 'Afternoon',
          title: 'Peaceful Gardens',
          description: 'Singapore Botanic Gardens or hotel pool relaxation',
          icon: '🌳'
        },
        {
          time: 'Evening',
          title: 'Fine Dining Experience',
          description: 'Celebrate at Odette or Burnt Ends - Michelin-starred dining',
          icon: '⭐'
        },
        {
          time: 'Night',
          title: 'Gentle Exploration',
          description: 'Light stroll around local neighborhoods',
          icon: '🚶'
        }
      ]
    },
    {
      date: 'October 7',
      day: 'Tuesday',
      theme: 'Final Day & Departure',
      highlight: '✈️',
      activities: [
        {
          time: 'Morning',
          title: 'Last-Minute Shopping',
          description: 'Chinatown or Little India for souvenirs and memories',
          icon: '🛍️'
        },
        {
          time: 'Midday',
          title: 'Final Singaporean Meal',
          description: 'One last iconic lunch - maybe that chili crab!',
          icon: '🦀'
        },
        {
          time: 'Afternoon',
          title: 'Check-out & Airport',
          description: 'Head to Changi Airport with amazing memories',
          icon: '🧳'
        },
        {
          time: 'Evening',
          title: 'Homeward Bound',
          description: 'Departure with unforgettable father-son memories',
          icon: '🛫'
        }
      ]
    }
  ];

  return (
    <section className="itinerary">
      <div className="container">
        <h2 className="section-title">Your Singapore Itinerary</h2>
        <p className="section-subtitle">
          6 days of adventure, perfectly balanced between excitement and relaxation
        </p>

        <div className="days-selector">
          {itinerary.map((day, index) => (
            <button
              key={index}
              className={`day-btn ${activeDay === index ? 'active' : ''}`}
              onClick={() => setActiveDay(index)}
            >
              <span className="day-highlight">{day.highlight}</span>
              <span className="day-date">{day.date}</span>
              <span className="day-name">{day.day}</span>
            </button>
          ))}
        </div>

        <div className="day-details">
          <div className="day-header">
            <h3>{itinerary[activeDay].date} - {itinerary[activeDay].day}</h3>
            <p className="day-theme">{itinerary[activeDay].theme}</p>
          </div>

          <div className="activities-timeline">
            {itinerary[activeDay].activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-time">
                  <span>{activity.time}</span>
                </div>
                <div className="activity-content">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-details">
                    <h4>{activity.title}</h4>
                    <p>{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="itinerary-footer">
          <p>💡 <strong>Tip:</strong> This itinerary balances high-energy F1 excitement with restful downtime. Stay flexible and enjoy the journey!</p>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
