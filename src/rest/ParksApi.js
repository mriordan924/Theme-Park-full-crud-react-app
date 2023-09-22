const PARKS_ENDPOINT ='https://65087eeb56db83a34d9c6c4a.mockapi.io/Parks'

class ParksApi {
    get = async () => {
        try {
            const resp = await fetch (PARKS_ENDPOINT);
            const data = await resp.json();
            console.log('API Response:', data);
            return data;
        } catch(e) {
            console.log ("fetch park error", e);
        }
    }
    put = async (park) => {
        try {
            const resp = await fetch(`${PARKS_ENDPOINT}/${park.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(park)
        });
        return await resp.json();
    } catch(e) {
        console.log ('issue updating parks', e);
    }
 }
 post = async (newPark) => {
    try {
      const resp = await fetch(PARKS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPark),
      });
      return await resp.json();
    } catch (e) {
      console.error('Error adding new park:', e);
      throw e; 
    }
  };

  delete = async (parkId) => {
    try {
        const resp = await fetch(`${PARKS_ENDPOINT}/${parkId}`, {
            method: 'DELETE',
        });
        return resp.status === 204;
    } catch (e) {
        console.log('Error deleteing park from API', e);
        return false;
    }
  };
}

export const parksApi = new ParksApi();