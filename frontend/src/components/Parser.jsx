import { useMode } from '../context/ModeContext'

function Parser() {
  const { isGeekMode } = useMode()

  const experiences = [
    {
      company: 'Procore Technologies',
      role: 'Full Stack Software Engineer II',
      period: 'July 2025 - Present',
      highlights: [
        'Backend performance optimization — N+1 queries, eager loading, gRPC integration',
        'System observability with centralized tracing and custom metrics'
      ]
    },
    {
      company: 'Procore Technologies',
      role: 'Full Stack Software Engineer II',
      period: 'March 2025 - June 2025',
      highlights: [
        'OAuth 2.0 + Okta SSO integration with Redis session management',
        'On-call incident resolution using Elasticsearch, Kibana, Grafana'
      ]
    },
    {
      company: 'Procore Technologies',
      role: 'Full Stack Software Engineer I',
      period: 'July 2023 - March 2025',
      highlights: [
        'Migrated RabbitMQ → AWS MSK Kafka across 7+ microservices',
        'Deprecated 820M+ records across 29 tables with zero downtime'
      ]
    }
  ]

  return (
    <section id="experience" className="phase">
      <div className="phase-header">
        <span className="phase-number">02</span>
        {isGeekMode ? (
          <h2 className="phase-title">
            <span className="type">AST</span><span className="punct">*</span> parser<span className="punct">(</span><span className="keyword">const</span> <span className="type">std::vector</span><span className="punct">&lt;</span><span className="type">Token</span><span className="punct">&gt;&amp;</span> <span className="param">tokens</span><span className="punct">)</span>
          </h2>
        ) : (
          <h2 className="phase-title normal-title">Work Experience</h2>
        )}
        <p className="phase-subtitle">{isGeekMode ? '// Building experience tree' : 'My professional journey'}</p>
      </div>

      <div className="phase-content">
        <div className="experience-tree">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-tree-node">
              <div className="exp-node-connector">
                <span className="exp-connector-line"></span>
                <span className="exp-connector-dot"></span>
              </div>
              <div className="exp-node-content">
                <div className="exp-node-header">
                  {isGeekMode ? (
                    <span className="string">"{exp.company}"</span>
                  ) : (
                    <span className="company-name">{exp.company}</span>
                  )}
                  <span className="period">{exp.period}</span>
                </div>
                <h3 className="exp-node-role">{exp.role}</h3>
                <ul className="exp-node-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="bullet">{isGeekMode ? '→' : '•'}</span>
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

export default Parser
