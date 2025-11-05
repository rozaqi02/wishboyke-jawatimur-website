import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Toko from "./pages/TokoWishBoyke";
import Galeri from "./pages/Galeri";
import Artikel from "./pages/Artikel";
import Testimoni from "./pages/Testimoni";
import Kontak from "./pages/Kontak";
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Kustomisasi from "./pages/admin/Kustomisasi";
import Orderan from "./pages/admin/Orderan";

function Protected({ children }) {
  const isAuthed = !!localStorage.getItem("admin_token");
  return isAuthed ? children : <Navigate to="/admin/login" />;
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/produk" element={<Page><Produk /></Page>} />
            <Route path="/toko" element={<Page><Toko /></Page>} />
            <Route path="/galeri" element={<Page><Galeri /></Page>} />
            <Route path="/artikel" element={<Page><Artikel /></Page>} />
            <Route path="/testimoni" element={<Page><Testimoni /></Page>} />
            <Route path="/kontak" element={<Page><Kontak /></Page>} />

            <Route path="/admin/login" element={<Page><AdminLogin /></Page>} />
            <Route path="/admin" element={<Protected><Page><Dashboard /></Page></Protected>} />
            <Route path="/admin/dashboard" element={<Protected><Page><Dashboard /></Page></Protected>} />
            <Route path="/admin/kustomisasi" element={<Protected><Page><Kustomisasi /></Page></Protected>} />
            <Route path="/admin/orderan" element={<Protected><Page><Orderan /></Page></Protected>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
