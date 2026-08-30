function Donate({ onDonateClick }) {
  return (
    <section id="donate" className="section donate">
      <div className="container donate__inner">
        <p className="eyebrow eyebrow--on-dark">Support the Mission</p>
        <h2 className="donate__heading">Help Us Build Better Student Resources</h2>
        <p className="donate__text">
          Your support can help us develop educational resources and
          student-focused information for people exploring the Psychiatric
          Technician profession.
        </p>
        <button type="button" className="btn btn-primary" onClick={onDonateClick}>
          Donate
        </button>
      </div>
    </section>
  )
}

export default Donate
