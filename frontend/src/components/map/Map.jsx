import {
  Box,
} from '@chakra-ui/react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api'



const Map = (props) => {  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ height: '100%', width: '100%'}}
    >
      
      <Box position='relative' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={{lat:1.290270, lng:103.851959}}
          zoom={11}
          mapContainerStyle={{ width: '100%', height: '100%', borderRadius:'10px' }}
        >
          {props.children.map(marker => (
              <Marker
                position={{ lat: marker.location.lat, lng: marker.location.lng }}
                key={marker.id}
              />
          ))}
        </GoogleMap>
      </Box>
    </div>
  )
}

export default Map;
