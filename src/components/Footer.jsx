import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200/70 dark:border-neutral-800/60">
      <div className="container py-8 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-lg">
            WISH <span className="text-green-600">BOYKE</span>
          </div>
          <p className="mt-2 text-sm opacity-80">
            Distributor Resmi. Produk 100% Asli, BPOM & Halal.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-semibold mb-2">Menu</div>
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">Home</Link>
            <Link to="/produk">Produk</Link>
            <Link to="/toko">Toko Wish Boyke</Link>
            <Link to="/galeri">Galeri</Link>
            <Link to="/artiker">Artiker</Link>
            <Link to="/testimoni">Testimoni</Link>
            <Link to="/kontak">Kontak</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold mb-2">Kontak</div>
          <p>WhatsApp: <a href="https://wa.me/6280000000000" target="_blank" rel="noreferrer">+62 800-0000-000</a></p>
          <p>Email: <a href="mailto:info@wishboyke.com">info@wishboyke.com</a></p>
        </div>
      </div>
      <div className="border-t border-neutral-200/70 dark:border-neutral-800/60 py-4">
        <div className="container text-sm opacity-80">
          © {new Date().getFullYear()} WISH BOYKE — Distributor Resmi. Produk asli 100% BPOM & Halal.
        </div>
      </div>
    </footer>
  );
}
