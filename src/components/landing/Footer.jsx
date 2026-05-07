import React from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk Gas", href: "#produk" },
  { label: "Layanan", href: "#layanan" },
  { label: "Distribusi", href: "#distribusi" },
  { label: "Kontak", href: "#kontak" },
];

const products = [
  "Oksigen (O₂)",
  "Nitrogen (N₂)",
  "Argon (Ar)",
  "Karbon Dioksida (CO₂)",
  "Asetilen (C₂H₂)",
  "Gas Medis",
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] relative">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11 flex-shrink-0">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FDB813] to-[#e09e00] shadow-lg shadow-[#FDB813]/20" />
                <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C12 2 7 7 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 7 12 2 12 2Z" fill="#0D1B2A" fillOpacity="0.9"/>
                    <path d="M12 8C12 8 9.5 11 9.5 13.5C9.5 14.88 10.62 16 12 16C13.38 16 14.5 14.88 14.5 13.5C14.5 11 12 8 12 8Z" fill="#FDB813" fillOpacity="0.4"/>
                    <path d="M8 20C8 21.1 9.79 22 12 22C14.21 22 16 21.1 16 20C16 19.4 15.24 18.87 14.09 18.55C13.44 19.39 12.76 19.8 12 19.8C11.24 19.8 10.56 19.39 9.91 18.55C8.76 18.87 8 19.4 8 20Z" fill="#0D1B2A" fillOpacity="0.7"/>
                  </svg>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#1B4965] border-2 border-[#FDB813]" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <p className="font-heading font-bold text-white text-lg leading-tight">Central</p>
                  <p className="font-heading font-bold text-[#FDB813] text-lg leading-tight">Gas</p>
                </div>
                <p className="text-[#E0E1DD]/60 text-[10px] tracking-[0.25em] uppercase font-body">Sampit • Est. 2008</p>
              </div>
            </div>
            <p className="text-[#E0E1DD]/60 font-body text-sm leading-relaxed">
              Penyedia gas industri dan medis terpercaya di Kalimantan Tengah, melayani berbagai kebutuhan industri dengan standar kualitas tinggi.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-6 tracking-wide uppercase">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#E0E1DD]/60 hover:text-[#FDB813] transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-6 tracking-wide uppercase">Produk</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-[#E0E1DD]/60 font-body text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-6 tracking-wide uppercase">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#FDB813] mt-0.5 flex-shrink-0" />
                <span className="text-[#E0E1DD]/60 font-body text-sm">Poros Perum Pandawa No.08 GAH, Mentawa Baru Hulu, Kec. Mentawa Baru Ketapang, Kabupaten Kotawaringin Timur, Kalimantan Tengah 74322</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#FDB813] mt-0.5 flex-shrink-0" />
                <span className="text-[#E0E1DD]/60 font-body text-sm">+62 812 5419 3878</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#FDB813] mt-0.5 flex-shrink-0" />
                <span className="text-[#E0E1DD]/60 font-body text-sm">info@centralgassampit.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#E0E1DD]/40 font-body text-sm">
            © {new Date().getFullYear()} Central Gas Sampit. Seluruh hak cipta dilindungi.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-[#E0E1DD]/40 hover:text-[#FDB813] transition-colors font-body text-sm"
          >
            Kembali ke atas
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}