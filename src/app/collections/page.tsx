import Link from "next/link"
import Image from "next/image"

export default function Collections() {
  const collections = [
    {
      name: "Summer Essentials",
      description: "Light and breathable pieces for the hottest days",
      image: "/placeholder.svg?height=600&width=800",
      link: "/collections/summer",
    },
    {
      name: "Streetwear",
      description: "Urban-inspired looks for everyday style",
      image: "/placeholder.svg?height=600&width=800",
      link: "/collections/streetwear",
    },
    {
      name: "Athleisure",
      description: "Comfortable activewear that transitions from gym to casual outings",
      image: "/placeholder.svg?height=600&width=800",
      link: "/collections/athleisure",
    },
    {
      name: "Formal Attire",
      description: "Sophisticated pieces for special occasions",
      image: "/placeholder.svg?height=600&width=800",
      link: "/collections/formal",
    },
    {
      name: "Accessories",
      description: "The finishing touches to complete any outfit",
      image: "/placeholder.svg?height=600&width=800",
      link: "/collections/accessories",
    },
    {
      name: "Vintage Inspired",
      description: "Retro looks with a modern twist",
      image: "/placeholder.svg?height=600&width=800",
      link: "/collections/vintage",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-brand-purple/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse our carefully curated collections designed to match your style and personality.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={index}
                href={collection.link}
                className="group overflow-hidden rounded-xl border product-card relative"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{collection.name}</h2>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                  <span className="text-brand-purple font-medium group-hover:underline">Explore Collection</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

