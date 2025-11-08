import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ShoppingBagIcon, 
  StarIcon,
  UsersIcon,
  ClockIcon,
  ChatBubbleLeftIcon
} from "@heroicons/react/24/outline"; // npm install @heroicons/react

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.2 },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const topProducts = [
    { name: "Pro LQ — Herbal Vitalitas Pria", desc: "Ereksi Tahan Lama", icon: HeartIcon },
    { name: "Femizome", desc: "Vagina jadi Kencang", icon: ShieldCheckIcon },
    { name: "Femmilove", desc: "Hilangkan gatal & keputihan", icon: HeartIcon },
    { name: "Menoherbs", desc: "Menunda Menopause", icon: ClockIcon },
    { name: "Majakani", desc: "Merapatkan Vagina, keset, bebas jamur", icon: ShieldCheckIcon },
  ];

  const resellerTiers = [
    { min: "1–2 jt", discount: "10%", color: "from-blue-500 to-blue-600" },
    { min: "2–6 jt", discount: "20%", color: "from-green-500 to-green-600" },
    { min: "6–10 jt", discount: "25%", color: "from-yellow-500 to-yellow-600" },
    { min: "10 jt+", discount: "30%", color: "from-red-500 to-red-600" },
  ];

  const whyUs = [
    { title: "Produk Original 100%", body: "100% Asli & berijin BPOM. Order diproses cepat.", icon: ShieldCheckIcon },
    { title: "Distributor Resmi WISH", body: "Sesuai peraturan PT Cahyadi Mulia Nugraha.", icon: UsersIcon },
    { title: "Harga Termurah", body: "Termurah di Jawa Timur, pelanggan setia terpercaya.", icon: ShoppingBagIcon },
  ];

  const testimonials = [
    { text: "Produknya asli dan hasilnya luar biasa! Cepat sampai dan kemasan rapi.", author: "Siti, Surabaya", rating: 5 },
    { text: "Reseller di sini untung banget, diskonnya bikin bisnis lancar.", author: "Andi, Malang", rating: 5 },
    { text: "Pelayanan ramah, konsultasi gratis via WA. Recommended!", author: "Rina, Jember", rating: 5 },
  ];

  return (
    <div className="space-y-16">
      {/* HERO SECTION */}
      <section className="hero relative overflow-hidden rounded-3xl md:rounded-[3rem]">
        <div
          className="hero__media absolute inset-0"
          style={{
            backgroundImage:
              "url('/hero-wishboyke.jpg'), linear-gradient(135deg, #0ea5a5 0%, #10b981 50%, #f59e0b 100%)",
          }}
        />
        <div className="hero__overlay absolute inset-0" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="hero__content relative z-10 px-6 md:px-12 py-20 md:py-32">
          <motion.div {...fadeUp(0)} className="max-w-5xl">
            <motion.h1
              className="text-4xl md:text-7xl font-black leading-tight text-white drop-shadow-2xl mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Distributor Resmi <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">Wishboyke</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-neutral-100/95 mb-8 max-w-3xl leading-relaxed"
              {...fadeUp(0.2)}
            >
              Kami menjual Produk milik Dr Boyke Dian Nugraha yang dijamin Asli 100%, Ijin BPOM, dan Halal. Kesehatan intim Anda adalah prioritas kami.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" {...fadeUp(0.4)}>
              <Link to="/produk" className="btn btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <ShoppingBagIcon className="w-5 h-5" /> Lihat Produk
              </Link>
              <Link 
                to="/kontak" 
                className="btn btn-outline px-8 py-4 text-lg font-semibold border-2 bg-white/10 backdrop-blur-sm !text-white hover:bg-white/20 hover:border-white/50"
              >
                <ChatBubbleLeftIcon className="w-5 h-5" /> Hubungi Kami
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TOP PRODUCTS */}
      <section className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
          {...fadeUp(0)}
        >
          Produk Paling Laris
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topProducts.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={i}
                className="card p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50 dark:from-neutral-900 dark:to-neutral-800"
                variants={fadeUp(0.1 * i)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl">
                    <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-bold text-xl">{product.name}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">{product.desc}</p>
                <Link to="/produk" className="text-green-600 dark:text-green-400 font-semibold hover:underline flex items-center gap-1">
                  Lihat Detail <StarIcon className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* RESELLER SECTION */}
      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div className="card p-8" {...fadeUp(0)}>
            <div className="flex items-center gap-3 mb-6">
              <UsersIcon className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold">Mau jadi reseller?</h3>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              Dapatkan Discount Besar 10%–30%.*{" "}
              <a 
                className="underline hover:no-underline text-green-600 dark:text-green-400" 
                href="https://www.wishboykejawatimur.com" 
                target="_blank" 
                rel="noreferrer"
              >
                Info Reseller
              </a>
            </p>
            <div className="space-y-4">
              <a href="https://wa.me/6280000000000" className="btn btn-primary px-6 py-3 w-full md:w-auto" target="_blank" rel="noreferrer">
                <ChatBubbleLeftIcon className="w-5 h-5" /> WhatsApp
              </a>
              <p className="text-xs opacity-70 text-center md:text-left">*S&K berlaku</p>
            </div>
          </motion.div>

          <motion.div className="space-y-4" {...fadeUp(0.2)}>
            {resellerTiers.map((tier, i) => (
              <motion.div
                key={i}
                className="card p-6 bg-gradient-to-r relative overflow-hidden"
                style={{ backgroundImage: `linear-gradient(to right, ${tier.color})` }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">{tier.min}</span>
                  <span className="text-2xl font-bold text-white">{tier.discount} OFF</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          {...fadeUp(0)}
        >
          Mengapa Pilih Kami?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} className="card p-6 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300" {...fadeUp(0.1 * i)}>
                <div className="w-16 h-16 mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          {...fadeUp(0)}
        >
          Testimoni Pelanggan
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i} 
              className="card p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative" 
              {...fadeUp(0.1 * i)}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-green-600 dark:text-green-400">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        className="card p-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-neutral-900/50 dark:to-neutral-800/50"
        {...fadeUp(0)}
      >
        <h3 className="text-2xl font-bold mb-4">Siap Tingkatkan Kesehatan Anda?</h3>
        <Link to="/produk" className="btn btn-primary px-8 py-3 text-lg">
          Mulai Belanja Sekarang
        </Link>
      </motion.section>
    </div>
  );
}
