import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

class SearchBooks extends Component {
  state = {
    query: "",
    books: [],
  };

  Updatebooks = (value) => {
    BooksAPI.search(value.trim()).then((books) => {
      if (books && !books.error) {
        this.setState({ books: books });
      } else {
        this.setState({
          books: [],
        });
      }
    });
  };
  render() {
    const { getbookshelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={
                (e) => this.Updatebooks(e.target.value) // value={this.state.query}
              }
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol
            className="books-grid"
            children={this.state.books.map((book) => (
              <Book book={book} key={book.id} bookshelf={getbookshelf} />
            ))}
          />
        </div>
      </div>
    );
  }
}
export default SearchBooks;
