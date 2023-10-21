import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    id: uuid(), //
    name: "",
    category: "Produce",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = { ...formData };
    setFormData({ ...formData, id: uuid() });
    setFormData({ ...formData, name: "" });
    setFormData({ ...formData, category: "Produce" });
    console.log(items);
    onItemFormSubmit(newItem);
  }

  function handleFormChange(event) {
    const key = event.target.name;
    setFormData({ ...formData, [key]: event.target.value });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleFormChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
