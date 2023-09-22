import React, {useState} from 'react';

export const NewAttractionForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState ('');

    const handleDescriptionInput = (e) => {
       setDescription(e.target.value);    
    }

    const handleRequirementsInput = (e) => {
      setRequirements(e.target.value);    
    }

    const onSubmit = (e) => {
        e.preventDefault ();
        if (name && description && requirements) {
            props.addNewAttraction ({name, description, requirements});
            setName('');
            setDescription('');
            setRequirements('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div className="add-new-attraction">
            {/* <h4>Add New Attraction</h4> */}
            <form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='Attraction Name'
                onChange={(e) => setName (e.target.value)}
                value={name}
                />
                <input
                type='text'
                placeholder='Attraction Description'
                onChange={handleDescriptionInput}
                value={description}
                />
                <input
                type='text'
                placeholder='Requirements to Ride'
                onChange={handleRequirementsInput}
                value={requirements}
                />
                <button type='submit'>Add Attraction</button>
                </form>
        </div>
    )
};