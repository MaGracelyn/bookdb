import React, { useState } from "react";
import axios from "axios";

export default function BookForm({ reload }) {
  const [book, setBook] = useState({ title: "", author: "", year: "", genre: "" });

  const updateInput = e => setBook({ ...book, [e.target.name]: e.target.value });

  const saveBook = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/books", book);
    setBook({ title: "", author: "", year: "", genre: "" });
    reload();
  };

  return (
    <form onSubmit={saveBook}>
      <input name="title" placeholder="Book Title" onChange={updateInput} value={book.title} required />
      <input name="author" placeholder="Author" onChange={updateInput} value={book.author} required />
      <input name="year" type="number" placeholder="Year" onChange={updateInput} value={book.year} required />
      <input name="genre" placeholder="Genre" onChange={updateInput} value={book.genre} required />
      <button>Add Book</button>
    </form>
  );
}
