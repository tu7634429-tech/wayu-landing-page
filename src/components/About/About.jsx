import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-image">
  <img
    src="/images/about/about-image.jpg"
    alt="About WAYU"
  />
</div>

        <div className="about-content">
          <span className="section-tag">
            ABOUT WĀYU
          </span>

          <h2>
            Cleaner Air for a
            Healthier Home
          </h2>

          <p>
            WĀYU by Arctic is designed to improve indoor
            air quality by removing dust, allergens,
            pollutants, and unwanted odors. Enjoy fresh,
            clean air in every room and create a healthier
            environment for your family.
          </p>

          <button className="about-btn">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;