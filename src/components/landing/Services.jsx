import React from "react";
import { motion } from "framer-motion";
import { Truck, Wrench, FlaskConical, HeartPulse, Cylinder } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Distribusi & Pengiriman",
    desc: "Layanan pengiriman gas industri 24/7 dengan armada transportasi modern dan aman ke seluruh wilayah Kalimantan Tengah.",
  },
  {
    icon: Cylinder,
    title: "Pengisian Ulang Tabung",
    desc: "Fasilitas pengisian ulang tabung gas dengan standar keselamatan tinggi untuk berbagai jenis gas industri.",
  },
  {
    icon: Wrench,
    title: "Instalasi & Perawatan",
    desc: "Jasa instalasi sistem perpipaan gas, pemasangan regulator, dan perawatan berkala peralatan gas.",
  },
  {
    icon: HeartPulse,
    title: "Gas Medis Rumah Sakit",
    desc: "Pasokan gas medis untuk rumah sakit dan klinik termasuk instalasi sistem gas medis sentral.",
  },
  {
    icon: FlaskConical,
    title: "Konsultasi Teknis",
    desc: "Layanan konsultasi teknis untuk pemilihan gas yang tepat sesuai kebutuhan industri Anda.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="relative py-24 md:py-32 bg-[#F8F9FA] overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#FDB813]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FDB813] font-heading font-semibold text-sm tracking-widest uppercase">
            Layanan Kami
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#0D1B2A] mt-4 leading-tight">
            Layanan <span className="text-[#1B4965]">Profesional</span>
          </h2>
          <p className="mt-6 text-[#1B4965]/70 font-body text-lg leading-relaxed">
            Kami menyediakan layanan lengkap mulai dari pengiriman gas, instalasi sistem, hingga konsultasi teknis.
          </p>
        </motion.div>

{/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E0E1DD]/50 hover:border-[#FDB813]/30 relative overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B4965] to-[#FDB813] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-12 h-12 rounded-lg bg-[#1B4965]/10 flex items-center justify-center group-hover:bg-[#FDB813] transition-colors duration-300">
                <service.icon className="w-6 h-6 text-[#1B4965] group-hover:text-[#0D1B2A] transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-[#0D1B2A] text-base mt-4">{service.title}</h3>
              <p className="text-[#1B4965]/70 font-body text-xs mt-2 leading-relaxed line-clamp-3">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}