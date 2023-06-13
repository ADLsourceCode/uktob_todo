import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage,setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
        setErrorMessage('');
      setItems([...items, inputValue]);
      setInputValue('');
    }
    else{
        setErrorMessage('Please enter a valid value');
    }
  };

  
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
      

    </div>
  );
}

export default TodoList;