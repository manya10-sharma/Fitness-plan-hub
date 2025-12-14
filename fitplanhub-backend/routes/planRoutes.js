const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");
const Subscription = require("../models/Subscription");
const { protect, trainerOnly } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");


router.post("/", protect, trainerOnly, async (req, res) => {
  try {
    const { title, description, price, duration } = req.body;

    const plan = await Plan.create({
      title,
      description,
      price,
      duration,
      trainer: req.user._id,
    });

    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const plans = await Plan.find().populate("trainer", "name");

    const previewPlans = plans.map((plan) => ({
      id: plan._id,
      title: plan.title,
      price: plan.price,
      trainerName: plan.trainer.name,
    }));

    res.json(previewPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id).populate(
      "trainer",
      "name"
    );

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    
    if (!req.headers.authorization) {
      return res.json({
        title: plan.title,
        price: plan.price,
        trainerName: plan.trainer.name,
      });
    }

    
    const token = req.headers.authorization.split(" ")[1];
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.json({
        title: plan.title,
        price: plan.price,
        trainerName: plan.trainer.name,
      });
    }

    
    const isSubscribed = await Subscription.findOne({
      user: decoded.id,
      plan: plan._id,
    });

    if (isSubscribed) {
      return res.json({
        title: plan.title,
        description: plan.description,
        price: plan.price,
        duration: plan.duration,
        trainerName: plan.trainer.name,
      });
    }

    return res.json({
      title: plan.title,
      price: plan.price,
      trainerName: plan.trainer.name,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/:id/subscribe", protect, async (req, res) => {
  try {
    const alreadySubscribed = await Subscription.findOne({
      user: req.user._id,
      plan: req.params.id,
    });

    if (alreadySubscribed) {
      return res
        .status(400)
        .json({ message: "Already subscribed to this plan" });
    }

    const subscription = await Subscription.create({
      user: req.user._id,
      plan: req.params.id,
    });

    res.status(201).json({
      message: "Subscription successful 🎉",
      subscription,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

router.get("/trainer/me", protect, trainerOnly, async (req, res) => {
  try {
    const plans = await Plan.find({ trainer: req.user._id });

    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", protect, trainerOnly, async (req, res) => {
  try {
    const plan = await Plan.findOneAndDelete({
      _id: req.params.id,
      trainer: req.user._id
    });

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
