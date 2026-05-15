"use client"

import { useRef, useEffect } from "react"

export function AnimatedBlobs() {
  const blobsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Blobs animate via CSS, no JS needed
  }, [])

  return (
    <div ref={blobsRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Purple blob - top left */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "#7c3aed",
          top: "-180px",
          left: "-180px",
          animation: "blob-morph 14s ease-in-out infinite, blob-float 20s ease-in-out infinite",
        }}
      />
      
      {/* Pink blob - right */}
      <div
        className="absolute w-[560px] h-[560px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "#be185d",
          top: "35%",
          right: "-140px",
          animation: "blob-morph 11s ease-in-out infinite reverse, blob-float 16s ease-in-out infinite",
        }}
      />
      
      {/* Cyan blob - bottom left */}
      <div
        className="absolute w-[620px] h-[620px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "#0e7490",
          bottom: "-180px",
          left: "18%",
          animation: "blob-morph 13s ease-in-out infinite, blob-float 22s ease-in-out infinite reverse",
        }}
      />
      
      {/* Small purple blob - top right */}
      <div
        className="absolute w-[380px] h-[380px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "#9333ea",
          top: "12%",
          right: "22%",
          animation: "blob-morph 9s ease-in-out infinite reverse, blob-float 14s ease-in-out infinite",
        }}
      />
      
      {/* Cyan blob - bottom right */}
      <div
        className="absolute w-[430px] h-[430px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "#0891b2",
          bottom: "8%",
          right: "-110px",
          animation: "blob-morph 16s ease-in-out infinite, blob-float 18s ease-in-out infinite reverse",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
