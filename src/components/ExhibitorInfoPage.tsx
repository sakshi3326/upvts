import Navbar from './Navbar';
import Footer from './Footer';
import '../css/ExhibitorinfoPage.scss'; // Import the SCSS file

const ExhibitorsInfoPage = () => {

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
            EXHIBITORS
          </h1>
          <p className="page-description">
            An ultimate show that will feature a whole gamut of recognized and unrecognized products, makers, and suppliers from the state of Uttar Pradesh has to offer. Here is a quick look:
          </p>

          <div className="categories-grid">
            {[
              "Agriculture & Allied Sectors",
              "Apparel / Textile / Handloom",
              "Automobile/ EV / Auto Components",
              "Chemicals, Gas & Paints",
              "Defence Pavilion",
              "Education Skills and Research & Development",
              "Energy / Power / Renewable - Solar, Wind, Hydro",
              "Engineering / Infrastructure / Construction / Real Estate",
              "Environment / Climate Change / Forest",
              "Financial Services Industry",
              "Fishery, Animal Husbandry & Dairy"
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

export default ExhibitorsInfoPage;