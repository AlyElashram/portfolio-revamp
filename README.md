# compiler.portfolio

A compiler-themed portfolio website built with **React**

## 🎨 Design Concept

The portfolio is structured around the compilation pipeline metaphor:

| Phase | Section | Purpose |
|-------|---------|---------|
| **Lexer** | About | Tokenizing your identity |
| **Parser** | Experience | Building the career tree |
| **AST** | Projects | Structured representation of work |
| **Codegen** | Contact | Generating connections |

### Aesthetic
- Minimal, clean design with monospace typography
- Color palette inspired by code editor themes (Palenight/One Dark)
- Subtle animations mimicking compilation phases
- Syntax highlighting used as design accents

## 📁 Project Structure

```
portfolio/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── App.jsx    # Main portfolio components
│   │   └── App.css    # Compiler-themed styles
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`

## 🔧 Configuration


## 🎯 Features

- [x] Compiler-themed section naming
- [x] Typewriter animation for hero text
- [x] Token visualization animation
- [x] Responsive design
- [x] Contact form with API backend
- [ ] Dark/light mode toggle
- [ ] Blog integration
- [ ] Resume PDF download

## 🛠 Tech Stack

**Frontend:**
- React 18
- Vite
- CSS (custom properties, no framework)
