"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/galeria", label: "Galeria" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-[#374151]/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold text-gray-100 group-hover:text-[#1C64F2] transition-colors duration-300">
            André Pontes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-100 transition-all duration-300 hover:text-[#1C64F2] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#1C64F2] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <Button 
            asChild 
            className="bg-[#1C64F2] hover:bg-[#1C64F2]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#1C64F2]/20"
          >
            <Link href="/orcamento">Solicitar Orçamento</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 transition-colors duration-300 hover:text-[#1C64F2]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#374151]/95 backdrop-blur-md shadow-lg md:hidden animate-fadeIn">
            <nav className="container mx-auto py-6 flex flex-col space-y-6 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-100 transition-all duration-300 hover:text-[#1C64F2] hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild 
                className="bg-[#1C64F2] hover:bg-[#1C64F2]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#1C64F2]/20" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/orcamento">Solicitar Orçamento</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;