import { useState, useEffect } from 'react'
import './App.css'

// Compilation phases as portfolio sections
const phases = ['lexer', 'parser', 'ast', 'codegen']

function TypewriterText({ text, delay = 50, className = '' }) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [index, text, delay])

  return <span className={className}>{displayed}<span className="cursor">|</span></span>
}

function Token({ type, value, delay = 0 }) {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <span className={`token ${type} ${visible ? 'visible' : ''}`}>
      <span className="token-type">{type}</span>
      <span className="token-value">{value}</span>
    </span>
  )
}

function Lexer() {
  const tokens = [
    { type: 'IDENTIFIER', value: 'name', delay: 100 },
    { type: 'STRING', value: '"Your Name"', delay: 300 },
    { type: 'IDENTIFIER', value: 'role', delay: 500 },
    { type: 'STRING', value: '"Software Engineer"', delay: 700 },
    { type: 'IDENTIFIER', value: 'focus', delay: 900 },
    { type: 'STRING', value: '"Compilers & Systems"', delay: 1100 },
  ]

  return (
    <section id="lexer" className="phase">
      <div className="phase-header">
        <span className="phase-number">01</span>
        <h2 className="phase-title">
          <span className="keyword">fn</span> lexer<span className="punct">(</span><span className="param">input</span><span className="punct">)</span>
        </h2>
        <p className="phase-subtitle">// Tokenizing identity</p>
      </div>
      
      <div className="phase-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">token_stream.out</span>
          </div>
          <div className="terminal-body">
            <div className="token-stream">
              {tokens.map((token, i) => (
                <Token key={i} {...token} />
              ))}
            </div>
          </div>
        </div>

        <div className="intro-text">
          <p>
            <span className="comment">/*</span>
          </p>
          <p className="comment-body">
            Software engineer with deep expertise in compiler design,
            programming language implementation, and systems programming.
            Passionate about transforming source code into optimized machine instructions.
          </p>
          <p>
            <span className="comment">*/</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function Parser() {
  const experiences = [
    {
      company: 'Company Name',
      role: 'Senior Compiler Engineer',
      period: '2023 - Present',
      highlights: [
        'Implemented novel optimization passes reducing compilation time by 40%',
        'Designed type inference system for statically-typed language',
        'Led migration to LLVM 17 backend'
      ]
    },
    {
      company: 'Previous Company',
      role: 'Software Engineer',
      period: '2020 - 2023',
      highlights: [
        'Built lexer and parser for domain-specific language',
        'Optimized AST traversal algorithms',
        'Contributed to open-source compiler projects'
      ]
    }
  ]

  return (
    <section id="parser" className="phase">
      <div className="phase-header">
        <span className="phase-number">02</span>
        <h2 className="phase-title">
          <span className="keyword">fn</span> parser<span className="punct">(</span><span className="param">tokens</span><span className="punct">)</span>
        </h2>
        <p className="phase-subtitle">// Building experience tree</p>
      </div>

      <div className="phase-content">
        <div className="experience-tree">
          {experiences.map((exp, i) => (
            <div key={i} className="tree-node">
              <div className="node-connector">
                <span className="connector-line"></span>
                <span className="connector-dot"></span>
              </div>
              <div className="node-content">
                <div className="node-header">
                  <span className="string">"{exp.company}"</span>
                  <span className="period">{exp.period}</span>
                </div>
                <h3 className="node-role">{exp.role}</h3>
                <ul className="node-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="bullet">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AST() {
  const projects = [
    {
      name: 'Mini-Compiler',
      description: 'A teaching compiler for a subset of C, targeting x86-64',
      tags: ['Rust', 'LLVM', 'x86'],
      link: '#'
    },
    {
      name: 'Type Inference Engine',
      description: 'Hindley-Milner type inference implementation',
      tags: ['OCaml', 'Type Theory'],
      link: '#'
    },
    {
      name: 'AST Visualizer',
      description: 'Interactive tool for exploring abstract syntax trees',
      tags: ['TypeScript', 'React', 'D3.js'],
      link: '#'
    }
  ]

  return (
    <section id="ast" className="phase">
      <div className="phase-header">
        <span className="phase-number">03</span>
        <h2 className="phase-title">
          <span className="keyword">struct</span> AST <span className="punct">{'{'}</span>
        </h2>
        <p className="phase-subtitle">// Abstract representation of work</p>
      </div>

      <div className="phase-content">
        <div className="ast-nodes">
          {projects.map((project, i) => (
            <a key={i} href={project.link} className="ast-node">
              <div className="node-type">ProjectNode</div>
              <div className="node-fields">
                <div className="field">
                  <span className="field-name">name:</span>
                  <span className="string">"{project.name}"</span>
                </div>
                <div className="field">
                  <span className="field-name">desc:</span>
                  <span className="comment">// {project.description}</span>
                </div>
                <div className="field tags">
                  <span className="field-name">tags:</span>
                  <span className="array">[{project.tags.map((t, j) => (
                    <span key={j} className="tag">"{t}"</span>
                  ))}]</span>
                </div>
              </div>
              <span className="node-link">→ view source</span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="phase-footer">
        <span className="punct">{'}'}</span>
      </div>
    </section>
  )
}

function Codegen() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Emitting contact request:', formState)
  }

  return (
    <section id="codegen" className="phase">
      <div className="phase-header">
        <span className="phase-number">04</span>
        <h2 className="phase-title">
          <span className="keyword">fn</span> codegen<span className="punct">(</span><span className="param">ast</span><span className="punct">)</span> <span className="punct">→</span> <span className="type">Output</span>
        </h2>
        <p className="phase-subtitle">// Generating connection</p>
      </div>

      <div className="phase-content">
        <div className="codegen-output">
          <div className="output-section">
            <div className="instruction">
              <span className="opcode">MOV</span>
              <span className="operand">email</span>,
              <span className="string">"your.email@example.com"</span>
            </div>
            <div className="instruction">
              <span className="opcode">MOV</span>
              <span className="operand">github</span>,
              <span className="string">"github.com/yourusername"</span>
            </div>
            <div className="instruction">
              <span className="opcode">MOV</span>
              <span className="operand">linkedin</span>,
              <span className="string">"linkedin.com/in/yourprofile"</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <p className="form-comment">// Send a message</p>
            <div className="form-field">
              <label>
                <span className="field-label">name:</span>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="String"
                />
              </label>
            </div>
            <div className="form-field">
              <label>
                <span className="field-label">email:</span>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="String"
                />
              </label>
            </div>
            <div className="form-field">
              <label>
                <span className="field-label">message:</span>
                <textarea 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="String"
                  rows={4}
                />
              </label>
            </div>
            <button type="submit" className="submit-btn">
              <span className="keyword">emit</span><span className="punct">(</span>message<span className="punct">)</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Navigation() {
  const [activePhase, setActivePhase] = useState('lexer')

  useEffect(() => {
    const handleScroll = () => {
      const sections = phases.map(p => document.getElementById(p))
      const scrollPos = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActivePhase(phases[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="brand-symbol">λ</span>
        <span className="brand-text">compiler.portfolio</span>
      </div>
      <ul className="nav-links">
        {phases.map((phase, i) => (
          <li key={phase}>
            <a 
              href={`#${phase}`} 
              className={activePhase === phase ? 'active' : ''}
            >
              <span className="nav-number">0{i + 1}</span>
              <span className="nav-label">{phase}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Available for opportunities</span>
        </div>
        <h1 className="hero-title">
          <span className="line">
            <span className="keyword">let</span> engineer <span className="punct">=</span>
          </span>
          <span className="line indent">
            <TypewriterText text="Compiler Enthusiast" delay={80} className="string" />
          </span>
        </h1>
        <p className="hero-subtitle">
          Transforming ideas into optimized reality,<br />
          one pass at a time.
        </p>
        <div className="hero-cta">
          <a href="#lexer" className="cta-primary">
            <span className="keyword">run</span><span className="punct">(</span>compilation<span className="punct">)</span>
          </a>
          <a href="#codegen" className="cta-secondary">
            view output →
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <pre className="code-preview">
{`// Compilation Pipeline
source_code
  |> lexer()     // → tokens
  |> parser()    // → AST  
  |> analyze()   // → typed AST
  |> optimize()  // → optimized IR
  |> codegen()   // → machine code`}
        </pre>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="comment">// Built with React + Rails</span>
          <span className="comment">// Designed for compiler enthusiasts</span>
        </div>
        <div className="footer-right">
          <span className="keyword">return</span> <span className="number">0</span><span className="punct">;</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Lexer />
        <Parser />
        <AST />
        <Codegen />
      </main>
      <Footer />
    </div>
  )
}

export default App
