import { useState, useEffect } from 'react'
import { useMode } from '../context/ModeContext'

const geekSections = [
  { id: 'about', label: 'lexer', number: '01' },
  { id: 'experience', label: 'parser', number: '02' },
  { id: 'projects', label: 'ast', number: '03' },
  { id: 'contact', label: 'codegen', number: '04' },
]

const normalSections = [
  { id: 'about', label: 'about', number: '01' },
  { id: 'experience', label: 'experience', number: '02' },
  { id: 'projects', label: 'projects', number: '03' },
  { id: 'contact', label: 'contact', number: '04' },
]

function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const { isGeekMode, toggleMode } = useMode()
  
  const sections = isGeekMode ? geekSections : normalSections

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
  }, [sections])

  return (
    <nav className="nav">
      <div className="nav-brand">
        <a href="#" className="brand-link">
          <span className="brand-symbol">{isGeekMode ? 'λ' : '⟨/⟩'}</span>
          <span className="brand-text">{isGeekMode ? 'compiler.portfolio' : 'aly.elashram'}</span>
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
        <li className="nav-mode-toggle">
          <button 
            onClick={toggleMode}
            className={`mode-toggle-btn ${isGeekMode ? 'geek' : 'normal'}`}
            title={isGeekMode ? 'Switch to HR-friendly mode' : 'Switch to Geek mode'}
          >
            <span className="toggle-icon">{isGeekMode ? '🤓' : '👔'}</span>
            <span className="toggle-label">{isGeekMode ? 'Geek' : 'Pro'}</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

