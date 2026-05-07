import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e0298b3d20a302409a0ab4/6c6bcecf4_generated_68a134b0.png"
          alt="Industrial gas facility at dawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent opacity-60" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FDB813]/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FDB813] animate-pulse" />
              <span className="text-[#FDB813] text-sm font-body font-medium tracking-wider uppercase">
                Penyedia Gas Industri Terpercaya
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-heading font-bold text-white leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">Solusi Gas</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2">Industri &</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2 text-[#FDB813]">Medis Terbaik</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-lg md:text-xl text-[#E0E1DD]/80 font-body leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Central Gas Sampit menyediakan gas industri berkualitas tinggi untuk kebutuhan manufaktur, medis, dan energi di Kalimantan Tengah dan sekitarnya.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a href="#produk">
              <Button className="bg-[#FDB813] text-[#0D1B2A] hover:bg-[#FDB813]/90 font-heading font-semibold text-base px-8 py-6 shadow-lg shadow-[#FDB813]/25 hover:shadow-[#FDB813]/40 transition-all group">
                Lihat Produk
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#tentang">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-heading font-medium text-base px-8 py-6 backdrop-blur-sm">
                Tentang Kami
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "15+", label: "Tahun Pengalaman" },
              { value: "500+", label: "Klien Aktif" },
              { value: "24/7", label: "Layanan Pengiriman" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-2xl sm:text-3xl text-[#FDB813]">{stat.value}</p>
                <p className="text-[#E0E1DD]/60 text-xs sm:text-sm font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[#E0E1DD]/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#FDB813]/60" />
      </motion.div>
    </section>
  );
}