import { useState } from 'react'

function Codegen() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Emitting contact request:', formState)
  }

  return (
    <section id="contact" className="phase">
      <div className="phase-header">
        <span className="phase-number">04</span>
        <h2 className="phase-title">
          <span className="type">Output</span> codegen<span className="punct">(</span><span className="keyword">const</span> <span className="type">AST</span><span className="punct">&amp;</span> <span className="param">ast</span><span className="punct">)</span>
        </h2>
        <p className="phase-subtitle">// Generating connection</p>
      </div>

      <div className="phase-content">
        <div className="codegen-output">
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

          <form onSubmit={handleSubmit} className="contact-form">
            <p className="form-comment">// Send a message</p>
            <div className="form-field">
              <label>
                <span className="field-label">std::string name;</span>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="const char*"
                />
              </label>
            </div>
            <div className="form-field">
              <label>
                <span className="field-label">std::string email;</span>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="const char*"
                />
              </label>
            </div>
            <div className="form-field">
              <label>
                <span className="field-label">std::string message;</span>
                <textarea 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="const char*"
                  rows={4}
                />
              </label>
            </div>
            <button type="submit" className="submit-btn">
              <span className="keyword">return</span> emit<span className="punct">(</span>message<span className="punct">)</span>;
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Codegen
