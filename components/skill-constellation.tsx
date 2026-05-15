"use client"

import { useState } from "react"

interface SkillCategory {
  name: string
  description: string
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    description: "Core programming languages",
    skills: ["Python", "JavaScript", "PHP", "HTML5", "CSS3", "MySQL"],
  },
  {
    name: "Frontend",
    description: "Building user interfaces",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Data Science & AI",
    description: "Machine learning & analysis",
    skills: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "Matplotlib", "Data Visualization"],
  },
  {
    name: "DevOps & Tools",
    description: "Development workflow",
    skills: ["Docker", "Git", "GitHub Actions", "Cursor", "Hostinger", "Ubuntu", "WordPress"],
  },
  {
    name: "Professional Skills",
    description: "Soft skills & workflow",
    skills: ["Documentation", "Communication", "Meetings", "Project Ownership", "Problem Solving"],
  },
]

export function SkillConstellation() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {SKILL_CATEGORIES.map((category) => (
        <div
          key={category.name}
          className={`p-6 rounded-xl border transition-all duration-300 ${
            hoveredCategory === category.name
              ? "border-primary/40 bg-primary/5"
              : "border-white/10 bg-white/[0.02]"
          } ${category.name === "Professional Skills" ? "md:col-span-2" : ""}`}
          onMouseEnter={() => setHoveredCategory(category.name)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
          <p className="text-xs text-muted-foreground mb-4">{category.description}</p>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-foreground/80 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
