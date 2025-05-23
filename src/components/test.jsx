@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-items {
    display: none;
    flex-direction: column;
    background: #fff;
    position: absolute;
    top: 60px;
    right: 10px;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .nav-items.open {
    display: flex;
  }

  .dropdown-content {
    position: static;
    box-shadow: none;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
}