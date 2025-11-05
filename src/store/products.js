import { useEffect, useState } from "react";
const seed = [
  { id:"p1", name:"Pro LQ", price:250000, image:"", description:"Herbal Vitalitas Pria (Ereksi Tahan Lama)", bpom:"", halal:true },
  { id:"p2", name:"Femizome", price:220000, image:"", description:"Vagina jadi Kencang", bpom:"", halal:true },
];
function readLS(key, fb){ try { return JSON.parse(localStorage.getItem(key)) ?? fb; } catch { return fb; } }
function writeLS(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
export function useProducts(){
  const [products, setProducts] = useState(()=>readLS("wb_products", seed));
  const [cart, setCart] = useState(()=>readLS("wb_cart", []));
  useEffect(()=>{ writeLS("wb_products", products); },[products]);
  useEffect(()=>{ writeLS("wb_cart", cart); },[cart]);
  function upsertProduct(p){ setProducts(prev=>{ const i=prev.findIndex(x=>x.id===p.id); if(i>=0){ const cp=[...prev]; cp[i]=p; return cp;} return [...prev,p]; }); }
  function deleteProduct(id){ setProducts(prev=>prev.filter(p=>p.id!==id)); }
  function addToCart(p){ setCart(prev=>{ const i=prev.findIndex(x=>x.id===p.id); if(i>=0){ const cp=[...prev]; cp[i].qty+=1; return cp;} return [...prev, {id:p.id, name:p.name, price:p.price, qty:1}]; }); }
  return { products, upsertProduct, deleteProduct, cart, addToCart };
}
