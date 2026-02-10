import { useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(e.target.item_name.value);

    const item = {
      id: Date.now(),
      name,
      completed: false,
    };

    onAddItem(item);

    setName("");
  }
  return (
    <form
      className="shopping-form border rounded p-3 mb-3"
      onSubmit={handleFormSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Eleman Ekle"
          id="item_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
}
