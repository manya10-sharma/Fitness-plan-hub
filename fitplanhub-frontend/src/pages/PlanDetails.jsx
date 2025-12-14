import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function PlanDetails() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/plans/${id}`)
      .then(res => {
        setPlan(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!plan) return <p>Plan not found</p>;

  return (
    <div style={styles.container}>
      <h2>{plan.title}</h2>
      <p><b>Trainer:</b> {plan.trainerName}</p>
      <p><b>Price:</b> ₹{plan.price}</p>

      {plan.description ? (
        <>
          <p><b>Duration:</b> {plan.duration}</p>
          <p><b>Description:</b> {plan.description}</p>
          <span style={styles.badge}>Subscribed</span>
        </>
      ) : (
        <p style={styles.preview}>
          Subscribe to view full plan details.
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    background: "#1f2933",
    color: "#fff",
    borderRadius: "8px"
  },
  preview: {
    color: "#fbbf24",
    marginTop: "20px"
  },
  badge: {
    display: "inline-block",
    marginTop: "15px",
    padding: "6px 12px",
    background: "#22c55e",
    borderRadius: "5px",
    fontWeight: "bold"
  }
};

export default PlanDetails;
