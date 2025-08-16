require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-route");  

const app = express();

PORT = process.env.PORT || 3000;

// connect to MongoDB
connectToDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
