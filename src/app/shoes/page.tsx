import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Shoes() {
  // Data produk sepatu - pada aplikasi nyata, ini akan berasal dari API atau database
  const products = [
    {
      id: 1,
      name: "Geoff Max X Gundam - Wolf Vicious RX-78-2 White Black",
      image: "/s1.webp",
      shopeeLink: "https://s.shopee.co.id/1qO2M2EWgO",
    },
    {
      id: 2,
      name: "Geoff Max - Wolf Vicious White",
      image: "/s2.webp",
      shopeeLink: "https://s.shopee.co.id/50L47uRWHU",
    },
    {
      id: 3,
      name: "Geoff Max X Gundam - Wolf Vicious RX-78-2 Black",
      image: "/s3.webp",
      shopeeLink: "https://s.shopee.co.id/9AAd5bsup8",
    },
    {
      id: 4,
      name: "Kenfa - Sefron Black Sepatu Formal Pria Wanita Casual Kerja Kantor Semi Kulit Simple Basic Hitam",
      image: "/s4.webp",
      shopeeLink: "https://s.shopee.co.id/5AeUKOe2a7",
    },
    {
      id: 5,
      name: "TOMKINS Sneakers Pria Winchester Alpha - Black Grey",
      image: "/s5.webp",
      shopeeLink: "https://s.shopee.co.id/1VlBxlcSCA",
    },
    {
      id: 6,
      name: "Sepatu Thunderbear - Slip On Voltaire BW",
      image: "/s6.webp",
      shopeeLink: "https://s.shopee.co.id/1VlBxlcSCA",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Shoes</h1>
          <p className="text-muted-foreground max-w-2xl">
            Koleksi shoes keren dan nyaman untuk melengkapi gaya fashion milenial Anda.
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

