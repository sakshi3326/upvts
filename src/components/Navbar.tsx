import React from 'react';
import '../css/Landing.css';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

interface NavbarProps {
  menuItems: string[];
}

interface DropdownItem {
  label: string;
  path: string;
  target?: string; // Optional target (e.g., '_blank')
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  
  // Define dropdown items
  const dropdownItems: Record<string, DropdownItem[]> = {
    Exhibitors: [
      { label: 'Exhibitors Information', path: '/exhibitors/why-exhibit' },
      { label: 'Exhibitors Registration', path: '/exhibitor-registration' },
      { label: 'Brochure', path: '/upvts.pdf', target: '_blank' },
      { label: 'Flyer', path: '/invite' },
    ],
    Visitors: [
      { label: 'Visitors Information', path: '/visitors/why-visit' },
      { label: 'Visitors Registration', path: '/visitors/registration' },
      { label: 'Get Direction', path: '/visitors/schedule' },
    ],
  };

  // Define direct links (non-dropdown items)
  const directLinks: Record<string, string> = {
    'About UPVTS': '/about', // 👈 Internal route
    'Downloads': '/downloads',
    'Home': '/',
    'Contact': '/contact',
  };

  return (
    <nav className="top-nav">
      {menuItems.map((item) => (
        <div key={item} className="nav-item">
          {/* Dropdown Items (Exhibitors/Visitors) */}
          {['Exhibitors', 'Visitors'].includes(item) ? (
            <div className="dropdown">
              <span>{item}</span>
              <div className="dropdown-content">
                {dropdownItems[item]?.map((subItem) => (
                  subItem.target === '_blank' ? (
                    <a 
                      key={subItem.label} 
                      href={subItem.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {subItem.label}
                    </a>
                  ) : (
                    <Link key={subItem.label} to={subItem.path}>
                      {subItem.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ) : (
            /* Direct Links (About UPVTS, Contact, etc.) */
            directLinks[item] ? (
              <Link to={directLinks[item]}>{item}</Link> // 👈 Internal navigation
            ) : (
              <span>{item}</span> // Fallback (no link)
            )
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;