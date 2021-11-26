import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>Hello welcome to the Zettel World</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;

