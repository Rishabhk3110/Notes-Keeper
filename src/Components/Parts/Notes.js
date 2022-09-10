import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note"
function Notes() {
  return (
    <div className="notes">
  <Note />
  <Note />
  <CreateNote />
</div>
  );
}
export default Notes;

//states
const [notes, setNotes] = useState([]);
const [inputText, setInputText] = useState("");

// get text and store in state
const textHandler = (e) => {
  setInputText(e.target.value);
};

//saving data to local storage
useEffect(() => {
  localStorage.setItem("Notes", JSON.stringify(notes));
}, [notes]);