import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -0.20085118338456825,
  lng: -78.47958961739278
};  
const position = {
    lat: -0.20085118338456825,
  lng: -78.47958961739278
};


export const MapsScreen = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDcS09Z61tL9QEZumR0aUxd_y-FUtgh2Y8"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
          <Marker
            onLoad={onLoad}
            position={position}
            />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
