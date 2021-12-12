import React, { Component } from "react";
import Book from "./Book";
import "../App.css";
class BookShelf extends Component {
  render() {
    const { booksonshelf, shelftitle, shelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelftitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksonshelf.map((book) => {
              return <Book book={book} key={book.id} bookshelf={shelf} />;
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
