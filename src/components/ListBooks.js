import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import BookShelf from "./BookShelf";

function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelftitle="currently reading"
            shelfName="currentlyReading"
          />
          <BookShelf shelfName="wantToRead" shelftitle="want to read" />
          <BookShelf shelftitle="read" shelfName="read" />
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
// class ListBooks extends Component {
//   render() {

//   }
// }
export default ListBooks;
