const STEPS = [
  {
    number: '01',
    title: 'Explore the Career',
    text: 'Learn what Psychiatric Technicians do and whether the role fits the career you want to build.',
  },
  {
    number: '02',
    title: 'Understand the Program',
    text: 'Get familiar with the structure of the training pathway at DSH–Atascadero, in affiliation with Cuesta College.',
  },
  {
    number: '03',
    title: 'Check the Official Requirements & Apply',
    text: 'Confirm current requirements, dates and next steps directly with the official program.',
  },
]

function GettingStarted() {
  return (
    <section id="getting-started" className="section">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Getting Started</p>
          <h2>Your Next Three Steps</h2>
        </div>

        <ol className="steps">
          {STEPS.map((step, index) => (
            <li className="steps__item" key={step.number}>
              <span className="steps__number">{step.number}</span>
              <div className="steps__body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              {index < STEPS.length - 1 && (
                <span className="steps__connector" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <div className="official-panel">
          <p className="official-panel__label">Official external resources</p>
          <div className="official-panel__links">
            <a
              className="btn btn-primary"
              href="https://www.cuesta.edu/academics/divisions/nah/alliedhealthdept/psychtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Official Program Information ↗
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.dsh.ca.gov/Atascadero/Internships/Psychiatric_Technician_Program.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              California Department of State Hospitals ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GettingStarted
