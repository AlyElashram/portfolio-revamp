import { useState } from 'react'
import { useMode } from '../context/ModeContext'

const projectsData = [
  {
    name: 'PryLLVM',
    description: 'A full compiler for my custom scripting language Pry, built from scratch in C++17 with LLVM as the backend. Features recursive descent parsing, complete AST generation, and LLVM-IR emission with JIT compilation support.',
    tags: ['C++17', 'LLVM', 'CMake', 'Clang'],
    link: 'https://github.com/AlyElashram/PryLLVM',
    details: [
      'Designed custom grammar and recursive descent parser',
      'Implemented LLVM-IR codegen for expressions, conditionals, loops, functions',
      'Integrated LLVM optimization passes (-O1, -O2, -O3)',
      'Built with CMake on Linux using Clang toolchain'
    ]
  },
  {
    name: 'Pry Interpreter',
    description: 'A tree-walk interpreter and transpiler for Pry, developed in Java following "Crafting Interpreters". Implements the Visitor pattern for AST traversal with extended standard library functions.',
    tags: ['Java', 'Interpreter', 'Visitor Pattern'],
    link: 'https://github.com/AlyElashram/Pry',
    details: [
      'Hand-written scanner and recursive descent parser',
      'Visitor pattern for robust AST interpretation',
      'Extended beyond book with custom stdlib functions'
    ]
  },
  {
    name: 'LLVM Contributions',
    description: 'Merged open-source contributions to LLVM libc including Linux syscall wrappers, undefined behavior elimination, and ARM64 assembly for signal handling on macOS.',
    tags: ['C/C++', 'ARM Assembly', 'Open Source'],
    link: 'https://github.com/llvm/llvm-project',
    details: [
      'Added remapFilePages syscall wrapper with unit tests',
      'Eliminated UB via __builtin_trap in string/memory functions',
      'Wrote ARM inline assembly for sigsetjmp on macOS aarch64'
    ]
  }
]

const optimizationPasses = {
  O0: { label: '-O0', desc: 'No optimization', passes: [] },
  O1: { 
    label: '-O1', 
    desc: 'Basic optimizations',
    passes: ['dead-code-elimination', 'constant-folding']
  },
  O2: { 
    label: '-O2', 
    desc: 'Moderate optimizations', 
    passes: ['dead-code-elimination', 'constant-folding', 'inline-expansion', 'loop-unrolling']
  },
  O3: { 
    label: '-O3', 
    desc: 'Aggressive optimizations',
    passes: ['dead-code-elimination', 'constant-folding', 'inline-expansion', 'loop-unrolling', 'vectorization', 'tail-call-optimization']
  }
}

function TreeNode({ node, depth = 0, optimized, isLast = false }) {
  const indent = depth * 32
  
  return (
    <div className="tree-node-container" style={{ marginLeft: indent }}>
      <div className="tree-branch">
        {depth > 0 && (
          <>
            <span className="branch-horizontal"></span>
            <span className={`branch-vertical ${isLast ? 'last' : ''}`}></span>
          </>
        )}
      </div>
      <div className={`ast-tree-node ${optimized ? 'optimized' : ''} ${node.nodeType}`}>
        <div className="node-badge">
          <span className="node-kind">{node.kind}</span>
          <span className="node-type-annotation">: {node.type}</span>
        </div>
        {node.value && (
          <div className="node-value">
            <span className="value-label">value:</span>
            <span className="string">"{node.value}"</span>
          </div>
        )}
        {node.desc && (
          <div className="node-desc">
            <span className="comment">// {node.desc}</span>
          </div>
        )}
        {node.details && (
          <ul className="node-details">
            {node.details.map((d, i) => (
              <li key={i}><span className="bullet">→</span> {d}</li>
            ))}
          </ul>
        )}
        {node.attrs && (
          <div className="node-attrs">
            {node.attrs.map((attr, i) => (
              <span key={i} className="attr-tag">{attr}</span>
            ))}
          </div>
        )}
        {node.link && (
          <a href={node.link} target="_blank" rel="noopener noreferrer" className="node-link-btn">→ view source</a>
        )}
      </div>
      {node.children && (
        <div className="tree-children">
          {node.children.map((child, i) => (
            <TreeNode 
              key={i} 
              node={child} 
              depth={depth + 1} 
              optimized={optimized}
              isLast={i === node.children.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-card-footer">
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-github-link" title="View on GitHub">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

function AST() {
  const [optLevel, setOptLevel] = useState('O0')
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [currentPass, setCurrentPass] = useState(null)
  const { isGeekMode } = useMode()

  const handleOptimize = async (level) => {
    if (level === optLevel) return
    
    setIsOptimizing(true)
    const passes = optimizationPasses[level].passes
    
    for (let i = 0; i < passes.length; i++) {
      setCurrentPass(passes[i])
      await new Promise(resolve => setTimeout(resolve, 400))
    }
    
    setCurrentPass(null)
    setOptLevel(level)
    setIsOptimizing(false)
  }

  // Build AST structure from projects
  const astTree = {
    kind: 'ProgramNode',
    type: 'Module',
    children: [
      {
        kind: 'NamespaceDecl',
        type: 'portfolio::projects',
        children: projectsData.map(project => ({
          kind: 'ProjectNode',
          type: 'struct',
          value: project.name,
          desc: project.description,
          details: project.details,
          attrs: project.tags,
          link: project.link
        }))
      }
    ]
  }

  // Optimized tree (simplified structure for higher optimization levels)
  const getDisplayTree = () => {
    if (optLevel === 'O0') return astTree
    
    if (optLevel === 'O3') {
      return {
        kind: 'ProgramNode',
        type: 'Module',
        attrs: ['optimized', '-O3'],
        children: [
          {
            kind: 'InlinedDecl',
            type: 'flattened',
            value: 'portfolio::projects',
            attrs: ['inlined', 'vectorized'],
            children: projectsData.map(project => ({
              kind: 'PackedData',
              type: 'const',
              value: project.name,
              attrs: project.tags.slice(0, 2),
              link: project.link
            }))
          }
        ]
      }
    }
    
    if (optLevel === 'O2') {
      return {
        kind: 'ProgramNode',
        type: 'Module',
        attrs: ['optimized', '-O2'],
        children: [
          {
            kind: 'OptimizedDecl',
            type: 'namespace',
            value: 'portfolio::projects',
            attrs: ['const-folded', 'inlined'],
            children: projectsData.map(project => ({
              kind: 'ProjectNode',
              type: 'struct',
              value: project.name,
              attrs: project.tags,
              link: project.link
            }))
          }
        ]
      }
    }
    
    // O1
    return {
      ...astTree,
      attrs: ['optimized', '-O1']
    }
  }

  // Normal mode - simple project cards
  if (!isGeekMode) {
    return (
      <section id="projects" className="phase">
        <div className="phase-header">
          <span className="phase-number">03</span>
          <h2 className="phase-title normal-title">Projects</h2>
          <p className="phase-subtitle">Selected work and open source contributions</p>
        </div>

        <div className="phase-content">
          <div className="projects-grid">
            {projectsData.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="phase">
      <div className="phase-header">
        <span className="phase-number">03</span>
        <h2 className="phase-title">
          <span className="keyword">struct</span> AST <span className="punct">{'{'}</span>
        </h2>
        <p className="phase-subtitle">// Abstract representation of work</p>
      </div>

      <div className="phase-content">
        <div className="ast-controls">
          <div className="opt-label">
            <span className="keyword">optimize</span><span className="punct">(</span>
          </div>
          <div className="opt-buttons">
            {Object.entries(optimizationPasses).map(([key, opt]) => (
              <button
                key={key}
                className={`opt-btn ${optLevel === key ? 'active' : ''} ${isOptimizing ? 'disabled' : ''}`}
                onClick={() => handleOptimize(key)}
                disabled={isOptimizing}
                title={opt.desc}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="opt-label">
            <span className="punct">)</span>
          </div>
        </div>

        {currentPass && (
          <div className="optimization-status">
            <span className="status-icon">⚡</span>
            <span className="status-text">Running pass: </span>
            <span className="pass-name">{currentPass}</span>
          </div>
        )}

        <div className={`ast-tree ${isOptimizing ? 'optimizing' : ''}`}>
          <TreeNode node={getDisplayTree()} optimized={optLevel !== 'O0'} />
        </div>

        {optLevel !== 'O0' && (
          <div className="opt-summary">
            <span className="comment">// Optimization passes applied:</span>
            <div className="passes-list">
              {optimizationPasses[optLevel].passes.map((pass, i) => (
                <span key={i} className="pass-badge">{pass}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="phase-footer">
        <span className="punct">{'}'}</span>
      </div>
    </section>
  )
}

export default AST
