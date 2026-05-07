import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Beaker, Flame, Wind, Heart, Zap, Flame as FlameIcon, X, ChevronRight } from "lucide-react";

const gasGroups = [
  {
    id: "gas-udara",
    name: "Gas Udara",
    icon: Wind,
    category: "Gas Udara",
    gases: [
      {
        id: "o2",
        name: "Oksigen (O₂)",
        symbol: "O₂",
        icon: Wind,
        image: "/images/oksigen-medis.jpeg",
        description: "Gas oksigen dengan kemurnian tinggi untuk keperluan industri, medis, dan pengelasan.",
        applications: ["Pengelasan & Pemotongan", "Pengolahan Air"],
        color: "#3B82F6",
      },
      {
        id: "n2",
        name: "Nitrogen (N₂)",
        symbol: "N₂",
        icon: Atom,
        image: "/images/N2O.jpeg",
        description: "Nitrogen cair dan gas untuk proses pembekuan, pengawetan, dan inerting industri.",
        applications: ["Pembekuan Makanan", "Pengemasan", "Industri Elektronik", "Pertambangan"],
        color: "#6366F1",
      },
      {
        id: "ar",
        name: "Argon (Ar)",
        symbol: "Ar",
        icon: Beaker,
        image: "/images/Argon.jpeg",
        description: "Gas argon untuk pengelasan TIG/MIG dan berbagai proses metalurgi.",
        applications: ["Pengelasan TIG/MIG", "Metalurgi", "Industri Kaca", "Laboratorium"],
        color: "#8B5CF6",
      },
    ],
  },
  {
    id: "gas-sintetis",
    name: "Gas Sintetis",
    icon: Flame,
    category: "Gas Sintetis",
    gases: [
      {
        id: "co2",
        name: "Karbon Dioksida (CO₂)",
        symbol: "CO₂",
        icon: Flame,
        image: "/images/karbondioksida.jpeg",
        description: "CO₂ untuk industri makanan & minuman, pengelasan, dan proses kimia.",
        applications: ["Karbonasi Minuman", "Pengelasan MIG", "Pengawetan Makanan", "Pemadam Kebakaran"],
        color: "#EC4899",
      },
    ],
  },
  {
    id: "gas-medis",
    name: "Gas Medis",
    icon: Heart,
    category: "Gas Medis",
    gases: [
      {
        id: "medis",
        name: "Gas Medis (Cylinder)",
        symbol: "Med",
        icon: Heart,
image: "/images/oksigen-medis.jpeg",
        description: "Pasokan gas medis dalam cylinder untuk rumah sakit, klinik, dan fasilitas kesehatan.",
        applications: ["Terapi Oksigen", "Anestesi", "Ventilator", "Peralatan Medis"],
        color: "#EF4444",
      },
      {
        id: "medis2",
        name: "Gas Medis (Portable)",
        symbol: "Med",
        icon: Heart,
        image: "/images/Oksigen-medis-kecil.jpeg",
        description: "Gas medis portable untuk kebutuhan darurat dan transportasi pasien.",
        applications: ["Ambulans", "P3K", "Darurat Medis", "Home Care"],
        color: "#EF4444",
      },
    ],
  },
  {
    id: "gas-bahan-bakar",
    name: "Gas Bahan Bakar",
    icon: Zap,
    category: "Gas Bahan Bakar",
    gases: [
      {
        id: "acetylen",
        name: "Asetilen (C₂H₂)",
        symbol: "C₂H₂",
        icon: Zap,
        image: "/images/Acetylene.jpeg",
        description: "Asetilen untuk pengelasan dan pemotongan logam dengan nyala api suhu tinggi.",
        applications: ["Pengelasan Oxy-Acetylene", "Pemotongan Logam", "Brazing", "Pemanasan"],
        color: "#F59E0B",
      },
      {
        id: "lpg",
        name: "LPG",
        symbol: "LPG",
        icon: FlameIcon,
        image: "/images/LPG.jpeg",
        description: "Liquefied Petroleum Gas untuk bahan bakar rumah tangga dan industri.",
        applications: ["Bahan Bakar Rumah Tangga", "Industri", "Pertanian", "Restoran"],
        color: "#F97316",
      },
    ],
  },
];

// Modal for Full Image Display
function GasModal({ gas, isOpen, onClose }) {
  if (!isOpen || !gas) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="fixed inset-0 bg-black/95" />
        
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative py-8 px-4" onClick={(e) => e.stopPropagation()}>
          <div className="max-w-6xl mx-auto">
            <img src={gas.image} alt={gas.name} className="w-full h-auto" style={{ maxWidth: '100%' }} />

            <div className="mt-8 p-6 bg-[#0D1B2A] rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${gas.color}20` }}>
                  <gas.icon className="w-7 h-7" style={{ color: gas.color }} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">{gas.name}</h3>
                  <p className="text-[#FDB813] font-body text-sm">{gas.category || "Gas Industri"}</p>
                </div>
              </div>

              <p className="text-[#E0E1DD]/80 font-body text-lg leading-relaxed mb-6">
                {gas.description}
              </p>

              <div className="mb-6">
                <h4 className="text-[#FDB813] font-heading font-semibold text-sm uppercase tracking-wider mb-3">
                  Aplikasi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {gas.applications.map((app) => (
                    <span key={app} className="px-4 py-2 rounded-full bg-white/10 text-[#E0E1DD] font-body text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#kontak" onClick={onClose} className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDB813] text-[#0D1B2A] rounded-xl font-heading font-semibold text-lg hover:bg-[#FDB813]/90 transition-colors">
                Pesan Sekarang
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GasCatalog() {
  const [activeGroup, setActiveGroup] = useState("gas-udara");
  const [selectedGas, setSelectedGas] = useState(null);
  const [hoveredGas, setHoveredGas] = useState(null);

  return (
    <section id="produk" className="relative py-24 md:py-32 bg-[#0D1B2A] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(253,184,19,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(253,184,19,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-[#FDB813] font-heading font-semibold text-sm tracking-widest uppercase">Produk Kami</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 leading-tight">
            Katalog <span className="text-[#FDB813]">Gas Industri</span>
          </h2>
          <p className="mt-6 text-[#E0E1DD]/70 font-body text-lg leading-relaxed">Klik pada produk untuk melihat gambar lengkap.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {gasGroups.map((group) => (
            <button key={group.id} onClick={() => setActiveGroup(group.id)} className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-300 ${
              activeGroup === group.id ? "bg-[#FDB813] text-[#0D1B2A] shadow-lg shadow-[#FDB813]/25" : "bg-white/5 text-[#E0E1DD] hover:bg-white/10 border border-white/10"
            }`}>
              <group.icon className="w-4 h-4" />
              {group.name}
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeGroup === group.id ? "bg-[#0D1B2A]/20" : "bg-white/10"}`}>
                {group.gases.length}
              </span>
            </button>
          ))}
        </div>

        {gasGroups.map((group) => (
          <AnimatePresence key={group.id}>
            {activeGroup === group.id && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.gases.map((gas, i) => (
                  <motion.div 
                    key={gas.id} 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.1, duration: 0.5 }} 
                    onClick={() => setSelectedGas(gas)}
                    onMouseEnter={() => setHoveredGas(gas.id)} 
                    onMouseLeave={() => setHoveredGas(null)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-[#FDB813]/50 transition-all"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img src={gas.image} alt={gas.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                        <span className="text-white font-heading font-bold text-sm">{gas.symbol}</span>
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#FDB813]/20 backdrop-blur-md border border-[#FDB813]/20">
                        <span className="text-[#FDB813] font-body text-xs font-medium">{group.category}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-[#FDB813]/20 backdrop-blur-sm flex items-center justify-center">
                            <gas.icon className="w-5 h-5 text-[#FDB813]" />
                          </div>
                          <h3 className="font-heading font-bold text-white text-lg">{gas.name}</h3>
                        </div>
                        <p className="text-[#E0E1DD]/70 font-body text-sm leading-relaxed line-clamp-2">{gas.description}</p>
                        <AnimatePresence>
                          {hoveredGas === gas.id && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-[#FDB813] text-xs font-heading font-semibold uppercase tracking-wider mb-2">Aplikasi</p>
                                <div className="flex flex-wrap gap-2">
                                  {gas.applications.map((app) => (
                                    <span key={app} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-[#E0E1DD] font-body">{app}</span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      <GasModal gas={selectedGas} isOpen={!!selectedGas} onClose={() => setSelectedGas(null)} />
    </section>
  );
}
