import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu, X, LogIn, ChevronDown, Store } from "lucide-react";

const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition ${
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
        <Link to="/" className="font-extrabold tracking-wide text-lg">
          WISH <span className="text-green-600">BOYKE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/" label="Home" />

          {/* Produk (dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              onClick={() => setProductOpen((v) => !v)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 inline-flex items-center gap-1"
            >
              Produk <ChevronDown size={16} />
            </button>

            {productOpen && (
              <div className="absolute left-0 mt-2 w-56 card p-2">
                <NavLink
                  to="/produk"
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Semua Produk
                </NavLink>
                <NavLink
                  to="/toko"
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <span className="inline-flex items-center gap-2">
                    <Store size={16} /> Toko Wish Boyke
                  </span>
                </NavLink>
              </div>
            )}
          </div>

          <NavItem to="/galeri" label="Galeri" />
          <NavItem to="/artiker" label="Artiker" />
          <NavItem to="/testimoni" label="Testimoni" />
          <NavItem to="/kontak" label="Kontak" />
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button onClick={toggle} className="btn btn-outline">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <Link to="/admin/login" className="btn btn-primary">
            <LogIn size={18} /> Login Admin
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

            {/* Produk + submenu */}
            <button
              className="text-left px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 inline-flex items-center justify-between"
              onClick={() => setProductOpen((v) => !v)}
            >
              <span>Produk</span>
              <ChevronDown size={16} className={`${productOpen ? "rotate-180" : ""} transition`} />
            </button>
            {productOpen && (
              <div className="ml-2 flex flex-col gap-1">
                <NavItem to="/produk" label="• Semua Produk" onClick={() => setOpen(false)} />
                <NavItem to="/toko" label="• Toko Wish Boyke" onClick={() => setOpen(false)} />
              </div>
            )}

            <NavItem to="/galeri" label="Galeri" onClick={() => setOpen(false)} />
            <NavItem to="/artiker" label="Artiker" onClick={() => setOpen(false)} />
            <NavItem to="/testimoni" label="Testimoni" onClick={() => setOpen(false)} />
            <NavItem to="/kontak" label="Kontak" onClick={() => setOpen(false)} />

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  toggle();
                  setOpen(false);
                }}
                className="btn btn-outline w-full"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              <Link to="/admin/login" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                <LogIn size={18} /> Login Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
