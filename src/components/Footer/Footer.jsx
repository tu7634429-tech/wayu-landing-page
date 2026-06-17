import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* BACKGROUND GLOW */}
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* TOP BRAND */}
        <div className="footer-brand">
          <img src="/images/logo.png" alt="WAYU" />
          <p>Air Purifiers by Arctic</p>
        </div>

        {/* GRID */}
        <div className="footer-grid">

          <div className="footer-card">
            <div className="icon">✉</div>
            <h4>Email</h4>
            <p>john@example.com</p>
          </div>

          <div className="footer-card">
            <div className="icon">📞</div>
            <h4>Contact</h4>
            <p>+94 123 456 234</p>
          </div>

          <div className="footer-card">
            <div className="icon">📍</div>
            <h4>Location</h4>
            <p>Colombo, Sri Lanka</p>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="newsletter">
          <h3>Stay Updated</h3>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="socials">
          <span>in</span>
          <span>fb</span>
          <span>ig</span>
          <span>yt</span>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2026 WAYU. All Rights Reserved.</p>

          <div className="links">
            <a href="#">Privacy</a>
            <span>|</span>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;