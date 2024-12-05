// import React, { useCallback, useMemo, useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   MarkerF,
//   useJsApiLoader,
//   StreetViewPanorama,
//   Libraries,
// } from "@react-google-maps/api";
// import WalkIcon from "@/svgs/WalkIcon";

// type MapContainerProps = {
//   location?: { lat: number; lng: number };
//   styles?: React.CSSProperties;
//   hasLaodingGoogleApis?: boolean;
//   errorLoadingGoogleApis?: Error;
// };

// const MapContainer = ({
//   location,
//   styles,
//   hasLaodingGoogleApis,
//   errorLoadingGoogleApis,
// }: MapContainerProps) => {
//   const [isStreetViewVisible, setStreetViewVisible] = useState(false);

//   const mapStyles = {
//     height: "400px",
//     width: "100%",
//     borderRadius: "20px 20px 0 0",
//     ...styles,
//   };

//   const mapCenter = useMemo(() => {
//     return location ? { lat: location.lat, lng: location.lng } : null;
//   }, [location]);

//   const handleStreetViewClick = () => {
//     setStreetViewVisible(!isStreetViewVisible);
//   };

//   if (errorLoadingGoogleApis) {
//     return "An errror occured";
//   }

//   if (!hasLaodingGoogleApis) {
//     return "Loading....";
//   }

//   if (!mapCenter) {
//     return "No location provided";
//   }

//   return (
//     <div className="relative">
//       {location && (
//         <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={mapCenter}>
//           {isStreetViewVisible && (
//             <StreetViewPanorama options={streetViewOptions} />
//           )}
//           <MarkerF
//             position={mapCenter}
//             onLoad={() => console.log("Marker Loaded")}
//           />
//         </GoogleMap>
//       )}

//       <div
//         className="absolute top-3 right-24 z-[1] cursor-pointer max-w-[140px] h-[58px] rounded-full"
//         onClick={handleStreetViewClick}>
//         <div className="relative w-full">
//           <img
//             src={"/images/street-view.png"}
//             alt="Toggle Street View"
//             className="object-cover rounded-full"
//           />
//           <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 flex gap-2 whitespace-nowrap text-white">
//             <WalkIcon />
//             <span className="font-bold giddaa-normal-text-two">
//               {isStreetViewVisible ? "Close View" : "Street View"}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Map/Satellite toggle */}
//       {/* <div className="absolute top-4 left-4 bg-white rounded-full shadow-md">
//         <button className="px-4 py-2 bg-green-800 text-white rounded-l-full">MAP</button>
//         <button className="px-4 py-2 text-gray-700 rounded-r-full">SATELITE</button>
//       </div> */}

//       {/* Street View thumbnail */}
//       {/* <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md overflow-hidden">
//         <img src="street-view-thumb.jpg" alt="Street View" className="w-32 h-20 object-cover" />
//         <p className="text-xs p-2">Street View</p>
//       </div> */}

//       {/* Zoom controls */}
//       {/* <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
//         <button className="w-10 h-10 bg-green-500 text-white rounded-full">+</button>
//         <button className="w-10 h-10 bg-green-500 text-white rounded-full">-</button>
//       </div> */}
//     </div>
//   );
// };

// export default MapContainer;