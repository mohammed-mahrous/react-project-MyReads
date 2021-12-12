import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import BookShelf from "./BookShelf";
class ListBooks extends Component {
  render() {
    const { books, booksshelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              booksonshelf={books.CurrentlyReading}
              shelftitle="currently reading"
              shelf={booksshelf}
            />
            <BookShelf
              booksonshelf={books.WantToRead}
              shelftitle="want to read"
              shelf={booksshelf}
            />
            <BookShelf
              booksonshelf={books.Read}
              shelftitle="read"
              shelf={booksshelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button> Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default ListBooks;
