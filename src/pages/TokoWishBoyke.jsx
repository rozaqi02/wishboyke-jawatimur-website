import React, { useState } from "react";
import { useProducts } from "../store/products";

export default function TokoWishBoyke() {
  const { addToCart } = useProducts(); // Keep addToCart from store, but use local products for now
  const [q, setQ] = useState("");

  // Hardcoded products from the provided list
  const products = [
    { id: 1, name: "Dr Boyke Wish PROLQ GRENG", price: 200000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Dr+Boyke+Wish+PROLQ+GRENG" },
    { id: 2, name: "SIRUZLIM OBAT Pelangsing Badan alami cepat berkhasiat", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=SIRUZLIM+OBAT+Pelangsing+Badan+alami+cepat+berkhasiat" },
    { id: 3, name: "Dr Boyke Wish Siruzlim", price: 320000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Dr+Boyke+Wish+Siruzlim" },
    { id: 4, name: "ProLQ GLEKK Produk terbaru dari Wish Boyke Surabaya", price: 350000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=ProLQ+GLEKK+Produk+terbaru+dari+Wish+Boyke+Surabaya" },
    { id: 5, name: "parfum cheerful wishboyke surabaya medan luar pulau", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=parfum+cheerful+wishboyke+surabaya+medan+luar+pulau" },
    { id: 6, name: "royal kiraz murah harga termurah", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=royal+kiraz+murah+harga+termurah" },
    { id: 7, name: "Facial Treatment Tonic Water Dr Boyke Surabaya", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Facial+Treatment+Tonic+Water+Dr+Boyke+Surabaya" },
    { id: 8, name: "Facial Treatment Cleanser Wish Dr Boyke Surabaya", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Facial+Treatment+Cleanser+Wish+Dr+Boyke+Surabaya" },
    { id: 9, name: "Acne Cream Produk Wish Dokter Boyke Surbaya", price: 40000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Acne+Cream+Produk+Wish+Dokter+Boyke+Surbaya" },
    { id: 10, name: "Eye Refining Cream Produk Wish Dr Boyke Surabaya", price: 60000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Eye+Refining+Cream+Produk+Wish+Dr+Boyke+Surabaya" },
    { id: 11, name: "Collagen Activator Wish Skin Clinic Dr Boyke Surabaya", price: 85000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Collagen+Activator+Wish+Skin+Clinic+Dr+Boyke+Surabaya" },
    { id: 12, name: "Wish Serum Vitamin C Dokter Boyke Jatim", price: 120000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Serum+Vitamin+C+Dokter+Boyke+Jatim" },
    { id: 13, name: "Whitening Serum Wish Dokter Boyke Surabaya", price: 170000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Whitening+Serum+Wish+Dokter+Boyke+Surabaya" },
    { id: 14, name: "Deep Cleansing Shower Gel Wish Dr. Boyke Surabaya", price: 40000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Deep+Cleansing+Shower+Gel+Wish+Dr.+Boyke+Surabaya" },
    { id: 15, name: "Premium Floral Extract Wish Dr Boyke Surabaya", price: 32000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Premium+Floral+Extract+Wish+Dr+Boyke+Surabaya" },
    { id: 16, name: "Majakani Extract Intimate Wish Dr Boyke Sidoarjo", price: 21000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Majakani+Extract+Intimate+Wish+Dr+Boyke+Sidoarjo" },
    { id: 17, name: "Premium Wish Majakani Extract Dr Boyke Surabaya", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Premium+Wish+Majakani+Extract+Dr+Boyke+Surabaya" },
    { id: 18, name: "Transparent Honey Soap Dokter Boyke Malang", price: 21000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Transparent+Honey+Soap+Dokter+Boyke+Malang" },
    { id: 19, name: "Transparent Sulfur Soap Wish Dokter Boyke Surabaya", price: 21000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Transparent+Sulfur+Soap+Wish+Dokter+Boyke+Surabaya" },
    { id: 20, name: "Bust Cream Wish Dokter Boyke surabaya", price: 100000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Bust+Cream+Wish+Dokter+Boyke+surabaya" },
    { id: 21, name: "Wish Premium Breast Up Cream Dr Boyke Surabaya", price: 160000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Premium+Breast+Up+Cream+Dr+Boyke+Surabaya" },
  ];

  const filtered = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">Toko Wish Boyke</h1>
      <input className="w-full md:w-1/2 border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="Cari produk..." value={q} onChange={e=>setQ(e.target.value)} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(p => (
          <div key={p.id} className="card p-4 flex flex-col">
            <img src={p.image || "https://via.placeholder.com/600x400?text=Produk"} alt={p.name} className="rounded-xl aspect-[4/3] object-cover" />
            <h3 className="mt-3 font-bold">{p.name}</h3>
            <p className="opacity-80 text-sm flex-1">{p.description || "Deskripsi tidak tersedia"}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">{p.price ? `Rp ${p.price.toLocaleString("id-ID")}` : "Hubungi Kami"}</span>
              <button onClick={()=>addToCart(p)} className="btn btn-primary">Beli</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}