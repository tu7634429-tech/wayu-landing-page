import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact-section">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow orb1"></div>
      <div className="bg-glow orb2"></div>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <motion.div
          className="contact-left"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">GET IN TOUCH</span>

          <h2>Let’s Talk Clean Air</h2>

          <p className="desc">
            Our specialists are ready to help you find the perfect WĀYU configuration
            for your space. Get personalized consultation for better indoor air quality.
          </p>

          <div className="info-list">
            <div className="info-item">
              <img src="/images/icons/email.gif" alt="" />
              <div>
                <small>Email</small>
                <p>concierge@arctic-wayu.com</p>
              </div>
            </div>

            <div className="info-item">
              <img src="/images/icons/location.gif" alt="" />
              <div>
                <small>Location</small>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="info-item">
              <img src="/images/icons/phone.gif" alt="" />
              <div>
                <small>Phone</small>
                <p>+94 123 456 234</p>
              </div>
            </div>
          </div>

          <div className="note">
            Cleaner air starts with a conversation.
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="contact-right"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone" />
          </div>

          <input type="email" placeholder="Email Address" />

          <div className="row">
            <input type="text" placeholder="Location" />
            <select>
              <option>Home Use</option>
              <option>Office Use</option>
            </select>
          </div>

          <textarea placeholder="Message" rows="5"></textarea>

          <motion.button
            className="contact-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#168e8e" }}
          >
            Send Message →
          </motion.button>

          <small>
            Your information is safe with us.
          </small>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;