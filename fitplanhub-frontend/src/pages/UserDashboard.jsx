import { useEffect, useState } from "react";
import api from "../api/axios";

function UserDashboard() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get("/users/my-subscriptions")
      .then(res => setPlans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h2>📌 My Subscribed Plans</h2>

      {plans.length === 0 && (
        <p>You have not subscribed to any plans yet.</p>
      )}

      {plans.map(plan => (
        <div key={plan._id} style={styles.card}>
          <h3>{plan.title}</h3>
          <p>Trainer: {plan.trainer?.name}</p>
          <p>Duration: {plan.duration}</p>
          <p>Price: ₹{plan.price}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  card: {
    background: "#111827",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px"
  }
};

export default UserDashboard;
