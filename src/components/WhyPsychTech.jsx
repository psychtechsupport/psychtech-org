const VALUES = [
  {
    title: 'LEARN',
    text: 'Understand the profession and training pathway.',
  },
  {
    title: 'PREPARE',
    text: 'Know what to expect before applying.',
  },
  {
    title: 'CONNECT',
    text: 'Find useful resources and get answers to your questions.',
  },
]

function WhyPsychTech() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Why PsychTech.org</p>
          <h2>Making the Path Easier to Understand</h2>
          <p className="section-head__body">
            Starting a healthcare career can be overwhelming. PsychTech.org
            is being built as a practical resource for people exploring the
            Psychiatric Technician profession &mdash; helping prospective
            students understand the pathway, prepare for the application
            process, discover useful resources and make informed decisions.
          </p>
        </div>

        <div className="value-grid">
          {VALUES.map((value) => (
            <div className="value-card" key={value.title}>
              <h3 className="value-card__title">{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyPsychTech
