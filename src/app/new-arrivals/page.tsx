import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Heart, Star, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function NewArrivals() {
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
      category: "Tops",
    },
    {
      id: 2,
      name: "Distressed Denim Jacket",
      price: "$59.99",
      rating: 4.5,
      reviews: 89,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-2",
      category: "Outerwear",
    },
    {
      id: 3,
      name: "Pastel Crop Top",
      price: "$24.99",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-3",
      category: "Tops",
    },
    {
      id: 4,
      name: "Cargo Pants",
      price: "$45.99",
      rating: 4.9,
      reviews: 201,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-4",
      category: "Bottoms",
    },
    {
      id: 5,
      name: "Bucket Hat",
      price: "$24.99",
      rating: 4.3,
      reviews: 67,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-5",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Crop Top Hoodie",
      price: "$39.99",
      rating: 4.6,
      reviews: 112,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-6",
      category: "Tops",
    },
    {
      id: 7,
      name: "Platform Sandals",
      price: "$49.99",
      rating: 4.4,
      reviews: 78,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-7",
      category: "Footwear",
    },
    {
      id: 8,
      name: "Mini Skirt",
      price: "$34.99",
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=400&width=300",
      shopeeLink: "https://shopee.com/product-link-8",
      category: "Bottoms",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-brand-teal/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our latest collection of trendy outfits and accessories. These fresh styles just landed and are
            ready to elevate your wardrobe.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 space-y-6">
              <div className="sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                    Clear All
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="tops" className="mr-2" />
                        <label htmlFor="tops" className="text-sm">
                          Tops
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="bottoms" className="mr-2" />
                        <label htmlFor="bottoms" className="text-sm">
                          Bottoms
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="outerwear" className="mr-2" />
                        <label htmlFor="outerwear" className="text-sm">
                          Outerwear
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="footwear" className="mr-2" />
                        <label htmlFor="footwear" className="text-sm">
                          Footwear
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="accessories" className="mr-2" />
                        <label htmlFor="accessories" className="text-sm">
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="price-1" className="mr-2" />
                        <label htmlFor="price-1" className="text-sm">
                          Under $25
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-2" className="mr-2" />
                        <label htmlFor="price-2" className="text-sm">
                          $25 - $50
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-3" className="mr-2" />
                        <label htmlFor="price-3" className="text-sm">
                          $50 - $100
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-4" className="mr-2" />
                        <label htmlFor="price-4" className="text-sm">
                          $100+
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">{products.length} products</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Filter className="h-4 w-4 mr-2" />
                    Sort By
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={product.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-xl border bg-background p-3 product-card relative"
                  >
                    <Badge className="absolute top-5 left-5 z-10 bg-brand-teal text-white">New</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-5 right-5 z-10 bg-white/80 hover:bg-white rounded-full"
                    >
                      <Heart className="h-4 w-4 text-brand-teal" />
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
                      <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-lg font-bold text-brand-teal">{product.price}</p>
                        <div className="flex items-center text-sm text-brand-teal font-medium">
                          <span>Shop on Shopee</span>
                          <ShoppingBag className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

