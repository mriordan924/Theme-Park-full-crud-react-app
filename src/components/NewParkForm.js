import React, { useState } from 'react';


export const NewParkForm = (props) => {
  const [newParkName, setNewParkName] = useState('');

  const handleNewParkNameChange = (e) => {
    setNewParkName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newParkName.trim()) {
      props.addNewPark({ name: newParkName }); 
      setNewParkName(''); 
    } else {
      console.log('Invalid input');
    }
  };

  return (
    <div>
      {/* <h4>Add New Park</h4> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Park Name"
          value={newParkName}
          onChange={handleNewParkNameChange}
        />
        <button type="submit">Add Park</button>
      </form>
    </div>
  );
};
