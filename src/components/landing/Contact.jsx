import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    value: "+62812-5419-3878",
    sub: "Senin - Sabtu, 07.30 - Tutup",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@centralgassampit.com",
    sub: "Respon dalam 24 jam",
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: "Poros Perum Pandawa No.08 GAH, Mentawa Baru Hulu, Kec. Mentawa Baru Ketapang, Kabupaten Kotawaringin Timur, Kalimantan Tengah 74322",
    sub: "Kalimantan Tengah, Indonesia",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "07.30 - Tutup WIB",
    sub: "Pengiriman 24/7 (Pre-Order)",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B4965]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            Hubungi Kami
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#0D1B2A] mt-4 leading-tight">
            Siap <span className="text-[#1B4965]">Melayani</span> Anda
          </h2>
          <p className="mt-6 text-[#1B4965]/70 font-body text-lg leading-relaxed">
            Hubungi kami untuk informasi produk, penawaran harga, atau konsultasi kebutuhan gas industri Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-4 rounded-xl hover:bg-[#F8F9FA] transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1B4965]/10 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-[#1B4965]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#0D1B2A] text-sm">{info.title}</p>
                  <p className="text-[#1B4965] font-body text-sm font-medium mt-0.5">{info.value}</p>
                  <p className="text-[#1B4965]/50 font-body text-xs mt-0.5">{info.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <p className="font-heading font-bold text-green-800">Chat via WhatsApp</p>
              </div>
              <p className="text-green-700/70 text-sm font-body mb-4">Respon cepat untuk pertanyaan dan pemesanan.</p>
<a
                href="https://wa.me/6281254193878"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white font-heading font-semibold w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Sekarang
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#E0E1DD]/50 h-full">
              <h3 className="font-heading font-bold text-[#0D1B2A] text-xl mb-4">Lokasi Kami</h3>
              
              {/* Map iframe */}
              <div className="w-full h-[300px] rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JsINCg!5e0!3m2!1sid!2sid!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>



              {/* Open in Maps button */}
              <a
                href="https://maps.app.goo.gl/6jvk5qWkCnh5H1Pi9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 text-[#1B4965] font-body text-sm hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
