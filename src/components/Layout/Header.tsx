"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Cursos", href: "#cursos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-500">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Meta<span className="text-primary">Bee</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="lg" className="shadow-primary">
              Inscreva-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button size="lg" className="mt-2 shadow-primary">
              Inscreva-se
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
