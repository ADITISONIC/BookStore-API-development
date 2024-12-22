const { get } = require("mongoose");
const { off } = require("../models/book");
const Book = require("../models/book.js");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "list of books fetched",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const getSingleBook = async (req, res) => {
  try {

    const getCurrent = req.params.id;
    const bookDetails = await Book.findById(getCurrent);
    if (!bookDetails) {
      return res.status(404).json({
        success: false,
        message: "Book with id not found",
      });
    }
    res.status(200).json({
      success: true,
      data: bookDetails,
      
    });
  } catch (e) {
    console.log(e);
  }
};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added",
        data: newBookFormData,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
const deleteBook = async (req, res) => {
  try {
    const getCurrent = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(getCurrent);
    if (!deleteBook) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Deleted Book",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
const updateBook = async (req, res) => {
  try {
    const updatedBook = req.body;
    const getCurrent = req.params.id;
    const updateBook = await Book.findByIdAndUpdate(getCurrent, updatedBook, {
      new: true,
    });
    res.status.json({
        success:true,
        message:"Updated Book"
    })
  } catch (e) {

  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
