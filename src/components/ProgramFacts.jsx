const FACTS = [
  {
    stat: '1 Year',
    label: 'Three-Term Training Program',
  },
  {
    stat: '3 Starts a Year',
    label: 'January, May & September',
  },
  {
    stat: 'Atascadero, California',
    label: 'Training at DSH–Atascadero',
  },
  {
    stat: 'Career Pathway',
    label: 'Prepare for California Psychiatric Technician licensure',
  },
]

function ProgramFacts() {
  return (
    <section id="program" className="section">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">The Program</p>
          <h2>A Focused, Structured Training Pathway</h2>
        </div>

        <div className="fact-grid">
          {FACTS.map((fact) => (
            <div className="fact-card" key={fact.stat}>
              <p className="fact-card__stat">{fact.stat}</p>
              <p className="fact-card__label">{fact.label}</p>
            </div>
          ))}
        </div>

        <p className="fact-disclaimer">
          Program information, dates and requirements can change. Always
          verify current information through the official program.
        </p>
      </div>
    </section>
  )
}

export default ProgramFacts
