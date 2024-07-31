import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [cont, setCont] = useState("");

  function handleTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleCont(event) {
    const newCont = event.target.value;
    setCont(newCont);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitle}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleCont}
          value={cont}
        />
        <button
          onClick={(event) => {
            props.click({ ptitle: title, pcontent: cont });
            setCont("");
            setTitle("");
            event.preventDefault();
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
