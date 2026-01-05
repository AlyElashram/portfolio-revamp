import { useState } from 'react'

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

function AST() {
  const [optLevel, setOptLevel] = useState('O0')
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [currentPass, setCurrentPass] = useState(null)

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
