import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 transition-all duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105 rounded-lg">
              <span className="text-2xl font-bold text-white">F.</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link
              href="/#about"
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-gray-400 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/#tools"
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-gray-400 hover:text-white"
            >
              Stack
            </Link>
            <Link
              href="#/career"
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-gray-400 hover:text-white"
            >
              Career
            </Link>
            <Link
              href="#/services"
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-gray-400 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="#/works"
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-primary"
            >
              Works
            </Link>
            <Link
              href="/#testimonials"
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-gray-400 hover:text-white"
            >
              Reviews
            </Link>
            <Link
              href="/#match"
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer text-gray-400 hover:text-white"
            >
              AI Match
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <Link
              href="#/contact"
              className="relative px-8 py-3 bg-primary/80 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg border border-white/10 shadow-[0_0_20px_rgba(255,90,60,0.4)] hover:bg-primary hover:shadow-[0_0_30px_rgba(255,90,60,0.6)] hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button className="text-white p-2" aria-label="Toggle menu">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
