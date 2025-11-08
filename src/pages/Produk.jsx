import React, { useState } from "react";
import { useProducts } from "../store/products";

export default function Produk() {
  const { addToCart } = useProducts(); // Keep addToCart from store, but use local products for now
  const [q, setQ] = useState("");

  // Hardcoded products from the provided list
  const products = [
    { id: 1, name: "Max Protect", price: 40000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Max+Protect" },
    { id: 2, name: "Wish Sportive", price: 300000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Sportive" },
    { id: 3, name: "Menoherbs", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Menoherbs" },
    { id: 4, name: "Premium Floral Extract", price: 32000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Premium+Floral+Extract" },
    { id: 5, name: "Facial Treatment Tonic", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Facial+Treatment+Tonic" },
    { id: 6, name: "Anti Stretch Mark", price: 72000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Anti+Stretch+Mark" },
    { id: 7, name: "Anti Aging Serum", price: 170000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Anti+Aging+Serum" },
    { id: 8, name: "Wish Erotic", price: 300000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Erotic" },
    { id: 9, name: "Femmislim", price: 200000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Femmislim" },
    { id: 10, name: "Deep Cleansing Shower", price: 40000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Deep+Cleansing+Shower" },
    { id: 11, name: "Terlindungi: Qyu Up", price: 498000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Terlindungi:+Qyu+Up" },
    { id: 12, name: "Lightening Emultion", price: 92000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Lightening+Emultion" },
    { id: 13, name: "Brightening Moisturizer", price: 85000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Brightening+Moisturizer" },
    { id: 14, name: "ProLQ Blue", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=ProLQ+Blue" },
    { id: 15, name: "Premium Breast Up Cream", price: 160000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Premium+Breast+Up+Cream" },
    { id: 16, name: "Whitening Serum", price: 170000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Whitening+Serum" },
    { id: 17, name: "Royal Kiraz", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Royal+Kiraz" },
    { id: 18, name: "Lemon Grass Soap / Sereh", price: 21000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Lemon+Grass+Soap+/+Sereh" },
    { id: 19, name: "Wish Sensual", price: 300000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Sensual" },
    { id: 20, name: "Wish Sexy", price: 300000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Sexy" },
    { id: 21, name: "Femi Herbs", price: 210000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Femi+Herbs" },
    { id: 22, name: "Sulfur Soap", price: 21000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Sulfur+Soap" },
    { id: 23, name: "Collagen Activator", price: 85000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Collagen+Activator" },
    { id: 24, name: "Premium Sanitary Napkin Day", price: 42000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Premium+Sanitary+Napkin+Day" },
    { id: 25, name: "Wish Cute", price: 300000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Cute" },
    { id: 26, name: "Femivit", price: 235000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Femivit" },
    { id: 27, name: "Honey Soap", price: 21000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Honey+Soap" },
    { id: 28, name: "Eye Refining", price: 60000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Eye+Refining" },
    { id: 29, name: "Premium Sanitary Napkin Night", price: 40000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Premium+Sanitary+Napkin+Night" },
    { id: 30, name: "Wish Cool", price: 300000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Wish+Cool" },
    { id: 31, name: "Femizome", price: 0, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Femizome" },
    { id: 32, name: "Vitamin Plus Body Lotion", price: 27000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Vitamin+Plus+Body+Lotion" },
    { id: 33, name: "Dr Boyke Wish PROLQ GRENG", price: 200000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Dr+Boyke+Wish+PROLQ+GRENG" },
    { id: 34, name: "Dr Boyke Wish Siruzlim", price: 320000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=Dr+Boyke+Wish+Siruzlim" },
    { id: 35, name: "ProLQ GLEKK", price: 350000, description: "Produk kesehatan dari Dr Boyke Dian Nugraha", image: "https://via.placeholder.com/600x400?text=ProLQ+GLEKK" },
  ];

  const filtered = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">Produk</h1>
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