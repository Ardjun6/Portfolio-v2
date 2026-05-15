"use client"

import { useEffect, useState, useRef } from "react"

interface TypewriterProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function Typewriter({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseTime = 2200,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          timeoutRef.current = setTimeout(handleTyping, typingSpeed)
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1))
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed)
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }

    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span>
      {displayText}
      <span className="typewriter-cursor" />
    </span>
  )
}
