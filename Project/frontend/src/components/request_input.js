import React, { useState } from 'react';

const RequestInput = ({ items, onSubmit }) => {
  const [formFields, setFormFields] = useState([{ item: '', specification: '', quantity: '' }]);

  const handleInputChange = (index, key, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][key] = value;
    setFormFields(updatedFields);
  };

  const handleAddRow = () => {
    setFormFields([...formFields, { item: '', specification: '', quantity: '' }]);
  };

  const handleDeleteRow = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleSubmit = () => {
    // Validate the form or perform any other necessary actions
    onSubmit(formFields);
  };

  return (
    <div>
      {formFields.map((field, index) => (
        <div key={index}>
          <select
            value={field.item}
            onChange={(e) => handleInputChange(index, 'item', e.target.value)}
          >
            <option value="" disabled>Select an item</option>
            {items.map((item) => (
              <option key={item.itid} value={item.itid}>
                {item.item_name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={field.specification}
            placeholder="Specification"
            onChange={(e) => handleInputChange(index, 'specification', e.target.value)}
          />
          <input
            type="text"
            value={field.quantity}
            placeholder="Quantity"
            onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
          />
          <button onClick={() => handleDeleteRow(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RequestInput;
