import { useState } from 'react'
import { useMode } from '../context/ModeContext'

function Codegen() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { isGeekMode } = useMode()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Emitting contact request:', formState)
  }

  return (
    <section id="contact" className="phase">
      <div className="phase-header">
        <span className="phase-number">04</span>
        {isGeekMode ? (
          <h2 className="phase-title">
            <span className="type">Output</span> codegen<span className="punct">(</span><span className="keyword">const</span> <span className="type">AST</span><span className="punct">&amp;</span> <span className="param">ast</span><span className="punct">)</span>
          </h2>
        ) : (
          <h2 className="phase-title normal-title">Contact</h2>
        )}
        <p className="phase-subtitle">{isGeekMode ? '// Generating connection' : "Let's connect"}</p>
      </div>

      <div className="phase-content">
        <div className="codegen-output">
          {isGeekMode ? (
            <div className="output-section">
              <div className="instruction">
                <span className="opcode">MOV</span>
                <span className="operand">email</span>,
                <a href="mailto:alyahelashram@gmail.com" className="string link">"alyahelashram@gmail.com"</a>
              </div>
              <div className="instruction">
                <span className="opcode">MOV</span>
                <span className="operand">github</span>,
                <a href="https://github.com/alyelashram" target="_blank" rel="noopener noreferrer" className="string link">"github.com/alyelashram"</a>
              </div>
              <div className="instruction">
                <span className="opcode">MOV</span>
                <span className="operand">linkedin</span>,
                <a href="https://linkedin.com/in/aly-elashram" target="_blank" rel="noopener noreferrer" className="string link">"linkedin.com/in/aly-elashram"</a>
              </div>
            </div>
          ) : (
            <div className="contact-links">
              <a href="mailto:alyahelashram@gmail.com" className="contact-link-card">
                <span className="contact-icon">✉️</span>
                <span className="contact-label">Email</span>
                <span className="contact-value">alyahelashram@gmail.com</span>
              </a>
              <a href="https://github.com/alyelashram" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/alyelashram</span>
              </a>
              <a href="https://linkedin.com/in/aly-elashram" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/aly-elashram</span>
              </a>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <p className="form-comment">{isGeekMode ? '// Send a message' : 'Send me a message'}</p>
            <div className="form-field">
              <label>
                <span className="field-label">{isGeekMode ? 'std::string name;' : 'Name'}</span>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder={isGeekMode ? 'const char*' : 'Your name'}
                />
              </label>
            </div>
            <div className="form-field">
              <label>
                <span className="field-label">{isGeekMode ? 'std::string email;' : 'Email'}</span>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder={isGeekMode ? 'const char*' : 'your@email.com'}
                />
              </label>
            </div>
            <div className="form-field">
              <label>
                <span className="field-label">{isGeekMode ? 'std::string message;' : 'Message'}</span>
                <textarea 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder={isGeekMode ? 'const char*' : 'Your message...'}
                  rows={4}
                />
              </label>
            </div>
            <button type="submit" className="submit-btn">
              {isGeekMode ? (
                <><span className="keyword">return</span> emit<span className="punct">(</span>message<span className="punct">)</span>;</>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Codegen
