import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-t from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand (pakai logo dari /public/logo_brand.png) */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo_brand.png"
                alt="Wishboyke"
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Distributor Resmi Wish Herbal Care Dr Boyke Dian Nugraha.<br />
              100% Asli • BPOM • Halal • Terpercaya sejak 2015.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200">Menu</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/produk", label: "Produk" },
                { to: "/toko", label: "Toko" },
                { to: "/galeri", label: "Galeri" },
                { to: "/artikel", label: "Artikel" },
                { to: "/testimoni", label: "Testimoni" },
                { to: "/kontak", label: "Kontak" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

            {/* Kontak */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200">Hubungi Kami</h3>
              <div className="space-y-4 text-sm">
                <a
                  href="https://wa.me/628123229562?text=Halo%20WishBoyke%2C%20saya%20mau%20tanya%20promo%20hari%20ini%20%F0%9F%98%8A"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl group-hover:scale-110 transition">
                    <PhoneIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">WhatsApp</div>
                    <div className="text-green-600 dark:text-green-400">081 2322 9562</div>
                  </div>
                </a>

                <a href="mailto:rien_idego@yahoo.co.id" className="flex items-center gap-3 group">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl group-hover:scale-110 transition">
                    <EnvelopeIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">Email</div>
                    <div className="text-green-600 dark:text-green-400">rien_idego@yahoo.co.id</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/wishboykesurabaya/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/50 rounded-xl group-hover:scale-110 transition">
                    <CameraIcon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">Instagram</div>
                    <div className="text-pink-600 dark:text-pink-400">@wishboykesurabaya</div>
                  </div>
                </a>
              </div>
            </div>

          {/* Alamat + Mini Map */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200">Kunjungi Kami</h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPinIcon className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200">Jl. Ubi 4 No.29</p>
                <p className="text-neutral-600 dark:text-neutral-400">Jagir, Wonokromo, Surabaya</p>
                <a
                  href="https://maps.app.goo.gl/rLPLCkkN3NzkvJgV8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-green-600 dark:text-green-400 hover:underline text-xs font-medium"
                >
                  ➜ Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-5">
        <div className="container text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} <span className="font-semibold">WISH BOYKE SURABAYA</span> — 
          Distributor Resmi Dr Boyke. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
