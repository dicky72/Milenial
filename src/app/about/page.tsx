import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function About() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Fashion enthusiast with 10+ years in the industry. Alex started TrendyFits with a vision to make stylish clothing accessible to all millennials.",
    },
    {
      name: "Jamie Lee",
      role: "Head of Design",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former designer at top fashion houses, Jamie brings creative expertise and an eye for emerging trends to our collections.",
    },
    {
      name: "Taylor Smith",
      role: "Marketing Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Digital marketing specialist who knows exactly how to connect with the millennial audience across all platforms.",
    },
  ]

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-brand-purple/20" />
        <div className="container py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Founded in 2020, TrendyFits was born from a passion to create fashion that resonates with the millennial
              spirit - bold, expressive, and conscious.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At TrendyFits, we believe fashion should be accessible, sustainable, and a form of self-expression.
                We're committed to creating clothing that not only looks good but also feels good to wear and good to
                buy.
              </p>
              <p className="text-muted-foreground mb-4">
                We work with ethical manufacturers and use eco-friendly materials wherever possible, ensuring our
                environmental footprint is minimized while maximizing style.
              </p>
              <p className="text-muted-foreground">
                Our curated collections are designed to help you express your unique personality while staying on-trend
                and comfortable.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our workshop"
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-xl overflow-hidden shadow-md product-card">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-brand-pink font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="text-muted-foreground mb-8">
            Follow us on social media for style inspiration, behind-the-scenes content, and exclusive offers.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="rounded-full">
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Facebook className="h-5 w-5 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Twitter className="h-5 w-5 mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

