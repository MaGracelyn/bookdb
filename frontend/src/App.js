import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

export default function App() {
  const [refresh, setRefresh] = useState(0);
  const reload = () => setRefresh(refresh + 1);

  return (
    <div>
      <h2>Book Library System (MERN)</h2>
      <BookForm reload={reload}/>
      <BookList refetch={refresh}/>
    </div>
  );
}
