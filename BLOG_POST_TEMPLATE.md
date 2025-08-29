# Blog Post Template

Use this template as a reference when creating new blog posts. Copy the structure below and customize it for your content.

## Basic Post Structure

```typescript
{
  slug: "your-blog-post-slug",
  title: "Your Blog Post Title",
  excerpt: "A brief 1-2 sentence summary of what the post is about.",
  content: `## Introduction

Start with an engaging introduction that hooks the reader.

## Main Section 1

Your first main content section. Use clear headings and subheadings.

### Subsection 1.1

Break down complex topics into digestible pieces.

### Subsection 1.2

Continue with more detailed explanations.

## Main Section 2

Another major section of your content.

### Code Examples

When sharing code, use proper formatting:

\`\`\`typescript
function exampleFunction() {
  // Your code here
  return "Hello World";
}
\`\`\`

### Lists and Bullet Points

- Point 1
- Point 2
- Point 3

## Key Takeaways

Summarize the main points:

1. **First takeaway** - Brief explanation
2. **Second takeaway** - Brief explanation
3. **Third takeaway** - Brief explanation

## Conclusion

Wrap up your post with a strong conclusion that reinforces your main message.`,
  date: "YYYY-MM-DD",
  readingTime: "X min read",
  tags: ["Tag1", "Tag2", "Tag3"],
  category: "your-category",
  author: "Quantum",
}
```

## Content Formatting Guidelines

### Headings
- Use `## ` for main sections
- Use `### ` for subsections
- Use `#### ` for sub-subsections (if needed)

### Code Blocks
- Use triple backticks with language specification
- Common languages: `typescript`, `javascript`, `python`, `bash`, `json`
- Include comments to explain complex code

### Lists
- Use `- ` for bullet points
- Use `1. ` for numbered lists
- Use `**bold**` for emphasis within lists

### Blockquotes
- Use `> ` for important quotes or callouts
- Great for highlighting key insights

### Links and References
- Include relevant links when appropriate
- Reference external resources or previous blog posts

## Category Guidelines

### Code & Technology (`code`)
- Programming tutorials
- Tech reviews
- Development best practices
- Framework comparisons
- Debugging guides

### Football & Sports (`football`)
- Match analysis
- Tactical breakdowns
- Player profiles
- Historical perspectives
- Statistical insights

### Interview Experiences (`interview-experiences`)
- Company-specific processes
- Preparation strategies
- Technical question breakdowns
- Behavioral interview tips
- Offer negotiation advice

### Music & Arts (`music`)
- Album reviews
- Artist analysis
- Creative process insights
- Music theory explanations
- Cultural commentary

### Life & Philosophy (`life`)
- Personal growth
- Life lessons
- Philosophical discussions
- Productivity tips
- Mindfulness practices

### Random Thoughts (`random`)
- Miscellaneous topics
- Random ideas
- Cross-disciplinary insights
- Thought experiments
- Interesting observations

## Writing Tips

### Structure
1. **Hook** - Start with something engaging
2. **Context** - Provide background information
3. **Main Content** - Break into logical sections
4. **Examples** - Use concrete examples and code
5. **Takeaways** - Summarize key points
6. **Conclusion** - End with impact

### Style
- Write in first person ("I", "my", "we")
- Use active voice
- Keep paragraphs short (2-3 sentences max)
- Include personal anecdotes when relevant
- Be conversational but professional

### Technical Content
- Explain concepts before diving into code
- Use analogies for complex topics
- Include error handling and edge cases
- Show both simple and advanced approaches
- Link to additional resources

### SEO and Accessibility
- Use descriptive headings
- Include relevant keywords naturally
- Write clear, concise excerpts
- Use alt text for images (when you add them)
- Structure content logically

## Example Post Structure

Here's how your "SDE Intern, Blockstash" post follows this template:

1. **Introduction** - Sets context about the internship application
2. **Process Sections** - Each interview stage as a main section
3. **Technical Details** - Code examples and specific questions
4. **Key Takeaways** - What worked, what didn't, tips
5. **Conclusion** - Summary and excitement for the role

## Adding Your Post

1. Copy the template structure above
2. Customize it for your content
3. Add it to the `samplePosts` array in `lib/posts.ts`
4. Ensure the `category` matches an existing category
5. Use a unique `slug` (URL-friendly version of your title)
6. Set appropriate `tags` for discoverability

Your post will automatically appear in the correct category and on the main blog page!
