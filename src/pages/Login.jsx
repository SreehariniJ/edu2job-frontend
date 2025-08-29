import { useState } from "react";
import API from "../api";
const API_BASE = import.meta.env.VITE_API_BASE;

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setMsg("✅ Logged in. Token saved to localStorage.");
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <input type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
