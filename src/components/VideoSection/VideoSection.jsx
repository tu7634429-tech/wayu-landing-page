import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-blue">

      <div className="video-wrapper">

        {/* LEFT */}
        <div className="video-text">

          <span className="tag">WATCH & DISCOVER</span>

          <h2>See WĀYU in Action</h2>

          <p>
            Experience how WĀYU transforms your indoor environment with silent,
            powerful purification designed for modern living.
          </p>

          <div className="features">
            <div>✔ Silent Operation</div>
            <div>✔ Smart Purification</div>
            <div>✔ Energy Efficient</div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="video-media">

          <div className="glow"></div>

          <img src="/images/video/video-thumb.png" alt="video" />

          <div className="play-btn">▶</div>

        </div>

      </div>

    </section>
  );
}

export default VideoSection;