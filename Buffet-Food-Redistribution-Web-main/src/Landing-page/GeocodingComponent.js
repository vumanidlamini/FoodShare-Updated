// // import React from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import L from 'leaflet';

// // // Fix Leaflet's default icon issue with Webpack
// // delete L.Icon.Default.prototype._getIconUrl;
// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
// //   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // });

// // const donorLocations = [
// //   {
// //     id: 1,
// //     name: 'Donor Location 1',
// //     position: [40.712776, -74.005974],
// //     info: 'Available Monday to Friday from 10am to 4pm.'
// //   },
// //   {
// //     id: 2,
// //     name: 'Donor Location 2',
// //     position: [34.052235, -118.243683],
// //     info: 'Available Monday to Friday from 9am to 3pm.'
// //   },
// //   // Add more donor locations as needed
// // ];

// // const MapComponent = () => {
// //   return (
// //     <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: "80vh", width: "100%" }}>
// //       <TileLayer
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //       />
// //       {donorLocations.map(location => (
// //         <Marker key={location.id} position={location.position}>
// //           <Popup>
// //             <h6>{location.name}</h6>
// //             <p>{location.info}</p>
// //           </Popup>
// //         </Marker>
// //       ))}
// //     </MapContainer>
// //   );
// // };

// // export default MapComponent;




// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import L from 'leaflet';

// // Custom Bootstrap icon markers
// const donorIcon = new L.DivIcon({
//   html: '<i class="bi bi-geo-alt-fill" style="font-size: 2rem; color: red;"></i>',
//   className: 'custom-donor-icon',
//   iconSize: [30, 42],
//   iconAnchor: [15, 42],
//   popupAnchor: [0, -42],
// });

// const recipientIcon = new L.DivIcon({
//   html: '<i class="bi bi-geo-alt" style="font-size: 2rem; color: green;"></i>',
//   className: 'custom-recipient-icon',
//   iconSize: [30, 42],
//   iconAnchor: [15, 42],
//   popupAnchor: [0, -42],
// });

// // Component to adjust map view
// const FitBounds = ({ bounds }) => {
//   const map = useMap();
//   map.fitBounds(bounds);
//   return null;
// };

// const GeocodingComponent = () => {
//   const [donorAddress, setDonorAddress] = useState('');
//   const [recipientAddress, setRecipientAddress] = useState('');
//   const [donorCoordinates, setDonorCoordinates] = useState({ lat: null, lng: null });
//   const [recipientCoordinates, setRecipientCoordinates] = useState({ lat: null, lng: null });
//   const [directions, setDirections] = useState([]);

//   const handleGeocode = async (address, setCoordinates) => {
//     try {
//       const response = await axios.get('https://nominatim.openstreetmap.org/search', {
//         params: {
//           q: address,
//           format: 'json',
//         },
//       });

//       if (response.data.length > 0) {
//         const { lat, lon } = response.data[0];
//         setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
//       } else {
//         alert('Location not found');
//       }
//     } catch (error) {
//       console.error('Error during geocoding:', error);
//     }
//   };

//   const fetchDirections = async () => {
//     try {
//       if (donorCoordinates.lat && recipientCoordinates.lat) {
//         const response = await axios.get('https://api.openrouteservice.org/v2/directions/foot-walking', {
//           params: {
//             start: `${donorCoordinates.lng},${donorCoordinates.lat}`,
//             end: `${recipientCoordinates.lng},${recipientCoordinates.lat}`,
//             api_key: 'YOUR_OPENROUTESERVICE_API_KEY', // Replace with your OpenRouteService API key
//           },
//         });
//         const route = response.data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
//         setDirections(route);
//       }
//     } catch (error) {
//       console.error('Error fetching directions:', error);
//     }
//   };

//   const findLocations = () => {
//     handleGeocode(donorAddress, setDonorCoordinates);
//     handleGeocode(recipientAddress, setRecipientCoordinates);
//   };

//   const bounds = [
//     [donorCoordinates.lat || 0, donorCoordinates.lng || 0],
//     [recipientCoordinates.lat || 0, recipientCoordinates.lng || 0]
//   ];

//   return (
//     <div>
//       <input
//         type="text"
//         value={donorAddress}
//         onChange={(e) => setDonorAddress(e.target.value)}
//         placeholder="Enter donor's address"
//         style={{ marginBottom: '10px' }}
//       />
//       <input
//         type="text"
//         value={recipientAddress}
//         onChange={(e) => setRecipientAddress(e.target.value)}
//         placeholder="Enter recipient's address"
//         style={{ marginBottom: '10px' }}
//       />
//       <button onClick={() => { findLocations(); fetchDirections(); }} style={{ marginBottom: '20px' }}>Find Locations</button>

//       {(donorCoordinates.lat && donorCoordinates.lng) || (recipientCoordinates.lat && recipientCoordinates.lng) ? (
//         <MapContainer
//         center={[39.8283, -98.5795]} zoom={4} style={{ height: "80vh", width: "100%" }}
//           center={[(donorCoordinates.lat + recipientCoordinates.lat) / 2, (donorCoordinates.lng + recipientCoordinates.lng) / 2]}
//           zoom={13}
//           scrollWheelZoom={false}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           {donorCoordinates.lat && donorCoordinates.lng && (
//             <Marker position={[donorCoordinates.lat, donorCoordinates.lng]} icon={donorIcon}>
//               <Popup>
//                 Donor's Location: {donorAddress}
//               </Popup>
//             </Marker>
//           )}
//           {recipientCoordinates.lat && recipientCoordinates.lng && (
//             <Marker position={[recipientCoordinates.lat, recipientCoordinates.lng]} icon={recipientIcon}>
//               <Popup>
//                 Recipient's Location: {recipientAddress}
//               </Popup>
//             </Marker>
//           )}
//           {directions.length > 0 && (
//             <Polyline positions={directions} color="blue" weight={5} opacity={5} />
//           )}
//           <FitBounds bounds={bounds} />
//         </MapContainer>
//       ) : null}
//     </div>
//   );
// };

// export default GeocodingComponent;