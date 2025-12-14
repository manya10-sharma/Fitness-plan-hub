import { useEffect, useState } from "react";
import api from "../api/axios";

function TrainerDashboard() {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    duration: ""
  });

  const fetchPlans = async () => {
    const res = await api.get("/plans/trainer/me");
    setPlans(res.data);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await api.post("/plans", form);
    setForm({ title: "", description: "", price: "", duration: "" });
    fetchPlans();
  };

  const handleDelete = async (id) => {
    await api.delete(`/plans/${id}`);
    fetchPlans();
  };

  return (
    <div style={styles.container}>
      <h2>Trainer Dashboard</h2>

      <form onSubmit={handleCreate} style={styles.form}>
        <h3>Create New Plan</h3>

        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="duration" placeholder="Duration (e.g. 30 days)" value={form.duration} onChange={handleChange} />

        <button type="submit">Create Plan</button>
      </form>

      <h3>Your Plans</h3>

      {plans.length === 0 && <p>No plans created yet.</p>}

      {plans.map(plan => (
        <div key={plan._id} style={styles.card}>
          <h4>{plan.title}</h4>
          <p>₹{plan.price}</p>
          <button onClick={() => handleDelete(plan._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "30px auto",
    color: "#fff"
  },
  form: {
    background: "#1f2933",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  card: {
    background: "#111827",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px"
  }
};

export default TrainerDashboard;
