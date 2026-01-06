import './App.css'
import { ModeProvider } from './context/ModeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Lexer from './components/Lexer'
import Parser from './components/Parser'
import AST from './components/AST'
import Codegen from './components/Codegen'
import Footer from './components/Footer'

function App() {
  return (
    <ModeProvider>
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
    </ModeProvider>
  )
}

export default App
