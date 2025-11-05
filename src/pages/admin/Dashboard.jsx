import React from "react";
import { useProducts } from "../../store/products";
export default function Dashboard() {
  const { products, cart } = useProducts();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4"><div className="text-sm opacity-70">Total Produk</div><div className="text-3xl font-bold">{products.length}</div></div>
        <div className="card p-4"><div className="text-sm opacity-70">Cart (demo)</div><div className="text-3xl font-bold">{cart.reduce((a,c)=>a+c.qty,0)}</div></div>
        <div className="card p-4"><div className="text-sm opacity-70">Penjualan (dummy)</div><div className="text-3xl font-bold">Rp 0</div></div>
      </div>
    </div>
  );
}
