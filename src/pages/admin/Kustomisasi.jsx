import React, { useState } from "react";
import { useProducts } from "../../store/products";
export default function Kustomisasi() {
  const { products, upsertProduct, deleteProduct } = useProducts();
  const [form, setForm] = useState({ id:"", name:"", price:0, image:"", description:"", bpom:"", halal:true });
  function edit(p){ setForm({...p}); }
  function clear(){ setForm({ id:"", name:"", price:0, image:"", description:"", bpom:"", halal:true }); }
  function submit(e){ e.preventDefault(); upsertProduct({ ...form, id: form.id || crypto.randomUUID(), price: Number(form.price)||0 }); clear(); }
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold">Kustomisasi Produk (CRUD)</h1>
      <form onSubmit={submit} className="card p-4 grid md:grid-cols-2 gap-3">
        <input className="border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="Nama produk" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input type="number" className="border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="Harga (IDR)" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} />
        <input className="border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="URL Gambar" value={form.image} onChange={e=>setForm({...form,image:e.target.value})} />
        <input className="border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="No. BPOM (opsional)" value={form.bpom} onChange={e=>setForm({...form,bpom:e.target.value})} />
        <textarea className="md:col-span-2 border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="Deskripsi" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
        <div className="md:col-span-2 flex gap-2">
          <button className="btn btn-primary">Simpan / Update</button>
          <button type="button" onClick={clear} className="btn btn-outline">Reset</button>
        </div>
      </form>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="card p-4">
            <img src={p.image || "https://via.placeholder.com/600x400?text=Produk"} alt={p.name} className="rounded-xl aspect-[4/3] object-cover" />
            <div className="mt-3 font-bold">{p.name}</div>
            <div className="text-sm opacity-80">Rp {p.price.toLocaleString("id-ID")}</div>
            {p.bpom && <div className="text-xs opacity-70 mt-1">BPOM: {p.bpom}</div>}
            <p className="mt-2 text-sm opacity-80">{p.description}</p>
            <div className="mt-3 flex gap-2">
              <button onClick={()=>edit(p)} className="btn btn-outline">Edit</button>
              <button onClick={()=>deleteProduct(p.id)} className="btn btn-outline">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
