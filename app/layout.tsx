import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Fira_Mono as FontMono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Quantum Sized Baller SDE",
  description: "Code. Physics. The Beautiful Game. Deconstructed.",
  generator: "v0.app",
}

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})
const fontMono = FontMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${fontSans.variable} ${fontMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Suspense fallback={null}>
            <SiteHeader />
            <main className="min-h-screen">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
