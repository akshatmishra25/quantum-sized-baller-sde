import fs from 'fs'
import path from 'path'

export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  tags: string[]
  category: string
  featured?: boolean
  author?: string
}

// Get category display names
export const categoryNames: Record<string, string> = {
  "code": "Code & Technology",
  "football": "Football & Sports",
  "interview-experiences": "Interview Experiences",
  "music": "Music & Arts",
  "life": "Life & Philosophy",
  "random": "Random Thoughts"
}

// Function to load posts from JSON files
function loadPostsFromFiles(): Post[] {
  try {
    const fs = require('fs')
    const path = require('path')
    
    const postsDir = path.join(process.cwd(), 'public/blog-posts')
    const allPosts: Post[] = []

    if (!fs.existsSync(postsDir)) {
      return []
    }

    // Iterate through all category folders
    const categories = fs.readdirSync(postsDir, { withFileTypes: true })
    
    categories.forEach((categoryDir: any) => {
      if (!categoryDir.isDirectory()) return
      
      const category = categoryDir.name
      const categoryPath = path.join(postsDir, category)
      
      // Read all JSON files in the category folder
      const files = fs.readdirSync(categoryPath).filter((file: string) => file.endsWith('.json'))
      
      files.forEach((file: string) => {
        try {
          const filePath = path.join(categoryPath, file)
          const fileContent = fs.readFileSync(filePath, 'utf-8')
          const post = JSON.parse(fileContent) as Omit<Post, 'category'>
          
          // Add category to the post
          const fullPost: Post = {
            ...post,
            category
          }
          
          allPosts.push(fullPost)
        } catch (error) {
          console.error(`Error loading post from ${file}:`, error)
        }
      })
    })

    return allPosts
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

// Load all posts
export const allPosts = loadPostsFromFiles()

// Export posts as well for backward compatibility
export const posts = allPosts

// Get featured posts
export const featuredPosts = allPosts.filter(post => post.featured === true)

// Get posts by category
export function getPostsByCategory(category: string): Post[] {
  return allPosts.filter(post => post.category === category)
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = allPosts.map(post => post.category)
  return [...new Set(categories)]
}
