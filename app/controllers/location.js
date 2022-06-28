//Location.jsx converts the address into longtitiude and latitude using Google Map Geocoding API
import axios from 'axios';

const API_KEY = 'AIzaSyDIw901ZLp8NA03_BuFZsqy2MVkuXVU_2k';

async function getCoordsForAddress(address) {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
        )}&key=${API_KEY}`
    );

    const data = response.data;

    //Check whether the data is set
    if(!data || data.status === 'ZERO_RESULTS'){
        throw new Error('Data is not set.');
    }

    const coordinates = data.results[0].geometry.location;
    console.log(coordinates);

    return coordinates;
}

export default getCoordsForAddress;