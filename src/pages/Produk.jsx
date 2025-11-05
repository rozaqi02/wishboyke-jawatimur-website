import React, { useState } from "react";
import { useProducts } from "../store/products";

export default function Produk() {
  const { products, addToCart } = useProducts();
  const [q, setQ] = useState("");
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
            <p className="opacity-80 text-sm flex-1">{p.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">Rp {p.price.toLocaleString("id-ID")}</span>
              <button onClick={()=>addToCart(p)} className="btn btn-primary">Beli</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
