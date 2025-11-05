import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function submit(e) {
    e.preventDefault();
    if (email && password) { localStorage.setItem("admin_token","ok"); nav("/admin/dashboard"); }
  }
  return (
    <div className="max-w-sm mx-auto card p-6">
      <h1 className="text-xl font-extrabold">Login Admin</h1>
      <form onSubmit={submit} className="mt-4 space-y-3">
        <input className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary w-full">Masuk</button>
      </form>
    </div>
  );
}
