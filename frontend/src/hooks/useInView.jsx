import { useState, useEffect, useRef } from 'react'

function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Once in view, stop observing (animation plays once)
          observer.unobserve(element)
        }
      },
      {
        threshold: options.threshold || 0.2,
        rootMargin: options.rootMargin || '0px',
        ...options
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin])

  return [ref, isInView]
}

export default useInView

