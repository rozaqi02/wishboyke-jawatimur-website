import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, User, ChevronDown, Store } from "lucide-react";

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
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isProductsActive =
    location.pathname.startsWith("/produk") ||
    location.pathname.startsWith("/toko");

  // Animasi singkat & smooth
  const SIDEBAR_IN = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18 };
  const SIDEBAR_OUT = { type: "tween", ease: "easeIn", duration: 0.14 };
  const OVERLAY_IN = { duration: 0.12 };
  const OVERLAY_OUT = { duration: 0.12 };
  const DD_IN = { duration: 0.14, ease: "easeOut" };
  const DD_OUT = { duration: 0.12, ease: "easeIn" }; // ← dipakai di exit

  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setProductOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

  const closeSidebar = () => {
    setOpen(false);
    setProductOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 dark:border-neutral-800/60 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
        <div className="container flex items-center justify-between h-[var(--header-h)]">
          <Link to="/" className="flex items-center">
            <img src="/logo_brand.png" alt="Wish Boyke Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/" label="Home" />

            {/* Produk (klik untuk toggle) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProductOpen((v) => !v)}
                onKeyDown={(e) => e.key === "Escape" && setProductOpen(false)}
                aria-haspopup="menu"
                aria-expanded={productOpen}
                className={`px-3 py-2 rounded-xl inline-flex items-center gap-1 transition text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300
                  ${isProductsActive
                    ? "bg-neutral-200 dark:bg-neutral-800"
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-900"}`}
              >
                Produk
                <ChevronDown size={16} className={`transition ${productOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    key="produk-dd"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0, transition: DD_IN }}
                    exit={{ opacity: 0, y: 6, transition: DD_OUT }}   // ← pakai DD_OUT
                    className="absolute left-0 mt-2 w-56 card p-2 z-50"
                    role="menu"
                  >
                    <NavLink
                      to="/produk"
                      onClick={() => setProductOpen(false)}
                      role="menuitem"
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg transition
                        ${isActive
                          ? "bg-neutral-200 dark:bg-neutral-800 text-green-800 dark:text-green-300"
                          : "text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}`
                      }
                    >
                      Semua Produk
                    </NavLink>
                    <NavLink
                      to="/toko"
                      onClick={() => setProductOpen(false)}
                      role="menuitem"
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg transition
                        ${isActive
                          ? "bg-neutral-200 dark:bg-neutral-800 text-green-800 dark:text-green-300"
                          : "text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}`
                      }
                    >
                      <span className="inline-flex items-center gap-2">
                        <Store size={16} /> Toko Wish Boyke
                      </span>
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/galeri" label="Galeri" />
            <NavItem to="/artikel" label="Artikel" />
            <NavItem to="/testimoni" label="Testimoni" />
            <NavItem to="/kontak" label="Kontak" />
          </nav>

          {/* Desktop controls */}
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
          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 dark:bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: OVERLAY_IN }}
              exit={{ opacity: 0, transition: OVERLAY_OUT }}
              onClick={closeSidebar}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-neutral-950 border-l border-neutral-200/70 dark:border-neutral-800/60 z-50 md:hidden flex flex-col pt-4 px-4 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0, transition: SIDEBAR_IN }}
              exit={{ x: "100%", transition: SIDEBAR_OUT }}
            >
              <button onClick={closeSidebar} className="self-end mb-4 p-1">
                <X size={20} className="text-neutral-500 dark:text-neutral-400" />
              </button>

              <nav className="flex flex-col gap-2">
                <NavItem to="/" label="Home" onClick={closeSidebar} />

                {/* Produk + submenu */}
                <button
                  className={`text-left py-2 rounded-xl inline-flex items-center justify-between transition
                    ${isProductsActive
                      ? "bg-neutral-200 dark:bg-neutral-800 text-green-800 dark:text-green-300"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-900 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"}`}
                  onClick={() => setProductOpen((v) => !v)}
                >
                  <span>Produk</span>
                  <ChevronDown size={16} className={`${productOpen ? "rotate-180" : ""} transition`} />
                </button>

                <AnimatePresence initial={false}>
                  {productOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: DD_IN }}
                      exit={{ height: 0, opacity: 0, transition: DD_OUT }}  // ← pakai DD_OUT
                      className="ml-2 overflow-hidden flex flex-col gap-1"
                    >
                      <NavLink
                        to="/produk"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                          `block py-2 rounded-lg transition
                          ${isActive
                            ? "bg-neutral-200 dark:bg-neutral-800 text-green-800 dark:text-green-300"
                            : "text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}`
                        }
                      >
                        • Semua Produk
                      </NavLink>
                      <NavLink
                        to="/toko"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                          `block py-2 rounded-lg transition
                          ${isActive
                            ? "bg-neutral-200 dark:bg-neutral-800 text-green-800 dark:text-green-300"
                            : "text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}`
                        }
                      >
                        • <Store size={16} className="inline ml-1" /> Toko Wish Boyke
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>

                <NavItem to="/galeri" label="Galeri" onClick={closeSidebar} />
                <NavItem to="/artikel" label="Artikel" onClick={closeSidebar} />
                <NavItem to="/testimoni" label="Testimoni" onClick={closeSidebar} />
                <NavItem to="/kontak" label="Kontak" onClick={closeSidebar} />

                <div className="flex flex-col gap-2 pt-4 mt-auto">
                  <button
                    onClick={() => {
                      toggle();
                      closeSidebar();
                    }}
                    className="w-full py-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition flex items-center justify-center"
                    aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <Link
                    to="/admin/login"
                    onClick={closeSidebar}
                    className="w-full py-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition flex items-center justify-center"
                    aria-label="Admin Login"
                  >
                    <User size={20} />
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
