export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  tags: string[]
  featured?: boolean
  author?: string
}

export const posts: Post[] = [
  {
    slug: "building-a-solid-nextjs-blog",
    title: "Building a Solid Next.js Blog",
    excerpt: "A pragmatic guide to structuring a content-first blog using the App Router, TypeScript, and Tailwind.",
    content: `## Introduction

This post walks through a lean setup for a content-first blog.

### Why App Router?

- File-based routing
- Server Components
- Simpler data flows

\`\`\`ts
// example util
export function cn(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}
\`\`\`

> Keep the UI quiet. Let the content speak.

## Conclusion

Focus on typography, whitespace, and a fast, clean experience.`,
    date: "2025-08-29",
    readingTime: "6 min read",
    tags: ["Coding"],
    featured: true,
    author: "Quantum",
  },
  {
    slug: "four-verticals-of-a-football-midfield",
    title: "Four Verticals of a Football Midfield",
    excerpt: "Breaking down spatial dynamics and decision-making patterns across modern midfield structures.",
    content: `## Shape and Space

A midfield is a living organism. The spacing between lanes is the interface.

\`\`\`js
const lanes = ['left', 'half-left', 'half-right', 'right']
lanes.forEach(l => console.log(l))
\`\`\`

- Occupy space
- Create overloads
- Rotate intelligently`,
    date: "2025-08-21",
    readingTime: "8 min read",
    tags: ["Football"],
    author: "Quantum",
  },
  {
    slug: "quantum-notes-entanglement-and-information",
    title: "Quantum Notes: Entanglement and Information",
    excerpt: "An intuitive sketch of how entanglement constrains information and what that means for computation.",
    content: `## Entanglement Intuition

Bell pairs are correlations without classical analogs.

\`\`\`python
def measure(q1, q2):
    return ('+', '-')  # toy example
\`\`\`

- No signaling
- Strong correlations
- Computational implications`,
    date: "2025-08-10",
    readingTime: "7 min read",
    tags: ["Physics"],
    author: "Quantum",
  },
]
