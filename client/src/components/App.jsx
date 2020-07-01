//jshint esversion:8

import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/getNotes");
      const body = await response.json();
      setNotes(body);
    };
    fetchData();
  }, [notes]);

  function addNote(newNote) {
    console.log("added");
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    };
    const fetchData = async () => {
      const response = await fetch("/addNote", requestOptions);
      const body = await response.json();
      console.log("res:", body);
    };
    fetchData();
    console.log(notes);
  }

  function deleteNote(id) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(notes[id])
    };
    const deleteData = async () => {
      const response = await fetch("/deleteNote", requestOptions);
      const body = await response.json();
    };
    deleteData();
  }

  return (<div>
    <Header/>
    <CreateArea handleAdd={addNote}/> {notes.map((note, index) => (<Note key={note._id} id={index} title={note.title} content={note.content} handleDelete={deleteNote}/>))}
    <Footer/>
  </div>);
}

export default App;
