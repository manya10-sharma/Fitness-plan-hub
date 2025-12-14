const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const Subscription = require("../models/Subscription");

router.get("/my-subscriptions", protect, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({
      user: req.user._id
    }).populate("plan");

    const plans = subscriptions.map(sub => sub.plan);

    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
