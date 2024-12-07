import express from "express";
import { Sequelize, DataTypes } from "sequelize";
const app = express();
app.use(express.json());

const booksDb = new Sequelize({
    dialect: "sqlite",
    storage: "../books/books.db",
});

const usersDb = new Sequelize({
    dialect: "sqlite",
    storage: "../user/users.db",
});

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "orders.db",
});

sequelize
    .sync()
    .then(() => console.log("Database synced"))
    .catch((error) => console.error("Error syncing database:", error));

const Book = booksDb.define("Book", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    author: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER },
});

const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.INTEGER, allowNull: false },
});

const Order = sequelize.define("Order", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    book_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
});

app.get("/api/orders/:userId", async (req, res) => {
    try {
        const orders = await Order.findAll({
            where: { user_id: req.params.userId },
        });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
});

app.post("/api/orders", async (req, res) => {
    try {
        const { book_id, user_id, quantity } = req.body;

        const book = await Book.findByPk(book_id);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        const order = await Order.create({ book_id, user_id, quantity });
        res.status(201).json({ id: order.id });
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
});

app.delete("/api/orders/:orderId", async (req, res) => {
    try {
        const result = await Order.destroy({
            where: { id: req.params.orderId },
        });
        if (result) {
            res.status(200).json({ message: "Order deleted successfully" });
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete order" });
    }
});

app.patch("/api/orders/:orderId", async (req, res) => {
    try {
        const { quantity } = req.body;
        const order = await Order.findByPk(req.params.orderId);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        await order.update({ quantity });
        res.json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update order" });
    }
});

Promise.all([booksDb.sync(), usersDb.sync()])
    .then(() => console.log("Databases synced"))
    .catch((error) => console.error("Error syncing databases:", error));

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
