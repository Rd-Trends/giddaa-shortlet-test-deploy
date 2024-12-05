// import React, { useEffect, useState } from "react";

// function LocationOpeningHours({ placeId }) {
//   const [openingHours, setOpeningHours] = useState(null);

//   useEffect(() => {
//     const getPlaceDetails = () => {
//       const service = new window.google.maps.places.PlacesService(
//         document.createElement("div")
//       );

//       const request = {
//         placeId: placeId,
//         fields: ["opening_hours"],
//       };

//       service.getDetails(request, (place, status) => {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//           if (place.opening_hours) {
//             setOpeningHours(place.opening_hours);
//           } else {
//             setOpeningHours("Opening hours not available");
//           }
//         } else {
//           console.error("Error fetching place details:", status);
//           setOpeningHours("Error fetching opening hours");
//         }
//       });
//     };

//     if (window.google && window.google.maps) {
//       getPlaceDetails();
//     } else {
//       console.error("Google Maps JavaScript API not loaded");
//     }
//   }, [placeId]);

//   return (
//     <div className=" p-4">
//       {/* <h2>Opening Hours</h2> */}
//       {openingHours ? (
//         <>
//           <ul className="flex flex-col gap-y-5">
//             {openingHours?.weekday_text &&
//               openingHours?.weekday_text?.map((dayHours, index) => {
//                 const [day, hours] = dayHours?.split(": ");
//                 return (
//                   <li
//                     key={index}
//                     className="flex gap-2 items-center giddaa-small-text-two">
//                     <span className="">{day}:</span>
//                     <span className="flex-1 font-bold">{hours}</span>
//                   </li>
//                 );
//               })}
//           </ul>
//           {!openingHours?.hasOwnProperty("weekday_text") && (
//             <p className="font-semibold">{openingHours}</p>
//           )}
//         </>
//       ) : (
//         <p className=" text-body-subtext">Loading opening hours...</p>
//       )}
//     </div>
//   );
// }

// export default LocationOpeningHours;
