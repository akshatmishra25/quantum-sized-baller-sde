"use client"

import { useState } from "react"
import Highlight, { defaultProps, themes } from "prism-react-renderer"

export function CodeBlock({
  code,
  language,
}: {
  code: string
  language: string
}) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {}
  }

  return (
    <div className="group relative my-5 overflow-hidden rounded-md border border-border">
      <div className="absolute right-2 top-2 z-10 flex items-center gap-2">
        <span className="rounded bg-black/60 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-white">
          {language}
        </span>
        <button
          onClick={onCopy}
          className="rounded bg-black/60 px-2 py-1 text-xs text-white opacity-80 transition-opacity hover:opacity-100"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <Highlight {...defaultProps} theme={themes.dracula} code={code.trim()} language={language as any}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} m-0 max-h-[60vh] overflow-auto bg-[#0B0B0B] p-4 text-sm leading-relaxed`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
