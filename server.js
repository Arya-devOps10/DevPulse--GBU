const express = require('express');
const cors = require('cors');

// Express app initialize karna
const app = express();
const PORT = 3000;

// Middleware (Frontend aur Backend ki dosti ke liye)
app.use(cors()); // Frontend ko backend se baat karne ki permission deta hai
app.use(express.json()); // Jo JSON data frontend bheje, usko padhne mein help karta hai

// Ek basic test route (Check karne ke liye ki server zinda hai)
app.get('/', (req, res) => {
    res.send("DevPulse Backend is running like a beast! 🚀");
});

// Server ko start karna
app.listen(PORT, () => {
    console.log(`Server is running like a beast at http://localhost:${PORT}`);
});