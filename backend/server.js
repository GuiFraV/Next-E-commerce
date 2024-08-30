const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de l'application e-commerce" });
});

// Routes
app.use("/api/products", require("./routes/products"));
// TODO: Décommenter et implémenter les routes utilisateurs
// app.use('/api/users', require('./routes/users'));
// TODO: Décommenter et implémenter les routes des commandes
// app.use('/api/orders', require('./routes/orders'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
