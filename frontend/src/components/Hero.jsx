import TypewriterText from './TypewriterText'
import useInView from '../hooks/useInView'

function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <header className="hero" ref={ref}>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Available for opportunities</span>
        </div>
        <h1 className="hero-title">
          <span className="line">
            <span className="keyword">auto</span> engineer <span className="punct">=</span>
          </span>
          <span className="line indent">
            <TypewriterText text="Compiler Enthusiast" delay={80} className="string" shouldAnimate={isInView} />
          </span>
        </h1>
        <p className="hero-subtitle">
          Transforming ideas into optimized reality,<br />
          one pass at a time.
        </p>
        <div className="hero-cta">
          <a href="#about" className="cta-primary">
            <span className="keyword">int</span> main<span className="punct">()</span>
          </a>
          <a href="#contact" className="cta-secondary">
            view output →
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <pre className="code-preview">
{`// Compilation Pipeline
std::string source_code;
auto tokens = lexer(source_code);
auto ast = parser(tokens);
auto typed_ast = analyze(ast);
auto ir = optimize(typed_ast);
auto output = codegen(ir);`}
        </pre>
      </div>
    </header>
  )
}

export default Hero
