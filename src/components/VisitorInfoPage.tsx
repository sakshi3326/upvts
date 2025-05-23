import Navbar from './Navbar';
import Footer from './Footer';
import '../css/VisitorinfoPage.scss'; // Import the SCSS file

const VisitorsInfoPage = () => {

 const menuItems = [
  "Home",
    "About UPVTS",
    "Exhibitors",
    "Visitors",
    
    "Contact",
  ];

  return (
    <div className="exhibitors-page">
      <div className= "fixed-navbar">
        <Navbar menuItems={menuItems} />
        </div>

      <div className="main-content">
        <div className="content-container">
          <h1 className="page-header">
           Visitors
          </h1>
          <p className="page-description">
            An ideal platform for Indian and overseas audiences, business visitors, and other stakeholders who are associated directly or indirectly with the development model of the state of Uttar Pradesh. Here’s a brief glance:
          </p>

          <div className="categories-grid">
            {[
              "Buying Agents",
              "Corporates",
              "Distributors",
              "Domestic Buyers",
              "E-Commerce",
              "Exporters",
              "Institutional Buyers",
              "Investors",
              "Marketing Professional",
              "Overseas Buyers",
              "Importers & Wholesalers",
              "Retail Stores",
              "Think Tanks",
              "National & International Trader"
              // ... rest of your categories
            ].map((item, index) => (
              <div key={index} className="category-card">
                <p className="category-name">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VisitorsInfoPage;