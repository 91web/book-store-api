const Book = require("../models/books");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in the database",
      });
    }
  } catch (error) {
    console.error("Error retrieving books:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve books",
    });
  }
};
// Function to get a single book by ID
const getSingleBookById = async (req, res) => {
  try {
    const getCurentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurentBookID);
    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book with the ID not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book details retrieved successfully",
        data: bookDetailsByID,
      });
    }
  } catch (error) {
    console.error("Error retrieving book by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve book by ID",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData)
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
  } catch (error) {
    console.error("Error adding book:", error);
    // Handle the error and send a response
    res.status(500).json({
      success: false,
      message: "Failed to add book",
      error: error.message,
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updatedBookFormData,

      { new: true }
    );
    // Check if the book was found and updated
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book ID not found",
      });
      }
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook,
      });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update book",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
    // Check if the book was found and deleted      );
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book ID not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete book",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
