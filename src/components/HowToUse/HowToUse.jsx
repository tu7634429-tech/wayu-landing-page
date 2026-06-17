import "./HowToUse.css";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Place WAYU",
    text: "Position the purifier in an open space for maximum airflow circulation.",
  },
  {
    num: "02",
    title: "Power On",
    text: "Turn on the device and select your preferred purification mode.",
  },
  {
    num: "03",
    title: "Breathe Clean",
    text: "Enjoy continuous fresh, purified air throughout your home.",
  },
];

function HowToUse() {
  return (
    <section className="howto-premium">

      {/* BACKGROUND LAYERS */}
      <div className="bg-orb orb1"></div>
      <div className="bg-orb orb2"></div>

      {/* LEFT - PRODUCT HERO (ONLY IMAGE WRAPPED) */}
      <motion.div
        className="howto-product"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="glow-ring"></div>

        {/* IMAGE WRAPPER ADDED */}
        <div className="image-wrap">
          <motion.img
            src="/images/product/purifier.jpg"
            alt="WAYU"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* RIGHT - STEPS (UNCHANGED) */}
      <div className="howto-info">

        <motion.span className="tag">
          HOW IT WORKS
        </motion.span>

        <motion.h2>
          Experience Pure Air in 3 Steps
        </motion.h2>

        <div className="steps-list">
          {steps.map((step, i) => (
            <motion.div
              className="step-card"
              key={i}
              whileHover={{ scale: 1.05 }}
            >
              <div className="step-num">{step.num}</div>

              <div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowToUse;