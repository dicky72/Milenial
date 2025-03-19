import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const categories = [
    {
      name: "T-Shirt",
      image: "/test1.webp",
      link: "/t-shirt",
    },
    { name: "Pants", image: "/c3.webp", link: "/pants" },
    { name: "Hoodie", image: "/h1.webp", link: "/hoodie" },
    { name: "Shoes", image: "/s3.webp", link: "/shoes" },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="container max-w-7xl px-6 py-12 md:py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm">Koleksi Baru</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Outfit Keren <br /> Untuk Milenial
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Ekspresikan dirimu dengan koleksi outfit keren kami yang dirancang untuk gaya hidup milenial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Belanja Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/d1.jpg"
                alt="Koleksi Outfit"
                width={650}
                height={650}
                className="rounded-2xl shadow-xl max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container max-w-7xl px-6 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Kategori Produk</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group relative overflow-hidden rounded-xl aspect-square bg-background border hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-xl">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}