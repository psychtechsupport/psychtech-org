function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__field" aria-hidden="true">
        <svg
          className="hero__path"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroBlob1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6f9c8d" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6f9c8d" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroBlob2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bd8752" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#bd8752" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle cx="920" cy="120" r="260" fill="url(#heroBlob1)" />
          <circle cx="140" cy="560" r="220" fill="url(#heroBlob2)" />

          {/* The pathway motif: a gently curving, dotted route that
              reappears in the "Getting Started" section below. */}
          <path
            d="M -40 520 C 220 460, 340 620, 560 500 S 900 320, 1240 380"
            fill="none"
            stroke="#faf6ee"
            strokeOpacity="0.55"
            strokeWidth="3"
            strokeDasharray="1 22"
            strokeLinecap="round"
          />
          <path
            d="M -40 480 C 240 400, 380 560, 600 440 S 920 260, 1240 320"
            fill="none"
            stroke="#faf6ee"
            strokeOpacity="0.3"
            strokeWidth="2"
            strokeDasharray="1 16"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container hero__content">
        <p className="eyebrow eyebrow--on-dark">A resource for future psych techs</p>
        <h1 className="hero__headline">
          Thinking About Becoming a Psychiatric Technician?
        </h1>
        <p className="hero__lede">
          Explore the Psychiatric Technician career and discover the training
          pathway at DSH&ndash;Atascadero in affiliation with Cuesta College.
        </p>
        <div className="hero__actions">
          <a className="btn btn-primary" href="#program">
            Explore the Program
          </a>
          <a className="btn btn-outline" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
