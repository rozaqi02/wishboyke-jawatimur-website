import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu, X, User, ChevronDown, Store } from "lucide-react"; // Tambah User

const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 ${
        isActive
          ? "bg-neutral-200 dark:bg-neutral-800"
          : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
      }`
    }
  >
    {label}
  </NavLink>
);

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/60 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
      <div className="container flex items-center justify-between h-[var(--header-h)]">
        {/* Brand logo replacement */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo_brand.png" 
            alt="Wish Boyke Logo" 
            className="h-8 w-auto" 
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/" label="Home" />

          {/* Produk (dropdown) - Fixed dengan z-index dan pointer-events */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              onClick={() => setProductOpen((v) => !v)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 inline-flex items-center gap-1 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition"
            >
              Produk <ChevronDown size={16} />
            </button>

            {productOpen && (
              <div 
                className="absolute left-0 mt-2 w-56 card p-2 z-50 pointer-events-auto" // Tambah z-50 dan pointer-events-auto
                onMouseEnter={() => setProductOpen(true)} // Extra layer untuk keep open saat hover dropdown
                onMouseLeave={() => setProductOpen(false)}
              >
                <NavLink
                  to="/produk"
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                  onClick={() => setProductOpen(false)} // Close on click
                >
                  Semua Produk
                </NavLink>
                <NavLink
                  to="/toko"
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                  onClick={() => setProductOpen(false)} // Close on click
                >
                  <span className="inline-flex items-center gap-2">
                    <Store size={16} /> Toko Wish Boyke
                  </span>
                </NavLink>
              </div>
            )}
          </div>

          <NavItem to="/galeri" label="Galeri" />
          <NavItem to="/artikel" label="Artikel" />
          <NavItem to="/testimoni" label="Testimoni" />
          <NavItem to="/kontak" label="Kontak" />
        </nav>

        {/* Desktop: Toggle dan Admin ikon hitam-putih, admin hanya line icon tanpa square/border */}
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={toggle} 
            className="p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
            aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link 
            to="/admin/login" 
            className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition"
            aria-label="Admin Login"
          >
            <User size={20} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden btn btn-outline" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-neutral-200/70 dark:border-neutral-800/60 px-4 pb-4">
          <div className="flex flex-col pt-3 gap-2">
            <NavItem to="/" label="Home" onClick={() => setOpen(false)} />

            {/* Produk + submenu - Fixed untuk mobile */}
            <button
              className="text-left px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 inline-flex items-center justify-between text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition"
              onClick={() => setProductOpen((v) => !v)}
            >
              <span>Produk</span>
              <ChevronDown size={16} className={`${productOpen ? "rotate-180" : ""} transition`} />
            </button>
            {productOpen && (
              <div className="ml-2 flex flex-col gap-1 pointer-events-auto z-10"> {/* Tambah pointer-events dan z-index untuk mobile */}
                <NavLink
                  to="/produk"
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                  onClick={() => { setProductOpen(false); setOpen(false); }}
                >
                  • Semua Produk
                </NavLink>
                <NavLink
                  to="/toko"
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                  onClick={() => { setProductOpen(false); setOpen(false); }}
                >
                  • <Store size={16} className="inline ml-1" /> Toko Wish Boyke
                </NavLink>
              </div>
            )}

            <NavItem to="/galeri" label="Galeri" onClick={() => setOpen(false)} />
            <NavItem to="/artikel" label="Artikel" onClick={() => setOpen(false)} />
            <NavItem to="/testimoni" label="Testimoni" onClick={() => setOpen(false)} />
            <NavItem to="/kontak" label="Kontak" onClick={() => setOpen(false)} />

            {/* Mobile: Toggle dan Admin ikon hitam-putih, admin hanya line icon tanpa square/border */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  toggle();
                  setOpen(false);
                }}
                className="w-full p-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition flex items-center justify-center"
                aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link 
                to="/admin/login" 
                onClick={() => setOpen(false)} 
                className="w-full p-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition flex items-center justify-center"
                aria-label="Admin Login"
              >
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}