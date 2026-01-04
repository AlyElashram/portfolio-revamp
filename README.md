# compiler.portfolio

A compiler-themed portfolio website built with **React** + **Rails API**.

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
├── backend/           # Rails API
│   ├── app/
│   │   └── controllers/api/v1/
│   │       └── portfolio_controller.rb
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Ruby 3.2+
- Rails 8.0+

### Backend Setup

```bash
cd backend
bundle install
rails db:setup
rails server -p 3000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173` and the API at `http://localhost:3000`.

## 🔧 Configuration

### Personalizing Your Portfolio

1. **Update profile info** in `backend/app/controllers/api/v1/portfolio_controller.rb`
2. **Customize styles** in `frontend/src/App.css` (CSS variables at the top)
3. **Modify content** in `frontend/src/App.jsx` (components for each phase)

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/profile` | Basic profile info |
| GET | `/api/v1/experiences` | Work experience |
| GET | `/api/v1/projects` | Project showcase |
| POST | `/api/v1/contact` | Contact form submission |

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

**Backend:**
- Rails 8 (API mode)
- SQLite (development)
- Rack CORS

## 📝 License

MIT

---

*Built with λ by a compiler enthusiast*

