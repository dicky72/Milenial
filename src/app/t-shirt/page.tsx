import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TShirt() {
  // Data produk t-shirt - pada aplikasi nyata, ini akan berasal dari API atau database
  const products = [
    {
      id: 1,
      name: "Vearst Affaires Tshirt Long Sleeve Acter Black",
      image: "/test1.webp",
      shopeeLink: "https://s.shopee.co.id/wNcNiDJb",
    },
    {
      id: 2,
      name: "Tshirt Short Sleeve Forever",
      image: "/test2.webp",
      shopeeLink: "https://s.shopee.co.id/9pQJL4ZUkY",
    },
    {
      id: 3,
      name: "Vearst Affaires Tshirt Short Sleeve Scale Cool Grey",
      image: "/test6.webp",
      shopeeLink: "https://s.shopee.co.id/8UuvmsstY0",
    },
    {
      id: 4,
      name: "Humblezing T-shirt Type Stone Beige",
      image: "/test4.webp",
      shopeeLink: "https://s.shopee.co.id/4L5MoZgIbh",
    },
    {
      id: 5,
      name: "Humblezing T-shirt Icon ls Black",
      image: "/test3.webp",
      shopeeLink: "https://s.shopee.co.id/7KiyNr5wSI",
    },
    {
      id: 6,
      name: "Humblezing Tshirt Tarpology",
      image: "/test5.webp",
      shopeeLink: "https://s.shopee.co.id/9UnSyOJIJw",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">T-Shirt</h1>
          <p className="text-muted-foreground max-w-2xl">
            Koleksi t-shirt keren dengan berbagai desain dan gaya untuk tampilan sehari-hari yang stylish.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl border bg-background p-3 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-muted relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex justify-end items-center mt-2">
                    <Button size="sm" className="flex items-center gap-1">
                      <ShoppingBag className="h-4 w-4" />
                      Beli di Shopee
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

