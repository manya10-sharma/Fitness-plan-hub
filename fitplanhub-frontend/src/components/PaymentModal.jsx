import "./PaymentModal.css";

function PaymentModal({ plan, onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>Complete Payment</h3>

        <p className="plan-name">{plan.title}</p>
        <p className="price">Amount: ₹{plan.price}</p>

        <div className="payment-options">
          <label>
            <input type="radio" name="payment" defaultChecked />
            UPI
          </label>

          <label>
            <input type="radio" name="payment" />
            Credit / Debit Card
          </label>

          <label>
            <input type="radio" name="payment" />
            Net Banking
          </label>
        </div>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="pay-btn" onClick={onConfirm}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
