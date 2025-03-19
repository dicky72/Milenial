import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Hoodie() {
  // Data produk hoodie - pada aplikasi nyata, ini akan berasal dari API atau database
  const products = [
    {
      id: 1,
      name: "Hoodie Oversize",
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-1",
    },
    {
      id: 2,
      name: "Hoodie Crop Top",
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-2",
    },
    {
      id: 3,
      name: "Hoodie Zip-Up",
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-3",
    },
    {
      id: 4,
      name: "Hoodie Grafis",
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-4",
    },
    {
      id: 5,
      name: "Hoodie Polos Premium",
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-5",
    },
    {
      id: 6,
      name: "Hoodie Tie-Dye",
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-6",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Hoodie</h1>
          <p className="text-muted-foreground max-w-2xl">
            Koleksi hoodie nyaman dengan berbagai desain untuk gaya santai dan hangat.
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

