import { useState } from "react";
import API from "../api";
const API_BASE = import.meta.env.VITE_API_BASE;

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      setMsg("✅ Registered successfully! Now login.");
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})}/>
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <input type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
