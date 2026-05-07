import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Truck, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";

const companyImages = [
  "/Image/perusahaan.png",
  "/Image/perusahaan1.jpeg",
  "/Image/perusahaan2.jpeg",
  "/Image/perusahaan3.jpeg",
  "/Image/perusahaan4.jpeg",
  "/Image/perusahaan5.jpeg",
];

const features = [
  {
    icon: Shield,
    title: "Standar Keamanan Tinggi",
    desc: "Mengikuti standar keselamatan nasional dan internasional dalam pengelolaan gas industri.",
  },
  {
    icon: Truck,
    title: "Distribusi Luas",
    desc: "Jaringan distribusi yang mencakup seluruh wilayah Kalimantan Tengah dan sekitarnya.",
  },
  {
    icon: Award,
    title: "Kualitas Terjamin",
    desc: "Produk gas dengan tingkat kemurnian tinggi untuk berbagai aplikasi industri.",
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    desc: "Didukung oleh tenaga ahli yang berpengalaman di bidang gas industri dan medis.",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % companyImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + companyImages.length) % companyImages.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % companyImages.length);

  return (
    <section id="tentang" className="relative py-24 md:py-32 bg-[#F8F9FA] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4965]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDB813]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Slides */}
              {companyImages.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`Central Gas facility ${idx + 1}`}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentSlide === idx ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: currentSlide === idx ? 'relative' : 'absolute', inset: 0 }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 to-transparent" />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#0D1B2A]" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#0D1B2A]" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {companyImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-[#FDB813] w-6"
                      : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-xl shadow-xl p-6 border border-[#E0E1DD]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#FDB813] flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#0D1B2A]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-[#0D1B2A]">15+</p>
                  <p className="text-sm text-[#1B4965] font-body">Tahun Beroperasi</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#FDB813] font-heading font-semibold text-sm tracking-widest uppercase">
              Tentang Kami
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D1B2A] mt-4 leading-tight">
              Penyedia Gas Industri{" "}
              <span className="text-[#1B4965]">Terpercaya</span> di Kalimantan Tengah
            </h2>
            <p className="mt-6 text-[#1B4965]/80 font-body leading-relaxed text-base md:text-lg">
              Central Gas Sampit adalah perusahaan penyedia gas industri dan medis yang beroperasi di Sampit, Kalimantan Tengah. Kami menyediakan berbagai jenis gas industri termasuk Oksigen, Nitrogen, Argon, Asetilen, CO₂, serta gas medis untuk kebutuhan rumah sakit dan klinik.
            </p>
            <p className="mt-4 text-[#1B4965]/80 font-body leading-relaxed text-base md:text-lg">
              Dengan komitmen terhadap kualitas dan keselamatan, kami melayani berbagai sektor industri termasuk manufaktur, pertambangan, konstruksi, dan kesehatan di seluruh wilayah Kalimantan Tengah.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#1B4965]/10 flex items-center justify-center group-hover:bg-[#FDB813] transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-[#1B4965] group-hover:text-[#0D1B2A] transition-colors" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[#0D1B2A] text-sm">{f.title}</p>
                    <p className="text-[#1B4965]/70 text-sm font-body mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}