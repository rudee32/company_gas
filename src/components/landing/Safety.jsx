import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, FileCheck, AlertTriangle, HardHat, Leaf } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "SNI Certified",
    desc: "Memenuhi Standar Nasional Indonesia untuk produk gas industri dan medis.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001:2015",
    desc: "Sistem manajemen mutu terakreditasi untuk menjamin kualitas produk dan layanan.",
  },
  {
    icon: FileCheck,
    title: "Izin Industri Lengkap",
    desc: "Perizinan lengkap dari instansi terkait untuk operasi produksi dan distribusi gas.",
  },
  {
    icon: HardHat,
    title: "K3 Compliance",
    desc: "Mematuhi standar Keselamatan dan Kesehatan Kerja dalam setiap aspek operasional.",
  },
  {
    icon: AlertTriangle,
    title: "Protokol Darurat",
    desc: "Prosedur penanganan darurat yang terlatih untuk menghadapi setiap situasi.",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    desc: "Komitmen terhadap praktik bisnis yang berkelanjutan dan ramah lingkungan.",
  },
];

export default function Safety() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FDB813] overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #0D1B2A 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#0D1B2A] font-heading font-semibold text-sm tracking-widest uppercase">
            Keselamatan & Sertifikasi
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#0D1B2A] mt-4 leading-tight">
            Keselamatan Adalah Prioritas Utama
          </h2>
          <p className="mt-6 text-[#0D1B2A]/70 font-body text-lg leading-relaxed">
            Kami berkomitmen penuh terhadap standar keselamatan tertinggi dalam setiap aspek operasi kami.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-[#0D1B2A] rounded-2xl p-8 group hover:bg-[#1B4965] transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FDB813]/20 flex items-center justify-center">
                <cert.icon className="w-7 h-7 text-[#FDB813]" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mt-6">{cert.title}</h3>
              <p className="text-[#E0E1DD]/70 font-body text-sm mt-3 leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}