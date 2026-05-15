"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  target: number | string
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ target, suffix = "", duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const numericTarget = typeof target === "string" ? parseInt(target) : target
    if (isNaN(numericTarget)) {
      setCount(0)
      return
    }

    const steps = 40
    const stepValue = numericTarget / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  const displayValue = typeof target === "string" && isNaN(parseInt(target)) 
    ? target 
    : `${count}${suffix}`

  return (
    <span ref={ref} className="gradient-text">
      {displayValue}
    </span>
  )
}
