"use client"

import { useEffect, useRef } from "react"

interface CursorFollowerProps {
  enabled?: boolean
}

export function CursorFollower({ enabled = true }: CursorFollowerProps) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const bloomRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return

    // Check for touch device
    const isTouchDevice = window.matchMedia("(hover: none)").matches
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }

      if (bloomRef.current) {
        bloomRef.current.style.left = `${e.clientX}px`
        bloomRef.current.style.top = `${e.clientY}px`
      }
    }

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }

      requestAnimationFrame(animateRing)
    }

    const handleMouseEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(2.5)"
        dotRef.current.style.background = "rgba(167, 139, 250, 0.9)"
      }
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1.5)"
        ringRef.current.style.borderColor = "rgba(167, 139, 250, 0.5)"
      }
    }

    const handleMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)"
        dotRef.current.style.background = "white"
      }
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1)"
        ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.3)"
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    animateRing()

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [data-interactive]")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    // Hide default cursor
    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.body.style.cursor = "auto"
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={bloomRef} className="cursor-bloom hidden md:block" />
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
