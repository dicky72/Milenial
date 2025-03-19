import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Outfit Milenial",
  description: "Temukan outfit keren untuk gaya milenial",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="border-t py-8 bg-muted/30">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="font-semibold">Outfit Milenial</span>
            </div>
            <p className="text-center text-sm text-muted-foreground">© 2025 Outfit Milenial. Semua hak dilindungi.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontak
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

