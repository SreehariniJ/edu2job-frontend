export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <section>
        <h3>👤 Profile Info</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
      </section>

      <section>
        <h3>📜 Prediction History</h3>
        <ul>
          <li>Prediction 1 - Success ✅</li>
          <li>Prediction 2 - Failed ❌</li>
        </ul>
      </section>

      <section>
        <h3>🔮 New Prediction</h3>
        <button onClick={() => alert("Making a new prediction...")}>
          Make Prediction
        </button>
      </section>
    </div>
  );
}
