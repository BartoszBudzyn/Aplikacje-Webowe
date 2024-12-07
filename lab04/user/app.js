const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
app.use(express.json());

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "users.db",
});

const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.INTEGER, allowNull: false },
});

sequelize
    .sync()
    .then(() => console.log("Database synced"))
    .catch((error) => console.error("Error syncing database:", error));

app.post("/api/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ where: { email } });
        if (user) {
            res.status(200).json({ message: "Email already registered" });
        } else {
            user = await User.create({ email, password });
            res.status(201).json({ id: user.id });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to add the user" });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email, password } });
        if (user) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to login" });
    }
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
