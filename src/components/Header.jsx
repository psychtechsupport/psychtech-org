import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'The Program', href: '#program' },
  { label: 'Getting Started', href: '#getting-started' },
  { label: 'Contact', href: '#contact' },
  { label: 'Donate', href: '#donate' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={() => setMenuOpen(false)}>
          PSYCHTECH<span className="header__brand-dot">.ORG</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className={`header__burger ${menuOpen ? 'is-open' : ''}`} />
        </button>

        <nav
          id="primary-nav"
          className={`header__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
