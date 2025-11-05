import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.2 },
});

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="hero p-0 md:p-0">
        {/* Background media */}
        <div
          className="hero__media"
          style={{
            backgroundImage:
              "url('/hero-wishboyke.jpg'), linear-gradient(135deg,#0ea5a5,#10b981)",
          }}
        />
        <div className="hero__overlay" />

        {/* Content */}
        <div className="hero__content px-6 md:px-12 py-20 md:py-28">
          <motion.h1
            className="max-w-4xl text-3xl md:text-6xl font-extrabold leading-tight text-white drop-shadow"
            {...fadeUp(0)}
          >
            Distributor Resmi <span className="text-green-300">Wishboyke</span>
          </motion.h1>

          <motion.p
            className="max-w-3xl mt-4 text-lg md:text-xl text-neutral-100/90"
            {...fadeUp(0.1)}
          >
            Kami menjual Produk milik Dr Boyke Dian Nugraha yang dijamin Asli 100%, Ijin BPOM, dan Halal.
          </motion.p>

          <motion.div className="mt-6 flex flex-wrap gap-3" {...fadeUp(0.2)}>
            <Link to="/produk" className="btn btn-primary">Lihat Produk</Link>
            <Link to="/kontak" className="btn btn-outline bg-white/10 !text-white border-white/30 hover:bg-white/20">
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Produk Paling Laris */}
      <section className="grid md:grid-cols-2 gap-4">
        <motion.div className="card p-6" {...fadeUp(0)}>
          <h3 className="font-bold text-2xl">Produk Paling Laris</h3>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Pro LQ — Herbal Vitalitas Pria (Ereksi Tahan Lama)</li>
            <li>Femizome — Vagina jadi Kencang</li>
            <li>Femmilove — Hilangkan gatal & keputihan</li>
            <li>Menoherbs — Menunda Menopause</li>
            <li>Majakani — Merapatkan Vagina, keset, bebas jamur</li>
          </ul>
        </motion.div>

        <motion.div className="card p-6" {...fadeUp(0.1)}>
          <h3 className="font-bold text-2xl">Mau jadi reseller?</h3>
          <p className="mt-2">
            Dapatkan Discount Besar 10%–30%.*{" "}
            <a className="underline" href="https://www.wishboykejawatimur.com" target="_blank" rel="noreferrer">
              Info Reseller
            </a>
          </p>
          <ul className="mt-3 space-y-1">
            <li>Belanja 1–2 jt: 10%</li>
            <li>Belanja 2–6 jt: 20%</li>
            <li>Belanja 6–10 jt: 25%</li>
            <li>Belanja 10 jt+: 30%</li>
          </ul>
          <div className="mt-4">
            <a href="https://wa.me/6280000000000" className="btn btn-primary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
          <p className="text-xs opacity-70 mt-2">*S&K berlaku</p>
        </motion.div>
      </section>

      {/* Mengapa Kami */}
      <section className="grid md:grid-cols-3 gap-4">
        {[
          { t: "Produk Original 100%", b: "100% Asli & berijin BPOM. Order diproses cepat." },
          { t: "Distributor Resmi WISH", b: "Sesuai peraturan PT Cahyadi Mulia Nugraha." },
          { t: "Harga Termurah", b: "Termurah di Jawa Timur, pelanggan setia terpercaya." },
        ].map((c, i) => (
          <motion.div key={i} className="card p-6" {...fadeUp(0.05 * i)}>
            <h3 className="font-bold text-xl">{c.t}</h3>
            <p className="mt-2 opacity-90">{c.b}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimoni */}
      <motion.section className="card p-6" {...fadeUp(0)}>
        <h3 className="font-bold text-2xl">Testimoni</h3>
        <p className="mt-2 opacity-80">Bebas — nanti diisi testimoni pelanggan.</p>
      </motion.section>
    </div>
  );
}
