import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Package } from "lucide-react";

const stats = [
  { icon: MapPin, value: "10+", label: "Wilayah Layanan" },
  { icon: Truck, value: "20+", label: "Armada Transportasi" },
  { icon: Clock, value: "24/7", label: "Layanan Non-Stop" },
  { icon: Package, value: "1000+", label: "Pengiriman / Bulan" },
];

const areas = [
  "Sampit", "Sebabi", "Asambaru", "Pelantaran",
  "Parenggean", "KPA", "Katingan", "Bagendang",
  "Samuda", "Bangkal",
];

export default function Distribution() {
  return (
    <section id="distribusi" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e0298b3d20a302409a0ab4/cb4af9e4a_generated_b05921e2.png"
          alt="Fleet of gas distribution trucks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#FDB813] font-heading font-semibold text-sm tracking-widest uppercase">
              Jaringan Distribusi
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-4 leading-tight">
              Jangkauan Luas di{" "}
              <span className="text-[#FDB813]">Kalimantan Tengah</span>
            </h2>
            <p className="mt-6 text-[#E0E1DD]/70 font-body text-lg leading-relaxed">
              Dengan armada transportasi modern dan tim distribusi berpengalaman, kami memastikan pasokan gas industri Anda selalu tersedia tepat waktu di seluruh wilayah Kalimantan Tengah.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FDB813]/10 border border-[#FDB813]/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#FDB813]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-white">{stat.value}</p>
                    <p className="text-[#E0E1DD]/60 text-sm font-body">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8"
          >
            <h3 className="font-heading font-bold text-white text-xl mb-6">Wilayah Layanan</h3>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-[#FDB813]/10 transition-colors group cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FDB813] group-hover:scale-125 transition-transform" />
                  <span className="text-[#E0E1DD] font-body text-sm group-hover:text-[#FDB813] transition-colors">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#FDB813]/10 border border-[#FDB813]/20">
              <p className="text-[#FDB813] font-body text-sm leading-relaxed">
                <strong className="font-heading">Butuh pengiriman ke lokasi lain?</strong>{" "}
                Hubungi tim kami untuk informasi lebih lanjut tentang area layanan khusus.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}