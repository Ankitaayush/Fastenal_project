import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import axios from 'axios';
import RequestInput from './components/request_input';
function App() {
  const items = [
    { itid: 1, item_name: 'Item 1' },
    { itid: 2, item_name: 'Items 2' },
    { itid: 3, item_name: 'Item 3' },
  ];
  const handleSubmit = (formData) => {
    // Handle the submitted form data, for now, just log it
    console.log(formData);
  };

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <RequestInput items={items} onSubmit={handleSubmit} />
    </div>
  );

}
export default App;
