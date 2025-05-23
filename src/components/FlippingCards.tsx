import { useState } from 'react';
import '../css/FlippingCards.css'; // We'll create this CSS file next

const FlippingCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const exhibitionCards = [
  {
    frontImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    frontTitle: "Exhibition Hall",
    frontSubtitle: "Business Showcase",
    backContent: "150+ exhibitors from 12 countries displaying cutting-edge products across agriculture, textiles, and renewable energy sectors"
  },
  {
    frontImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    frontTitle: "Industrial Speaker Series",
    frontSubtitle: "Knowledge Exchange",
    backContent: "35+ industry leaders including CEOs from Fortune 500 companies sharing insights on UP's industrial growth potential"
  },
  {
    frontImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    frontTitle: "Cultural Showcase",
    frontSubtitle: "Heritage Meets Business",
    backContent: "Evening gala featuring Banarasi silk fashion show and traditional crafts demonstration, attended by 500+ delegates"
  },
  // {
  //   frontImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
  //   frontTitle: "B2B Matchmaking",
  //   frontSubtitle: "Strategic Connections",
  //   backContent: "AI-powered matchmaking platform facilitated 1,200+ meetings between MSMEs and international buyers"
  // },
  // {
  //   frontImage: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
  //   frontTitle: "Startup Pavilion",
  //   frontSubtitle: "Innovation Hub",
  //   backContent: "75 UP-based startups secured cumulative funding of ₹25 Crore from angel investors during the event"
  // },
  // {
  //   frontImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
  //   frontTitle: "Government Schemes Desk",
  //   frontSubtitle: "Policy Benefits",
  //   backContent: "On-the-spot approvals for 300+ applications under UP's One District One Product (ODOP) initiative"
  // }
];

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="wrapper">
      
      <div className="cols">
        {exhibitionCards.map((card, index) => (
          <div 
            key={index}
            className={`col ${hoveredCard === index ? 'hover' : ''}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="container">
              <div 
                className="front" 
                style={{ backgroundImage: `url(${card.frontImage})` }}
              >
                <div className="inner">
                  <p>{card.frontTitle}</p>
                  <span>{card.frontSubtitle}</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{card.backContent}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlippingCards;