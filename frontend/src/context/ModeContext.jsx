import { createContext, useContext, useState, useEffect } from 'react'

const ModeContext = createContext()

export function ModeProvider({ children }) {
  const [isGeekMode, setIsGeekMode] = useState(() => {
    const saved = localStorage.getItem('portfolioMode')
    return saved ? saved === 'geek' : false // Default to Pro mode
  })

  useEffect(() => {
    localStorage.setItem('portfolioMode', isGeekMode ? 'geek' : 'normal')
  }, [isGeekMode])

  const toggleMode = () => setIsGeekMode(prev => !prev)

  return (
    <ModeContext.Provider value={{ isGeekMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}

