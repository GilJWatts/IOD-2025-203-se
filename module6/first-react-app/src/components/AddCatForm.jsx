import React, { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image });
    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Name:
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Latin Name:
            <input
              name="latinName"
              value={latinName}
              onChange={(e) => setLatinName(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Image URL:
            <input
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default AddCatForm;
