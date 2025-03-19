import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Heart, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Trending() {
  // Sample product data - in a real app, this would come from an API or database
  const products = [
    {
      id: 1,
      name: "Oversized Graphic Tee",
      price: "$29.99",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-1",
      trending: "#1 in Tops",
    },
    {
      id: 3,
      name: "High-Waisted Mom Jeans",
      price: "$49.99",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-3",
      trending: "#2 in Bottoms",
    },
    {
      id: 4,
      name: "Chunky Platform Sneakers",
      price: "$79.99",
      rating: 4.9,
      reviews: 201,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-4",
      trending: "#1 in Footwear",
    },
    {
      id: 9,
      name: "Oversized Sunglasses",
      price: "$19.99",
      rating: 4.5,
      reviews: 87,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-9",
      trending: "#1 in Accessories",
    },
    {
      id: 10,
      name: "Tie-Dye Sweatshirt",
      price: "$44.99",
      rating: 4.6,
      reviews: 103,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-10",
      trending: "#3 in Tops",
    },
    {
      id: 11,
      name: "Leather Crossbody Bag",
      price: "$59.99",
      rating: 4.8,
      reviews: 142,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-11",
      trending: "#2 in Accessories",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-brand-pink/20 to-brand-purple/20 py-12">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-brand-pink" />
            <h1 className="text-4xl font-bold">Trending Now</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            These are the hottest items flying off our shelves. Shop the most popular styles before they're gone!
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
                className="group overflow-hidden rounded-xl border bg-background p-3 product-card relative"
              >
                <Badge className="absolute top-5 left-5 z-10 bg-brand-pink text-white">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {product.trending}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-5 right-5 z-10 bg-white/80 hover:bg-white rounded-full"
                >
                  <Heart className="h-4 w-4 text-brand-pink" />
                </Button>
                <div className="aspect-square overflow-hidden rounded-lg bg-muted relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-bold text-brand-pink">{product.price}</p>
                    <div className="flex items-center text-sm text-brand-pink font-medium">
                      <span>Shop on Shopee</span>
                      <ShoppingBag className="ml-1 h-4 w-4" />
                    </div>
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

