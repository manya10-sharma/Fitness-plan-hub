import { useEffect, useState } from "react";
import api from "../api/axios";

function Feed() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get("/users/me/feed").then(res => setPlans(res.data));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Your Feed</h2>

      {plans.map(plan => (
        <div key={plan._id} style={styles.card}>
          <h3>{plan.title}</h3>
          <p>Trainer: {plan.trainer.name}</p>
          <p>₹{plan.price}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { color: "#fff", maxWidth: "700px", margin: "30px auto" },
  card: { background: "#1f2933", padding: "15px", borderRadius: "8px", marginBottom: "10px" }
};

export default Feed;
