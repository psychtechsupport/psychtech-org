function AboutCareer() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-grid__text">
          <p className="eyebrow">About the Career</p>
          <h2>What Is a Psychiatric Technician?</h2>
          <p>
            A Psychiatric Technician is a licensed healthcare professional
            who works directly with people experiencing mental illness,
            emotional disorders, and/or intellectual disabilities. They are
            a core part of the treatment team, working alongside nurses,
            physicians, psychologists, and other clinical staff.
          </p>
          <p>
            Day to day, a Psychiatric Technician's work can include
            monitoring patients' wellbeing, assisting with daily living
            activities, observing and documenting behavior, supporting
            therapeutic and rehabilitative programs, and helping to create a
            safe, stable environment for the people in their care.
          </p>
          <p>
            It's a hands-on, people-centered role for someone who wants a
            career built on patience, structure, and genuine care &mdash;
            one that plays a meaningful part in how people with complex
            mental health needs are supported every day.
          </p>
        </div>

        <aside className="about-grid__panel" aria-hidden="true">
          <div className="about-panel-card">
            <span className="about-panel-card__mark">01</span>
            <p>Direct patient care and support</p>
          </div>
          <div className="about-panel-card">
            <span className="about-panel-card__mark">02</span>
            <p>Part of a collaborative treatment team</p>
          </div>
          <div className="about-panel-card">
            <span className="about-panel-card__mark">03</span>
            <p>Focus on stability, safety & structure</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default AboutCareer
