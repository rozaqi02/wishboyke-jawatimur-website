import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.2 },
});

export default function Kontak() {
  return (
    <div className="space-y-12">
      {/* Hero-like Header */}
      <motion.section
        className="card p-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-neutral-900/50 dark:to-neutral-800/50 rounded-3xl"
        {...fadeUp(0)}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Kontak WishBoyke – Tanya Promo
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          WishboykeJawatimur.com Kami menyediakan Produk -Produk Terbaik dan Resmi Wish Herbal Care Dokter Boyke Dian Nugraha. Produk Wish Boyke & Co banyak digunakan untuk Kesehatan Pria dan Wanita. Produk Wish Terbagi Enam Kategori.
        </p>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        <motion.div className="card p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300" {...fadeUp(0.1)}>
          <div className="w-16 h-16 mb-4 p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center">
            <PhoneIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="font-bold text-xl mb-2">Whatsapp/Telepon</h3>
          <a href="https://wa.me/628123229562" className="text-green-600 dark:text-green-400 font-semibold hover:underline" target="_blank" rel="noreferrer">
            081 2322 9562
          </a>
        </motion.div>

        <motion.div className="card p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300" {...fadeUp(0.2)}>
          <div className="w-16 h-16 mb-4 p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center">
            <EnvelopeIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="font-bold text-xl mb-2">Email</h3>
          <a href="mailto:rien_idego@yahoo.co.id" className="text-green-600 dark:text-green-400 font-semibold hover:underline">
            rien_idego@yahoo.co.id
          </a>
        </motion.div>

        <motion.div className="card p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300" {...fadeUp(0.3)}>
          <div className="w-16 h-16 mb-4 p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center">
            <MapPinIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="font-bold text-xl mb-2">Alamat</h3>
          <p className="text-neutral-600 dark:text-neutral-300">Jl. Ubi 4 No.29 Surabaya</p>
        </motion.div>
      </section>

      {/* Google Maps Embed */}
      <motion.section className="card p-4 md:p-6 rounded-3xl overflow-hidden" {...fadeUp(0.4)}>
        <h2 className="text-2xl font-bold mb-4 text-center">Lokasi Kami</h2>
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.678!2d112.75083!3d-7.24917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb0a00000000%3A0x0!2sJl.+Ubi+IV+No.29%2C+Jagir%2C+Wonokromo%2C+Surabaya%2C+Jawa+Timur%2C+Indonesia!5e0!3m2!1sen!2sid!4v1700000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
        <p className="mt-4 text-center text-sm opacity-80">
          <a href="https://maps.app.goo.gl/rLPLCkkN3NzkvJgV8" target="_blank" rel="noreferrer" className="text-green-600 dark:text-green-400 hover:underline">
            Buka di Google Maps
          </a>
        </p>
      </motion.section>
    </div>
  );
}