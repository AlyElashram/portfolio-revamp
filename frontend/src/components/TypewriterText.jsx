import { useState, useEffect } from 'react'

function TypewriterText({ text, delay = 50, className = '', shouldAnimate = true }) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayed('')
      setIndex(0)
      return
    }
    
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [index, text, delay, shouldAnimate])

  return <span className={className}>{displayed}<span className="cursor">|</span></span>
}

export default TypewriterText
