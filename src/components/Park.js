import React from 'react';
import {NewAttractionForm} from './NewAttractionForm';
// create unique id for attractions
import { v4 as uuidv4 } from 'uuid';

export const Park = (props) => {
    const {park, updatePark, deletePark} = props;
    // console.log('Park object received:', park);

    const deleteAttraction = (attractionId) => {
        const updatedPark = {
            ...park,
            attraction: park.attraction.filter((x) => x.id !== attractionId)
        };
        updatePark(updatedPark);
    }

    // const deletePark = (parkId) => {
    //     const updatedPark = {
    //         ...park,
    //         park: park.filter((x) => x.id !== parkId)
    //     };
    //     updatePark(updatedPark);
    // }


    const addNewAttraction = (attraction) => {
        const newAttraction = {
          id: uuidv4(), 
          name: attraction.name,
          description: attraction.description,
          requirements: attraction.requirements,
        };
      
        const updatedAttractions = [...park.attraction, newAttraction];
      
        const updatedPark = {
          ...park,
          attraction: updatedAttractions,
        };
      
        updatePark(updatedPark);
      };

      const handleDeletePark =() => {
        deletePark (park.id);
      }
      

// const addNewAttraction = (attraction) => {
//     const updatedAttractions = [
//         ...park.attraction, 
//         { 
//             name: attraction.name, 
//             description: attraction.description, requirements: attraction.requirements,
//          }];
//     const updatedPark = {
//       ...park,
//       attraction: updatedAttractions,
//     };
//     updatePark(updatedPark);
//   };
  

    // const addNewAttraction = (attraction) => 
    //  updatePark ({
    //         ...park, 
    //         attraction: [
    //             ...park.attraction, 
    //             {
    //                 name: park.attraction,
    //                 description: park.description,
    //                 requirements: park.requirements,
    //             }
    //         ]
    //     });

    // const attractions = () => (
    //     <ul>
    //         {park.attraction.map ((attraction, index) => (
    //             <li key = {index}>
    //                 <label> {`${park.attraction} Description: ${park.description} Requirements: ${park.requirements}`}</label>
    //                 <button onClick={(e) => deleteAttraction(attraction._id)}>Delete</button>
    //             </li>
    //         ))}
    //     </ul>
    // );

    return (
        <div className="park">
          <h1>{`${park.park}`}</h1>
          <h2>Park Attractions:</h2>          
          {park.attraction.map((attraction, index) => (
            <div key={index} className="attraction-card">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="attraction-name">{attraction.name}</span>
                <button
                  className="attraction-delete-button"
                  onClick={() => deleteAttraction(attraction.id)}
                >
                  Delete Attraction
                </button>
              </div>
              <div className="attraction-description">
                Description: {attraction.description}
              </div>
              <div className="attraction-requirements">
                Requirements: {attraction.requirements}
              </div>
            </div>
          ))}
          <NewAttractionForm addNewAttraction={addNewAttraction} />
          <button 
          className="park-delete-button"
          onClick={handleDeletePark}>Delete Park</button>
        </div>
      );
    };
