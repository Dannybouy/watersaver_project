import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WaterSaver - Calculate & Save Water Resources",
  description:
    "Track your water usage, get personalized recommendations, and contribute to environmental sustainability.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Toaster  />
        <Footer />
      </body>
    </html>
  )
}

