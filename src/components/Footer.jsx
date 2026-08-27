const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'The Program', href: '#program' },
  { label: 'Getting Started', href: '#getting-started' },
  { label: 'Contact', href: '#contact' },
  { label: 'Donate', href: '#donate' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">PSYCHTECH.ORG</p>
          <p className="footer__tagline">
            Helping future Psychiatric Technicians find their way.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="footer__email" href="mailto:psychtechsupport@gmail.com">
          psychtechsupport@gmail.com
        </a>

        <p className="footer__disclaimer">
          PsychTech.org is an independent informational resource and is not
          affiliated with, operated by, or officially endorsed by Cuesta
          College or the California Department of State Hospitals.
        </p>

        <p className="footer__copyright">
          © 2026 PsychTech.org. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
