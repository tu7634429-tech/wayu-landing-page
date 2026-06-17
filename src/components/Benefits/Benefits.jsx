import "./Benefits.css";
import { motion } from "framer-motion";

function Benefits() {
  const items = [
    { img: "/images/icons/allergy.gif", title: "Allergy Relief", text: "Neutralize 99% of pollen, dust mites, and pet dander instantly." },
    { img: "/images/icons/sleep.gif", title: "Better Sleep", text: "Silent white noise and purified air for deep rest." },
    { img: "/images/icons/focus.gif", title: "Cognitive Focus", text: "Oxygen-rich air improves brain performance." },
    { img: "/images/icons/viral.gif", title: "Viral Protection", text: "HEPA H13 removes microscopic particles." },
    { img: "/images/icons/odor.gif", title: "Odor Neutralization", text: "Removes smoke, cooking, and pet odors." },
    { img: "/images/icons/family.gif", title: "Family Safety", text: "Protects your loved ones with clean air." }
  ];

  return (
    <section className="benefits">
      <div className="container">

        <div className="benefits-header">
          <span>WHY WAYU</span>
          <h2>Clean Air. Calm Home.</h2>
        </div>

        <div className="benefits-grid">

          {items.map((item, i) => (
            <motion.div
              key={i}
              className="benefit-card"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Benefits;