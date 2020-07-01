//jshint esversion:9

import React from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({title: "", content: ""});
  const [isExpand, setIsExpand] = React.useState(false);

  function handleChange(event) {
    const {name, value} = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function changeEditor() {
    setIsExpand(true);
  }

  return (<div>
    <form onSubmit={(event) => {
        event.preventDefault();
        setNewNote({title: "", content: ""});
        setIsExpand(false);
        props.handleAdd(newNote)
      }
} className="create-note">
      {isExpand && <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>}
      <textarea onChange={handleChange} onClick={changeEditor} name="content" placeholder="Take a note..." rows={isExpand
          ? "3"
          : "1"} value={newNote.content}/>
      <Zoom in={isExpand}>
        <Fab type="submit" aria-label="add">
          <AddIcon/>
        </Fab>
      </Zoom>
    </form>
  </div>);
}

export default CreateArea;
