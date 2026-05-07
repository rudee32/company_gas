import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Layanan", href: "#layanan" },
  { label: "Distribusi", href: "#distribusi" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D1B2A]/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-[#FDB813] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 flex-shrink-0">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FDB813] to-[#e09e00] shadow-lg shadow-[#FDB813]/30 group-hover:shadow-[#FDB813]/50 transition-shadow duration-300" />
                {/* Inner content */}
                <div className="absolute inset-0 rounded-xl flex flex-col items-center justify-center">
                  {/* Flame/gas icon SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C12 2 7 7 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 7 12 2 12 2Z" fill="#0D1B2A" fillOpacity="0.9"/>
                    <path d="M12 8C12 8 9.5 11 9.5 13.5C9.5 14.88 10.62 16 12 16C13.38 16 14.5 14.88 14.5 13.5C14.5 11 12 8 12 8Z" fill="#FDB813" fillOpacity="0.4"/>
                    <path d="M8 20C8 21.1 9.79 22 12 22C14.21 22 16 21.1 16 20C16 19.4 15.24 18.87 14.09 18.55C13.44 19.39 12.76 19.8 12 19.8C11.24 19.8 10.56 19.39 9.91 18.55C8.76 18.87 8 19.4 8 20Z" fill="#0D1B2A" fillOpacity="0.7"/>
                  </svg>
                </div>
                {/* Corner accent */}
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#1B4965] border-2 border-[#FDB813]" />
              </div>
              <div className="hidden sm:block">
                <div className="flex items-baseline gap-1">
                  <p className="font-heading font-bold text-white text-lg leading-tight tracking-tight">Central</p>
                  <p className="font-heading font-bold text-[#FDB813] text-lg leading-tight tracking-tight">Gas</p>
                </div>
                <p className="text-[#E0E1DD]/60 text-[10px] tracking-[0.25em] uppercase font-body">Sampit • Est. 2008</p>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-body text-[#E0E1DD] hover:text-[#FDB813] transition-colors duration-300 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

{/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#kontak">
                <Button className="bg-[#FDB813] text-[#0D1B2A] hover:bg-[#FDB813]/90 font-heading font-semibold shadow-lg shadow-[#FDB813]/20 hover:shadow-[#FDB813]/40 transition-all">
                  Hubungi Kami
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0D1B2A]/98 backdrop-blur-xl pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-4 text-lg font-heading text-white hover:text-[#FDB813] transition-colors border-b border-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a href="#kontak" onClick={() => setMobileOpen(false)} className="mt-4 w-full">
                <Button className="w-full bg-[#FDB813] text-[#0D1B2A] font-heading font-semibold text-lg py-6">
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}