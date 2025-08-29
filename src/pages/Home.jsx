import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_BASE + "/")
      .then(res => setMessage(res.data.message || "Backend Connected ✅"))
      .catch(() => setMessage("❌ Cannot connect to backend"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edu2Job - Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default Home;
