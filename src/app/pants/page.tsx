import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Pants() {
  // Data produk celana - pada aplikasi nyata, ini akan berasal dari API atau database
  const products = [
    {
      id: 1,
      name: " Vearst Work Pants Sable 540 Cut Black - Slim Straight",
      image: "/c1.webp",
      shopeeLink: "https://s.shopee.co.id/3fpgNsmMRW",
    },
    {
      id: 2,
      name: "Vearst Painter Pants Shaman Black Wash",
      image: "/c2.webp",
      shopeeLink: "https://s.shopee.co.id/8fEMLA0qe8",
    },
    {
      id: 3,
      name: "Vearst Denim Slim Tapered Phantom Black",
      image: "/c3.webp",
      shopeeLink: "https://s.shopee.co.id/9f6tX4mQcI",
    },
    {
      id: 4,
      name: "Hammerstout - Celana Cargo - Combat Slim Type-2",
      image: "/c5.webp",
      shopeeLink: "https://s.shopee.co.id/8KbVwhp8ml",
    },
    {
      id: 5,
      name: "Hammerstout - Celana Panjang Jeans - Vortex",
      image: "/c6.webp",
      shopeeLink: "https://s.shopee.co.id/wO1SWJL3",
    },
    {
      id: 6,
      name: "Hammerstout - Celana Chino Workpants - Trosa",
      image: "/c7.webp",
      shopeeLink: "https://s.shopee.co.id/6V9rlUrjkH",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Pants</h1>
          <p className="text-muted-foreground max-w-2xl">
            Koleksi pants dengan berbagai model dan bahan yang nyaman untuk gaya kasual maupun formal.
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

