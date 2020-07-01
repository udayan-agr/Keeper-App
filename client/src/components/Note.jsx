//jshint esversion:6

import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function note(props) {
  return (<div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick {()=> props.handleDelete(props.id)}><DeleteIcon/></button>
  </div>);
}

export default note;
