import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      {/* IMAGE SIDE */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/images/about/about-image.jpg" alt="WAYU" />
      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          ABOUT WAYU
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Cleaner Air for Everyday Living
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Air pollution is not only outside. It is inside your home, your room,
          and the air you breathe every day. WAYU was created to bring back a
          sense of control by making clean air accessible, reliable, and part of
          everyday life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Inspired by wellness and built with science, WAYU helps protect what
          matters most — your health, comfort, and the people you love.
        </motion.p>

      </motion.div>

    </section>
  );
}

export default About;