import { useState } from "react";
import API from "../api";
const API_BASE = import.meta.env.VITE_API_BASE;

export default function Predict() {
  const [form, setForm] = useState({ degree:"", major:"", cgpa:"", skills:"" });
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/predict", form);
      setResult(res.data.prediction);
    } catch (err) {
      setResult("❌ " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <h2>Predict</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Degree" value={form.degree} onChange={e=>setForm({...form, degree:e.target.value})}/>
        <input placeholder="Major" value={form.major} onChange={e=>setForm({...form, major:e.target.value})}/>
        <input placeholder="CGPA" value={form.cgpa} onChange={e=>setForm({...form, cgpa:e.target.value})}/>
        <input placeholder="Skills" value={form.skills} onChange={e=>setForm({...form, skills:e.target.value})}/>
        <button type="submit">Predict</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}
