import { useState, useEffect } from 'react'

const sections = [
  { id: 'about', label: 'lexer', number: '01' },
  { id: 'experience', label: 'parser', number: '02' },
  { id: 'projects', label: 'ast', number: '03' },
  { id: 'contact', label: 'codegen', number: '04' },
]

function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id)
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-brand">
        <a href="#" className="brand-link">
          <span className="brand-symbol">λ</span>
          <span className="brand-text">compiler.portfolio</span>
        </a>
      </div>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`} 
              className={activeSection === section.id ? 'active' : ''}
            >
              <span className="nav-number">{section.number}</span>
              <span className="nav-label">{section.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

