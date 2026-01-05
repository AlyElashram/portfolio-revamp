import { useState, useEffect } from 'react'

function Token({ type, value, delay = 0, shouldAnimate = false }) {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    if (!shouldAnimate) {
      setVisible(false)
      return
    }
    
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay, shouldAnimate])

  return (
    <span className={`token ${type} ${visible ? 'visible' : ''}`}>
      <span className="token-type">{type}</span>
      <span className="token-value">{value}</span>
    </span>
  )
}

export default Token
