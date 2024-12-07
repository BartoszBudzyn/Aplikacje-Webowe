const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
app.use(express.json());

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "books.db",
});

const Book = sequelize.define("Book", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
});

sequelize
    .sync()
    .then(() => console.log("Database synced"))
    .catch((error) => console.error("Error syncing database:", error));

app.get("/api/books", async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

app.get("/api/books/:id", async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the book" });
    }
});

app.post("/api/books", async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const book = await Book.create({ title, author, year });
        res.status(201).json({ id: book.id });
    } catch (error) {
        res.status(500).json({ error: "Failed to add the book" });
    }
});

app.delete("/api/books/:id", async (req, res) => {
    try {
        const result = await Book.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete the book" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
