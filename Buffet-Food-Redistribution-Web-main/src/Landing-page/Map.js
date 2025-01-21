// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Define custom icons
// const blueIcon = new L.Icon({
//   iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg width="25" height="41" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="41" r="10" fill="%2300f" /%3E%3C/svg%3E',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

// const redIcon = new L.Icon({
//   iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg width="25" height="41" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="41" r="10" fill="%23ff0000" /%3E%3C/svg%3E',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

// function MyMap() {
//   const [userLocation, setUserLocation] = useState({
//     latitude: -25.7479, // Fallback latitude (Pretoria)
//     longitude: 28.2293, // Fallback longitude (Pretoria)
//   });
//   const [searchLocation, setSearchLocation] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [locationEnabled, setLocationEnabled] = useState(false); // New state to track if location is enabled

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//         setLocationEnabled(true); // Set location enabled to true when location is fetched
//       },
//       (error) => {
//         console.error('Error getting location: ', error);
//         alert('Please enable location services to use the map.');
//         // Keep the fallback location if geolocation fails
//       }
//     );
//   }, []);

//   const handleSearch = async () => {
//     if (!locationEnabled) {
//       alert('Please enable location services to search for a location.');
//       return;
//     }

//     if (searchQuery.trim() === '') return;

//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
//       );
//       const results = await response.json();
      
//       if (results && results.length > 0) {
//         const { lat, lon } = results[0];
//         setSearchLocation({
//           latitude: parseFloat(lat),
//           longitude: parseFloat(lon),
//         });
//       } else {
//         alert('Location not found. Please try a different search query.');
//       }
//     } catch (error) {
//       console.error('Error during search:', error);
//       alert('Error during search. Please try again.');
//     }
//   };

//   return (
//     <div>
//         <br />
//         <br />
//       <div style={{ padding: '10px', textAlign: 'center' }}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search for a location"
//           style={{ padding: '5px', width: '200px' }}
//         />
//         <button onClick={handleSearch} style={{ padding: '5px 10px', marginLeft: '10px' }}>
//           Search
//         </button>
//       </div>

//       <MapContainer
//         center={searchLocation ? [searchLocation.latitude, searchLocation.longitude] : [userLocation.latitude, userLocation.longitude]}
//         zoom={13}
//         style={{ height: '90vh', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//         />
//         <Marker
//           position={[userLocation.latitude, userLocation.longitude]}
//           icon={blueIcon} // Apply the custom blue icon for current location
//         >
//           <Popup>Your current location.</Popup>
//         </Marker>
//         {searchLocation && (
//           <Marker
//             position={[searchLocation.latitude, searchLocation.longitude]}
//             icon={redIcon} // Apply the custom red icon for searched location
//           >
//             <Popup>{searchQuery}</Popup>
//           </Marker>
//         )}
//         <ChangeMapView coords={searchLocation || userLocation} />
//       </MapContainer>
//     </div>
//   );
// }

// function ChangeMapView({ coords }) {
//   const map = useMap();
//   map.setView([coords.latitude, coords.longitude], map.getZoom());

//   return null;
// }

//export default MyMap;


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import L from 'leaflet';

// Red icon for search location
const redIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg width="25" height="41" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="41" r="10" fill="%23ff0000" /%3E%3C/svg%3E',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// // Blue icon for current user location
// const blueIcon = new L.Icon({
//   iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="41" fill="%230070ff" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"%3E%3Cpath d="M8 0C5.791 0 4 1.791 4 4s4 8 4 8 4-5.791 4-8-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/%3E%3C/svg%3E',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

function MyMap() {
  const [userLocation, setUserLocation] = useState({
    latitude: -25.7479, // Fallback latitude (Pretoria)
    longitude: 28.2293, // Fallback longitude (Pretoria)
  });
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery] = useState('');
  const [locationEnabled, setLocationEnabled] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationEnabled(true);
      },
      (error) => {
        console.error('Error getting location: ', error);
        alert('Please enable location services to use the map.');
      }
    );
  }, []);

  const handleFromSearch = async () => {
    if (!locationEnabled) {
      alert('Please enable location services to search for a location.');
      return;
    }

    if (fromQuery.trim() === '') return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fromQuery)}`
      );
      const results = await response.json();
      
      if (results && results.length > 0) {
        const { lat, lon } = results[0];
        setFromLocation({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        });
      } else {
        alert('Location not found. Please try a different search query.');
      }
    } catch (error) {
      console.error('Error during search:', error);
      alert('Error during search. Please try again.');
    }
  };

  const handleToSearch = async () => {
    if (!locationEnabled) {
      alert('Please enable location services to search for a location.');
      return;
    }

    if (toQuery.trim() === '') return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(toQuery)}`
      );
      const results = await response.json();
      
      if (results && results.length > 0) {
        const { lat, lon } = results[0];
        setToLocation({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        });
      } else {
        alert('Location not found. Please try a different search query.');
      }
    } catch (error) {
      console.error('Error during search:', error);
      alert('Error during search. Please try again.');
    }
  };

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <input
          type="text"
          value={fromQuery}
          onChange={(e) => setFromQuery(e.target.value)}
          placeholder="From location"
          style={{ padding: '5px', width: '200px', marginRight: '10px' }}
        />
        <button onClick={handleFromSearch} style={{ padding: '5px 10px' }}>
          Search From
        </button>
        <input
          type="text"
          value={toQuery}
          onChange={(e) => setToQuery(e.target.value)}
          placeholder="To location"
          style={{ padding: '5px', width: '200px', marginLeft: '10px', marginRight: '10px' }}
        />
        <button onClick={handleToSearch} style={{ padding: '5px 10px' }}>
          Search To
        </button>
      </div>

      <MapContainer
        center={fromLocation ? [fromLocation.latitude, fromLocation.longitude] : [userLocation.latitude, userLocation.longitude]}
        zoom={13}
        style={{ height: '90vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {/* Marker for user's current location */}
       

        {/* Marker for "From" search location */}
        {fromLocation && (
          <Marker
            position={[fromLocation.latitude, fromLocation.longitude]}
            icon={redIcon}
          >
            <Popup>From: {fromQuery}</Popup>
          </Marker>
        )}

        {/* Marker for "To" search location */}
        {toLocation && (
          <Marker
            position={[toLocation.latitude, toLocation.longitude]}
            icon={redIcon}
          >
            <Popup>To: {toQuery}</Popup>
          </Marker>
        )}

        {/* Add routing control */}
        {fromLocation && toLocation && <Routing fromLocation={fromLocation} toLocation={toLocation} />}

        <ChangeMapView coords={fromLocation || userLocation} />
      </MapContainer>
    </div>
  );
}

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView([coords.latitude, coords.longitude], map.getZoom());

  return null;
}

function Routing({ fromLocation, toLocation }) {
  const map = useMap();

  useEffect(() => {
    if (!fromLocation || !toLocation) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(fromLocation.latitude, fromLocation.longitude),
        L.latLng(toLocation.latitude, toLocation.longitude)
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [fromLocation, toLocation, map]);

  return null;
}

export default MyMap;


// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';
// import 'leaflet-control-geocoder';
// import L from 'leaflet';

// // Red icon for the "To" location
// const redIcon = new L.Icon({
//   iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg width="25" height="41" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="41" r="10" fill="%23ff0000" /%3E%3C/svg%3E',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

// // Blue icon for the "From" location
// const blueIcon = new L.Icon({
//   iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg width="25" height="41" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="41" r="10" fill="%230000ff" /%3E%3C/svg%3E',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

// function MyMap() {
//   const [userLocation, setUserLocation] = useState({
//     latitude: -25.7479, // Fallback latitude (Pretoria)
//     longitude: 28.2293, // Fallback longitude (Pretoria)
//   });
//   const [fromLocation, setFromLocation] = useState(null);
//   const [toLocation, setToLocation] = useState(null);
//   const [fromQuery, setFromQuery] = useState('');
//   const [toQuery, setToQuery] = useState('');
//   const [fromSuggestions, setFromSuggestions] = useState([]);
//   const [toSuggestions, setToSuggestions] = useState([]);
//   const [locationEnabled, setLocationEnabled] = useState(false);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//         setLocationEnabled(true);
//       },
//       (error) => {
//         console.error('Error getting location: ', error);
//         alert('Please enable location services to use the map.');
//       }
//     );
//   }, []);

//   const handleSearch = async () => {
//     if (!locationEnabled) {
//       alert('Please enable location services to search for a location.');
//       return;
//     }

//     // Search for "From" location
//     if (fromQuery.trim() !== '') {
//       try {
//         const fromResponse = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fromQuery)}`
//         );
//         const fromResults = await fromResponse.json();
//         if (fromResults && fromResults.length > 0) {
//           const { lat, lon } = fromResults[0];
//           setFromLocation({
//             latitude: parseFloat(lat),
//             longitude: parseFloat(lon),
//           });
//         } else {
//           alert('From location not found. Please try a different search query.');
//         }
//       } catch (error) {
//         console.error('Error during "From" search:', error);
//         alert('Error during "From" search. Please try again.');
//       }
//     }

//     // Search for "To" location
//     if (toQuery.trim() !== '') {
//       try {
//         const toResponse = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(toQuery)}`
//         );
//         const toResults = await toResponse.json();
//         if (toResults && toResults.length > 0) {
//           const { lat, lon } = toResults[0];
//           setToLocation({
//             latitude: parseFloat(lat),
//             longitude: parseFloat(lon),
//           });
//         } else {
//           alert('To location not found. Please try a different search query.');
//         }
//       } catch (error) {
//         console.error('Error during "To" search:', error);
//         alert('Error during "To" search. Please try again.');
//       }
//     }
//   };

//   const fetchSuggestions = async (query, setSuggestions) => {
//     if (query.trim() === '') {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
//       );
//       const results = await response.json();
//       setSuggestions(results);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   const handleFromQueryChange = (e) => {
//     const query = e.target.value;
//     setFromQuery(query);
//     fetchSuggestions(query, setFromSuggestions);
//   };

//   const handleToQueryChange = (e) => {
//     const query = e.target.value;
//     setToQuery(query);
//     fetchSuggestions(query, setToSuggestions);
//   };

//   const handleSuggestionClick = (suggestion, setQuery, setLocation) => {
//     const { lat, lon, display_name } = suggestion;
//     setQuery(display_name);
//     setLocation({
//       latitude: parseFloat(lat),
//       longitude: parseFloat(lon),
//     });
//     setFromSuggestions([]); // Clear suggestions after selection
//     setToSuggestions([]);
//   };

//   return (
//     <div>
//       <br/>
//       <div style={{ padding: '10px', textAlign: 'center', marginTop: '10px' }}>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
//           <div style={{ position: 'relative' }}>
//             <input
//               type="text"
//               value={fromQuery}
//               onChange={handleFromQueryChange}
//               placeholder="From location"
//               style={{ padding: '5px', width: '200px' }}
//             />
//             {fromSuggestions.length > 0 && (
//               <ul
//                 style={{
//                   listStyleType: 'none',
//                   padding: '0',
//                   margin: '0',
//                   position: 'absolute',
//                   backgroundColor: 'white',
//                   width: '200px',
//                   maxHeight: '100px',
//                   overflowY: 'auto',
//                   border: '1px solid #ccc',
//                   zIndex: 1000,
//                 }}
//               >
//                 {fromSuggestions.map((suggestion) => (
//                   <li
//                     key={suggestion.place_id}
//                     style={{ padding: '5px', cursor: 'pointer' }}
//                     onClick={() => handleSuggestionClick(suggestion, setFromQuery, setFromLocation)}
//                   >
//                     {suggestion.display_name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <div style={{ position: 'relative' }}>
//             <input
//               type="text"
//               value={toQuery}
//               onChange={handleToQueryChange}
//               placeholder="To location"
//               style={{ padding: '5px', width: '200px' }}
//             />
//             {toSuggestions.length > 0 && (
//               <ul
//                 style={{
//                   listStyleType: 'none',
//                   padding: '0',
//                   margin: '0',
//                   position: 'absolute',
//                   backgroundColor: 'white',
//                   width: '200px',
//                   maxHeight: '100px',
//                   overflowY: 'auto',
//                   border: '1px solid #ccc',
//                   zIndex: 1000,
//                 }}
//               >
//                 {toSuggestions.map((suggestion) => (
//                   <li
//                     key={suggestion.place_id}
//                     style={{ padding: '5px', cursor: 'pointer' }}
//                     onClick={() => handleSuggestionClick(suggestion, setToQuery, setToLocation)}
//                   >
//                     {suggestion.display_name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <button onClick={handleSearch} style={{ padding: '5px 10px' }}>
//             Search
//           </button>
//         </div>
//       </div>

//       <MapContainer
//         center={fromLocation ? [fromLocation.latitude, fromLocation.longitude] : [userLocation.latitude, userLocation.longitude]}
//         zoom={13}
//         style={{ height: '90vh', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//         />

//         {/* Marker for "From" search location */}
//         {fromLocation && (
//           <Marker
//             position={[fromLocation.latitude, fromLocation.longitude]}
//             icon={blueIcon}
//           >
//             <Popup>From: {fromQuery}</Popup>
//           </Marker>
//         )}

//         {/* Marker for "To" search location */}
//         {toLocation && (
//           <Marker
//             position={[toLocation.latitude, toLocation.longitude]}
//             icon={redIcon}
//           >
//             <Popup>To: {toQuery}</Popup>
//           </Marker>
//         )}

//         {/* Add routing control */}
//         {fromLocation && toLocation && <Routing fromLocation={fromLocation} toLocation={toLocation} />}

//         <ChangeMapView coords={fromLocation || userLocation} />
//       </MapContainer>
//     </div>
//   );
// }

// function ChangeMapView({ coords }) {
//   const map = useMap();
//   map.setView([coords.latitude, coords.longitude], map.getZoom());

//   return null;
// }

// function Routing({ fromLocation, toLocation }) {
//   const map = useMap();

//   useEffect(() => {
//     if (!fromLocation || !toLocation) return;

//     const routingControl = L.Routing.control({
//       waypoints: [
//         L.latLng(fromLocation.latitude, fromLocation.longitude),
//         L.latLng(toLocation.latitude, toLocation.longitude)
//       ],
//       routeWhileDragging: true,
//       geocoder: L.Control.Geocoder.nominatim()
//     }).addTo(map);

//     // Cleanup function to remove routingControl safely
//     return () => {
//       if (map && routingControl) {
//         map.removeControl(routingControl);
//       }
//     };
//   }, [fromLocation, toLocation, map]);

//   return null;
// }

// export default MyMap;
