import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            MEET WĀYU
            <br />
            BY ARCTIC
          </h1>

          <p>
            Clean air for every room, every breath.
          </p>

          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;