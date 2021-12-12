import React, { Component } from "react";
import "../App.css";
import * as BooksAPI from "../BooksAPI";
class Book extends Component {
  updatebook = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  render() {
    const { book, bookshelf } = this.props;
    // console.log(bookshelf(book));

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
                <option
                  value={bookshelf(book, "CurrentlyReading")}
                  onClick={() => {
                    this.updatebook(book, "currentlyReading");
                  }}
                >
                  {bookshelf(book, "CurrentlyReading") &&
                    String.fromCharCode(10003)}
                  Currently Reading
                </option>
                <option
                  value={bookshelf(book, "wantToRead")}
                  onClick={() => {
                    this.updatebook(book, "wantToRead");
                  }}
                >
                  {bookshelf(book, "wantToRead") && String.fromCharCode(10003)}
                  Want to Read
                </option>
                <option
                  value={bookshelf(book, "read")}
                  onClick={() => {
                    this.updatebook(book, "read");
                  }}
                >
                  {bookshelf(book, "read") && String.fromCharCode(10003)}
                  Read
                </option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors &&
              book.authors.map((element) => {
                return element === book.authors[book.authors.length - 1]
                  ? `${element}`
                  : `${element}, `;
              })}
          </div>
        </div>
      </li>
    );
  }
}
export default Book;
