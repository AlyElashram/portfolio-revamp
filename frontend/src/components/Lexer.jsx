import Token from './Token'
import useInView from '../hooks/useInView'
import { useMode } from '../context/ModeContext'

function Lexer() {
  const [ref, isInView] = useInView({ threshold: 0.3 })
  const { isGeekMode } = useMode()
  
  const tokens = [
    { type: 'IDENTIFIER', value: 'name', delay: 100 },
    { type: 'STRING', value: 'Aly ElAshram', delay: 300 },
    { type: 'IDENTIFIER', value: 'role', delay: 500 },
    { type: 'STRING', value: 'Software Engineer', delay: 700 },
    { type: 'IDENTIFIER', value: 'focus', delay: 900 },
    { type: 'STRING', value: 'Web Engineering & Compilers', delay: 1100 },
  ]

  const normalTokens = [
    { type: 'NAME', value: 'Aly ElAshram', delay: 100 },
    { type: 'ROLE', value: 'Full Stack Engineer', delay: 300 },
    { type: 'LOCATION', value: 'Cairo, Egypt', delay: 500 },
    { type: 'FOCUS', value: 'Backend & Systems', delay: 700 },
  ]

  if (!isGeekMode) {
    return (
      <section id="about" className="phase" ref={ref}>
        <div className="phase-header">
          <span className="phase-number">01</span>
          <h2 className="phase-title normal-title">About Me</h2>
          <p className="phase-subtitle">Getting to know the engineer</p>
        </div>
        
        <div className="phase-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">profile.json</span>
            </div>
            <div className="terminal-body">
              <div className="token-stream">
                {normalTokens.map((token, i) => (
                  <Token key={i} {...token} shouldAnimate={isInView} />
                ))}
              </div>
            </div>
          </div>

          <div className="intro-text normal-intro">
            <p className="intro-heading">Hello! 👋</p>
            <p className="intro-body">
              I'm a Full Stack Software Engineer at <strong>Procore Technologies</strong> with a passion for 
              building robust, scalable systems. I specialize in backend development, distributed systems, 
              and have a deep interest in compilers and programming language design.
            </p>
            <p className="intro-body">
              When I'm not shipping features, you'll find me contributing to open source projects 
              like <strong>LLVM</strong> or building my own programming language.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="phase" ref={ref}>
      <div className="phase-header">
        <span className="phase-number">01</span>
        <h2 className="phase-title">
          <span className="type">std::vector</span><span className="punct">&lt;</span><span className="type">Token</span><span className="punct">&gt;</span> lexer<span className="punct">(</span><span className="keyword">const</span> <span className="type">std::string</span><span className="punct">&amp;</span> <span className="param">input</span><span className="punct">)</span>
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
                <Token key={i} {...token} shouldAnimate={isInView} />
              ))}
            </div>
          </div>
        </div>

        <div className="intro-text">
          <p>
            <span className="comment">/*</span>
          </p>
          <p className="comment-body">
            Full-time Full Stack Software Engineer by day and a compiler enthusiast by night.
          </p>
          <p>
            <span className="comment">*/</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Lexer
