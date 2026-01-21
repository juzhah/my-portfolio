"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Skills", href: "/#skills" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-350 mx-auto px-6 lg:px-12 flex items-center justify-between ">
        {/* Logo */}
        <Link
          href="/"
          className="relative border w-12 h-12 rounded-lg bg-primary/30 text-2xl font-bold text-white tracking-tighter p-2 flex justify-center align-middle shadow-lg shadow-primary/50"
        >
          E
          <Image
            src={Logo}
            alt="Esteban Lozada's portfolio"
            width={24}
            height={24}
            className="absolute -right-2 -bottom-2"
          ></Image>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-primary transition-colors uppercase tracking-widest hover:scale-105 transform duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-bold text-white bg-primary/20 border border-primary/20 rounded-lg hover:bg-primary hover:border-primary transition-all uppercase tracking-widest"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact" // Assuming there is a contact page or section
            className="text-lg font-medium text-primary"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
