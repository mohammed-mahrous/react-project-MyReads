import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

function BooksApp(props) {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks />} />
        <Route exact path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default BooksApp;
