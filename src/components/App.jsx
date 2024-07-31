import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(props) {
    setItems((prevItems) => {
      return [...prevItems, { ptitle: props.ptitle, pcontent: props.pcontent }];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((prevItems, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea click={addItem} />
      {items.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.ptitle}
            content={noteItem.pcontent}
            delete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
