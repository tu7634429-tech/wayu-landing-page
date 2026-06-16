import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
  <img src="/images/logo.png" alt="WAYU" />
</div>

        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About WAYU</a>
          <a href="#benefits">Benefits</a>
          <a href="#how">How To Use</a>
          <a href="#faq">FAQ</a>
        </nav>

        <button className="contact-btn">
          Contact Us
        </button>

      </div>
    </header>
  );
}

export default Navbar;