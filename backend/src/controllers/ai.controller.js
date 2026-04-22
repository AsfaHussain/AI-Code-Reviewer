const aiService = require("../services/ai.services");

let lastCallTime = 0;

module.exports.getReview = async (req, res) => {
  try {
    const now = Date.now();

    if (now - lastCallTime < 1500) {
      return res.status(429).json({
        error: "Too many requests"
      });
    }

    lastCallTime = now;

    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({
        error: "Code is required"
      });
    }

    const response = await aiService(code, language);

    res.json({ result: response });

  } catch (err) {
    console.error("CONTROLLER ERROR:", err);

    res.status(500).json({
      error: "Something went wrong"
    });
  }
};