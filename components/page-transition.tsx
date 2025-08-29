"use client"

import type { PropsWithChildren } from "react"

export function PageTransition({ children }: PropsWithChildren) {
  return <div className="animate-in fade-in-0 duration-200 ease-out">{children}</div>
}
