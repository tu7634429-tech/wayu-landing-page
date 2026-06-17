import "./FAQ.css";
import { useState } from "react";

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const faqs = [
    { q: "How often should I replace the filter?", a: "Every 6–12 months depending on usage." },
    { q: "Is WĀYU suitable for night use?", a: "Yes, ultra-quiet sleep mode included." },
    { q: "Does it remove dust and allergens?", a: "Yes, HEPA filtration removes 99% particles." },
    { q: "What room size does it cover?", a: "Medium to large room coverage supported." },
    { q: "Is there warranty included?", a: "Yes, standard manufacturer warranty included." }
  ];

  return (
    <section className="faq-section">

      {/* BLUE BACKGROUND SHAPES */}
      <div className="faq-bg orb1"></div>
      <div className="faq-bg orb2"></div>

      <div className="faq-wrapper">

        <div className="faq-header">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about WĀYU</p>
        </div>

        <div className="faq-list">

          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >

              <div className="faq-question">
                <h4>{item.q}</h4>
                <div className="icon">{active === index ? "−" : "+"}</div>
              </div>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FAQ;