"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBag, Menu, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const products = ["T-Shirt", "Pants", "Hoodie", "Shoes"];
const filteredProducts = products.filter((product) =>
  product.toLowerCase().includes(searchQuery.toLowerCase())
);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "T-Shirt", href: "/t-shirt" },
    { name: "Pants", href: "/pants" },
    { name: "Hoodie", href: "/hoodie" },
    { name: "Shoes", href: "/shoes" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-6 md:px-12">
        {/* Logo dan Menu Mobile */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-6">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="h-7 w-7 text-primary" />
                <span className="font-bold text-xl">Outfit Milenial</span>
              </div>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-lg font-medium rounded-lg px-4 py-2 transition-all ${
                        isActive(link.href)
                          ? "text-primary font-semibold bg-accent"
                          : "text-muted-foreground hover:text-primary hover:bg-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <ShoppingBag className="h-7 w-7 text-primary" />
            <span className="font-bold text-2xl">Outfit Milenial</span>
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-all relative px-2 py-1 ${
                isActive(link.href) ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Search */}
       {/* Search */}
{/* Search */}
<div className="flex items-center gap-4 relative">
  {isSearchOpen ? (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-40 md:w-60 transition-all"
          autoFocus
        />
        <Button type="submit" variant="outline">
          Cari
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
          <X className="h-5 w-5" />
          <span className="sr-only">Tutup</span>
        </Button>
      </form>

      {/* Dropdown hasil pencarian */}
      {searchQuery && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-lg border rounded-md p-2 z-50">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchQuery(product);
                  setIsSearchOpen(false);
                  router.push(`/${product.toLowerCase()}`);
                }}
              >
                {product}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500">Produk tidak ditemukan</div>
          )}
        </div>
      )}
    </div>
  ) : (
    <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
      <Search className="h-5 w-5" />
      <span className="sr-only">Cari</span>
    </Button>
  )}
</div>


      </div>
    </header>
  );
}
