import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BookList({ refetch }) {
  const [books, setBooks] = useState([]);

  useEffect(() => { getBooks(); }, [refetch]);

  const getBooks = async () => {
    const res = await axios.get("http://localhost:5000/books");
    setBooks(res.data);
  };

  const deleteBook = async id => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    getBooks();
  };

  const editBook = async id => {
    const title = prompt("New title:");
    const genre = prompt("New genre:");
    await axios.put(`http://localhost:5000/books/${id}`, { title, genre });
    getBooks();
  };

  return (
    <div>
      {books.map(b => (
        <div key={b._id}>
          <b>{b.title}</b> — {b.author} ({b.year}) <br/> Genre: {b.genre} <br/>
          <button onClick={() => editBook(b._id)}>Edit</button>
          <button onClick={() => deleteBook(b._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
