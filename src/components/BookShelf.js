import React, { useEffect, useState } from "react";
import Book from "./Book";
import "../App.css";
import * as BooksAPI from "../BooksAPI";

function BookShelf(props) {
  const { shelftitle, shelfName } = props;
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((val) =>
      setBooks(val.filter((e) => e.shelf === shelfName))
    );
  }, []);
  useEffect(
    () => {
      BooksAPI.getAll().then((val) =>
        setBooks(val.filter((e) => e.shelf === shelfName))
      );
    },
    [Books]
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelftitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
}
export default BookShelf;
