import React, { useEffect, useState } from "react";
import "../App.css";
import * as BooksAPI from "../BooksAPI";

function Book(props) {
  const handlechange = (e) => {
    console.log(document.getElementById("select").value);
    if (e.target.value === "currentlyReading") {
      console.log(
        "title",
        Book.title,
        "shelf",
        Book.shelf,
        "targeted shelf",
        e.target.value
      );
      BooksAPI.update(Book, "currentlyReading").then(() => {
        BooksAPI.get(book.id).then((val) => {
          SetBook(val);
        });
      });
    }
    if (e.target.value === "wantToRead") {
      console.log(
        "title",
        Book.title,
        "shelf",
        Book.shelf,
        "targeted shelf",
        e.target.value
      );
      BooksAPI.update(Book, "wantToRead").then(() => {
        BooksAPI.get(book.id).then((val) => {
          SetBook(val);
        });
      });
    }
    if (e.target.value === "read") {
      console.log(
        "title",
        Book.title,
        "shelf",
        Book.shelf,
        "targeted shelf",
        e.target.value
      );
      BooksAPI.update(Book, "read").then(() => {
        BooksAPI.get(book.id).then((val) => {
          SetBook(val);
        });
      });
    }
  };
  const { book } = props;

  const [Book, SetBook] = useState(book);
  const [currentlyReading, Setcurrent] = useState();
  const [wantToRead, Setwant] = useState();
  const [read, Setread] = useState();
  useEffect(() => {
    BooksAPI.get(book.id).then((val) => {
      SetBook(val);
    });
  }, []);

  useEffect(
    () => {
      Setcurrent(Book.shelf === "currentlyReading");
      Setwant(Book.shelf === "wantToRead");
      Setread(Book.shelf === "read");
    },
    [Book]
  );

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
                Book.imageLinks
                  ? Book.imageLinks.thumbnail
                  : "http://i.imgur.com/sJ3CT4V.gif"
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={handlechange}
              id="select"
              value={
                currentlyReading
                  ? "currentlyReading"
                  : wantToRead
                  ? "wantToRead"
                  : read
                  ? "read"
                  : "none"
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option selected={currentlyReading} value="currentlyReading">
                {currentlyReading && String.fromCharCode(10003)}
                Currently Reading
              </option>
              <option selected={wantToRead} value="wantToRead">
                {wantToRead && String.fromCharCode(10003)}
                Want to Read
              </option>
              <option selected={read} value="read">
                {read && String.fromCharCode(10003)}
                Read
              </option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{Book.title}</div>
        <div className="book-authors">
          {Book.authors
            ? Book.authors.map((element) => {
                return element === Book.authors[Book.authors.length - 1]
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
