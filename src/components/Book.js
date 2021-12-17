import React, { useEffect, useState } from "react";
import "../App.css";
import * as BooksAPI from "../BooksAPI";

function Book(props) {
  const updatebook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((value) => {
      SetShelf(shelf);
    });
  };

  const { book } = props;
  // console.log(bookshelf(book));

  const [Book, SetBook] = useState(book);
  const [Shelf, SetShelf] = useState(Book.shelf);

  useEffect(() => {
    BooksAPI.get(book.id).then((val) => {
      SetShelf(val.shelf);
      SetBook(val);
    });
  }, []);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks.thumbnail
                  ? book.imageLinks.thumbnail
                  : "http://i.imgur.com/sJ3CT4V.gif"
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option
                value={Shelf === "currentlyReading"}
                onClick={() => {
                  updatebook(book, "currentlyReading");
                }}
              >
                {Shelf === "currentlyReading" && String.fromCharCode(10003)}
                Currently Reading
              </option>
              <option
                value={Shelf === "wantToRead"}
                onClick={() => {
                  updatebook(book, "wantToRead");
                }}
              >
                {Shelf === "wantToRead" && String.fromCharCode(10003)}
                Want to Read
              </option>
              <option
                value={Shelf === "read"}
                onClick={() => {
                  updatebook(book, "read");
                }}
              >
                {Shelf === "read" && String.fromCharCode(10003)}
                Read
              </option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors
            ? book.authors.map((element) => {
                return element === book.authors[book.authors.length - 1]
                  ? `${element}`
                  : `${element}, `;
              })
            : "unkown"}
        </div>
      </div>
    </li>
  );
}
export default Book;
