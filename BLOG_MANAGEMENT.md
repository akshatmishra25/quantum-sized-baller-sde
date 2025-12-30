# Blog Post Management

Your blog has been restructured to use JSON-based posts organized by category!

## Structure

```
public/blog-posts/
├── code/
│   ├── react-hooks-deep-dive.json
│   └── (add more posts here)
├── football/
│   ├── four-verticals-of-a-football-midfield.json
│   └── (add more posts here)
├── interview-experiences/
│   ├── sde-intern-blockstash.json
│   ├── full-stack-intern-stir.json
│   ├── backend-developer-intern-graviti.json
│   ├── full-stack-engineering-intern-zuddl.json
│   └── (add more posts here)
├── life/
│   ├── the-wild-month-of-june-2024.json
│   └── (add more posts here)
├── random/
│   ├── quantum-notes-entanglement-and-information.json
│   ├── quantum-computing-future.json
│   └── (add more posts here)
└── (add more category folders as needed)
```

## Available Categories

- **code** - Code & Technology
- **football** - Football & Sports
- **interview-experiences** - Interview Experiences
- **life** - Life & Philosophy
- **random** - Random Thoughts
- **music** - Music & Arts (optional, ready to use)

## How to Add a New Blog Post

### Step 1: Create a JSON File

Create a new `.json` file in the appropriate category folder. Name the file based on the blog slug (e.g., `my-awesome-post.json`).

### Step 2: Use This Format

```json
{
  "slug": "my-awesome-post",
  "title": "My Awesome Post Title",
  "excerpt": "A brief description of your post",
  "content": "Your full blog content in markdown format...",
  "date": "2025-12-30",
  "readingTime": "5 min read",
  "tags": ["tag1", "tag2"],
  "author": "Your Name",
  "featured": false
}
```

### Step 3: Field Descriptions

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `slug` | ✅ | string | URL-friendly identifier (lowercase, hyphens only) |
| `title` | ✅ | string | Post title |
| `excerpt` | ✅ | string | Brief description (appears in listings) |
| `content` | ✅ | string | Full post content (markdown supported) |
| `date` | ✅ | string | Publication date (YYYY-MM-DD format) |
| `readingTime` | ✅ | string | Estimated reading time (e.g., "8 min read") |
| `tags` | ✅ | array | List of tags/keywords |
| `author` | ❌ | string | Author name (optional) |
| `featured` | ❌ | boolean | Set to `true` to feature on homepage (optional) |

### Step 4: Example Post

```json
{
  "slug": "learning-typescript-basics",
  "title": "Learning TypeScript Basics",
  "excerpt": "A beginner-friendly guide to TypeScript fundamentals",
  "content": "## Introduction\n\nTypeScript is a typed superset of JavaScript...",
  "date": "2025-12-30",
  "readingTime": "10 min read",
  "tags": ["TypeScript", "JavaScript", "Learning"],
  "author": "Akshat",
  "featured": false
}
```

## Content Format (Markdown)

Your `content` field supports markdown:

```markdown
## Heading 2
### Heading 3

- Bullet point
- Another point

1. Numbered list
2. Item 2

**Bold text** and *italic text*

`inline code`

\`\`\`js
// Code blocks with language highlight
const hello = "world";
\`\`\`

> Blockquotes work too

[Links](https://example.com)
```

## Adding a New Category

To add a new category:

1. Create a new folder in `public/blog-posts/` with the category name
2. Add posts there as JSON files
3. (Optional) Update `categoryNames` in `lib/posts.ts` to display a nice label

Example:
```typescript
export const categoryNames: Record<string, string> = {
  "your-new-category": "Your New Category Label",
  // ...rest of categories
}
```

## Tips

- ✅ Keep slugs unique across all posts
- ✅ Use descriptive file names matching the slug
- ✅ Keep excerpts to 1-2 sentences
- ✅ Use markdown formatting in content for better readability
- ✅ Set `featured: true` to showcase posts on the homepage
- ✅ The category folder name automatically becomes the post's category
- ✅ Posts load dynamically from JSON files when the site builds

## Example Directory Structure After Adding Posts

```
public/blog-posts/
├── code/
│   ├── react-hooks-deep-dive.json
│   ├── learning-typescript-basics.json
│   └── vue-vs-react.json
├── interview-experiences/
│   ├── sde-intern-blockstash.json
│   └── my-new-interview-experience.json
└── tech-tips/
    └── productivity-tools.json
```

That's it! Your posts will automatically load and appear in the blog listings and detail pages. Happy blogging! 📝
