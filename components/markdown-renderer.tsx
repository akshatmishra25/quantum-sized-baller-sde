"use client"

import ReactMarkdown from "react-markdown"

import remarkGfm from "remark-gfm"

import { CodeBlock } from "@/components/code-block"

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="mb-4 mt-8 text-3xl font-semibold text-foreground" {...props} />,
        h2: ({ node, ...props }) => <h2 className="mb-3 mt-8 text-2xl font-semibold text-foreground" {...props} />,
        h3: ({ node, ...props }) => <h3 className="mb-2 mt-6 text-xl font-semibold text-foreground" {...props} />,
        p: ({ node, ...props }) => <p className="my-4 leading-7 text-foreground/80" {...props} />,
        a: ({ node, ...props }) => <a className="underline-offset-2 text-[var(--brand)] hover:underline" {...props} />,
        ul: ({ node, ...props }) => <ul className="my-4 ml-6 list-disc space-y-1 text-foreground/80" {...props} />,
        ol: ({ node, ...props }) => <ol className="my-4 ml-6 list-decimal space-y-1 text-foreground/80" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="my-4 border-l-2 border-[var(--brand)] pl-4 italic text-foreground/70" {...props} />
        ),
        code: ({ inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "")
          if (!inline && match) {
            return <CodeBlock code={String(children)} language={match[1]?.toLowerCase() || "text"} />
          }
          return <code className="rounded bg-muted px-1.5 py-0.5 text-sm">{children}</code>
        },
        table: ({ node, ...props }) => <table className="my-6 w-full border-collapse" {...props} />,
        thead: ({ node, ...props }) => <thead className="bg-muted" {...props} />,
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => <tr className="border-b border-border" {...props} />,
        th: ({ node, ...props }) => <th className="px-4 py-3 text-left font-semibold text-foreground" {...props} />,
        td: ({ node, ...props }) => <td className="px-4 py-3 text-foreground/80" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
