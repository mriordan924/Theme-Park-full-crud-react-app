import React from 'react';
import {Park} from './Park';
import { parksApi } from '../rest/ParksApi';
import { NewParkForm } from './NewParkForm';

export class ParksList extends React.Component {
    state = {
        parks: [],
        park: {
            attraction: [],
            description: '',
            requirements: '',
        }
    };

    componentDidMount () {
        this.fetchParks();
        // console.log('Component did mount');
    }

    fetchParks = async () => {
        const parks = await parksApi.get();
        console.log('Fetched parks:', parks);
        this.setState({ parks});
    };

    updatePark = async (updatedPark) => {
        await parksApi.put(updatedPark);
        this.fetchParks();
    };

    deletePark = async (parkId) => {
        const { parks } = this.state;
        try{
            const success = await parksApi.delete(parkId);

            if (success) {
                const updatedParks = parks.filter((park) => park.id !== parkId);
                this.setState({parks: updatedParks }, () => {
                this.fetchParks();
                });
            } else {
                console.log ('error deleting park from UI');
            }
        } catch (e) {
            console.log('error deleting park', e);
        }
    };




    //     await parksApi.delete (parkId);
    //     const updatedParks = this.state.parks.filter ((park) => park.id !== parkId);    
    // };

//     addNewPark = async (newPark) => {
//         try{
//             const response = await parksApi.post(newPark);
//             const updatedParks = [...this.state.parks, response];
//         this.setState({ parks: updatedParks});
//     } catch (error) {
//         console.error('Error adding new park', error);
//     }
//  };

addNewPark = async (newPark) => {
    try {
      const formattedNewPark = {
        park: [newPark.name], 
        // attraction: [], 
      };
  
      await parksApi.post(formattedNewPark);
  
      this.fetchParks();
    } catch (e) {
      console.error('Error adding new park:', e);
    }
  };
  

    render() {
        return (
            <div className='parks-list'>
            {this.state.parks.map((park) => (
                <Park
                park={park}
                key={park.id}
                updatePark={this.updatePark}
                deletePark={this.deletePark}
                />
                ))}
                <div className="new-park-form-container">
                <NewParkForm addNewPark={this.addNewPark} />
                </div>
            </div>
        );
    }
}