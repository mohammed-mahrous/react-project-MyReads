import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
  state = {
    books: {
      CurrentlyReading: [],
      WantToRead: [],
      Read: [],
    },
  };

  fetchBooks = () => {
    BooksAPI.getAll().then((newbooks) => {
      const books = {
        CurrentlyReading: newbooks.filter(
          (book) => book.shelf === "currentlyReading"
        ),
        WantToRead: newbooks.filter((book) => book.shelf === "wantToRead"),
        Read: newbooks.filter((book) => book.shelf === "read"),
      };
      this.updatestate(books);
    });
  };

  updatestate = (books) => {
    this.setState({ books: books });
  };

  componentDidMount() {
    this.fetchBooks();
  }
  componentDidUpdate() {
    this.fetchBooks();
  }

  getbookshelf = (book, shelf) => {
    if (shelf === "wantToRead") {
      return this.state.books.WantToRead.some((e) => e.id === book.id);
    }
    if (shelf === "CurrentlyReading") {
      return this.state.books.CurrentlyReading.some((e) => e.id === book.id);
    }
    if (shelf === "read") {
      return this.state.books.Read.some((e) => e.id === book.id);
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              booksshelf={this.getbookshelf}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <SearchBooks getbookshelf={this.getbookshelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;
