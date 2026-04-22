const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Health route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// ✅ Routes
app.use('/ai', aiRoutes);

// ❗ Optional: handle unknown routes (better debugging)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;