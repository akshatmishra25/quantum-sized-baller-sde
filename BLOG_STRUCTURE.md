# Blog Structure Documentation

## Overview
This blog now uses a category-based structure where posts are organized by topics before individual slugs.

## URL Structure
- **Main blog page**: `/blog` - Shows all categories
- **Category page**: `/blog/[category]` - Shows all posts in a category
- **Individual post**: `/blog/[category]/[slug]` - Shows a specific blog post

## Categories
The blog includes the following categories:
- **Code & Technology** (`code`) - Programming, tech tutorials, development
- **Football & Sports** (`football`) - Football analysis, tactics, sports
- **Interview Experiences** (`interview-experiences`) - Job interviews, career advice
- **Music & Arts** (`music`) - Music, art, creativity
- **Life & Philosophy** (`life`) - Personal growth, philosophy, life lessons
- **Random Thoughts** (`random`) - Miscellaneous topics, random ideas

## File Structure
```
app/blog/
├── page.tsx                    # Main blog page (categories)
├── loading.tsx                 # Loading for main page
├── [category]/
│   ├── page.tsx               # Category page
│   ├── loading.tsx            # Loading for category
│   ├── not-found.tsx          # 404 for invalid category
│   └── [slug]/
│       ├── page.tsx           # Individual blog post
│       ├── loading.tsx        # Loading for blog post
│       └── not-found.tsx      # 404 for invalid post
```

## Adding New Posts
1. Add your post to the `samplePosts` array in `lib/posts.ts`
2. Include a `category` field that matches one of the existing categories
3. The post will automatically appear in the correct category

## Adding New Categories
1. Add your category to the `categoryNames` object in `lib/posts.ts`
2. Create posts with the new category
3. The category will automatically appear on the main blog page

## Features
- **Responsive grid layout** for categories
- **Post previews** showing first 3 posts in each category
- **Category badges** on individual posts
- **Breadcrumb navigation** between categories and posts
- **Static generation** for all routes
- **Loading states** for better UX
- **404 pages** for invalid routes
