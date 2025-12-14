import { useEffect, useState } from "react";
import api from "../api/axios";
import "./Home.css";
import PaymentModal from "../components/PaymentModal";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Home() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    api.get("/plans").then(res => setPlans(res.data));
  }, []);

  return (
    <div className="home-container">
      <h2 className="page-title">🏋️ Fitness Plans</h2>

      <div className="plans-grid">
        {plans.map(plan => (
          <div className="plan-card" key={plan.id}>
            <h3>{plan.title}</h3>
           <p className="trainer-name">
           Trainer: <strong>{plan.trainerName}</strong>
            </p>

            <div className="price-badge">₹{plan.price}</div>

            <button
              className="subscribe-btn"
              onClick={() => {
                if (!user) {
                  toast.error("Please login to subscribe");
                  return;
                }
                setSelectedPlan(plan);
              }}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onConfirm={async () => {
            const toastId = toast.loading("Processing payment...");
            try {
              await api.post(`/plans/${selectedPlan.id}/subscribe`);
              toast.success("Subscription activated 🎉", { id: toastId });
              setSelectedPlan(null);
            } catch (err) {
              toast.error(err.response?.data?.message || "Failed", { id: toastId });
            }
          }}
        />
      )}
    </div>
  );
}
