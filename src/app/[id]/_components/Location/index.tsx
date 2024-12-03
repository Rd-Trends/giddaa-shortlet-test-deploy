// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import { IoLocationOutline } from "react-icons/io5";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import MapBankIcon from "@/svgs/MapBankIcon";
// import MapSuperMarketIcon from "@/svgs/MapSuperMarketIcon";
// import MapHospitalIcon from "@/svgs/MapHospitalIcon";
// import MapFuelStationIcon from "@/svgs/MapFuelStationIcon";
// import MapChurchIcon from "@/svgs/MspChurchIcon";
// import MapMosqueIcon from "@/svgs/MapMosqueIcon";
// import MapHotelIcon from "@/svgs/MapHotelIcon";
// import MapSchoolIcon from "@/svgs/MapSchoolIcon";
// import MapRestaurantIcon from "@/svgs/MapRestaurantIcon";
// import MapContainer from "../MapContainer";
// import { DistanceMatrixService, useJsApiLoader } from "@react-google-maps/api";
// import Input from "@/components/ui/Input";
// import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
// import SkeletonLoader from "@/components/ui/Skeleton";
// import { useGetCitiesInAState } from "@/apis/queries/location";
// import { ShortLet } from "@/types/short-let";
// import {
//   useGetGMaplocation,
//   useGetGMapNearbyPlaces,
//   useGetGMapTrafficData,
// } from "@/apis/queries/google-maps";
// import LocationDetails from "./LocationDetails";

// type SingleHouseLocationProps = {
//   address: string;
//   city: ShortLet["city"];
// };

// const placeTypes = [
//   { type: "bank" },
//   { type: "supermarket" },
//   { type: "hospital" },
//   { type: "gas_station" },
//   { type: "church" },
//   { type: "mosque" },
//   { type: "lodging" },
//   { type: "school" },
//   { type: "restaurant" },
// ];

// const HouseLocation = ({ address, city }: SingleHouseLocationProps) => {
//   const [showTrafficData, setShowTrafficData] = useState(false);
//   const [showLandMarks, setShowLandMarks] = useState(false);

//   const [destination, setDestination] = useState("");
//   const [driveTime, setDriveTime] = useState<string | null>(null);
//   const [walkTime, setWalkTime] = useState<string | null>(null);

//   const [showMapFull, setShowMapFull] = useState(false);
//   const [pl, setPlaces] = useState({});
//   const [trafficData, setTrafficData] = useState({});
//   const [sortedData, setSortedData] = useState({});

//   const { isLoaded: hasLoadedGoogleApis, loadError: errorLoadingGoogleApis } =
//     useJsApiLoader({
//       googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
//       libraries: ["places"],
//     });

//   const { data: citiesData, isLoading: isLoadingCities } = useGetCitiesInAState(
//     { stateId: city?.stateId },
//     {
//       enabled: showLandMarks && !!city?.stateId,
//     }
//   );

//   const { data: coordinates, isLoading: isLoadingCoordinates } =
//     useGetGMaplocation(address);

//   // const {} = useGetGMapNearbyPlaces(coordinates);
//   // const {} = useGetGMapTrafficData(coordinates);

//   const cities = citiesData?.value ?? [];

//   const fetchNearbyPlaces = async (location) => {
//     if (!window.google || !window.google.maps || !window.google.maps.places) {
//       console.error("Google Maps JavaScript API is not loaded");
//       return;
//     }
//     const resultdata = [];

//     try {
//       const map = new window.google.maps.Map(document.createElement("div"));
//       const service = new window.google.maps.places.PlacesService(map);
//       for (const place of placeTypes) {
//         const request = {
//           location: new window.google.maps.LatLng(location.lat, location.lng),
//           radius: 2000,
//           types: [place.type],
//           fields: ["opening_hours"],
//         };
//         service.nearbySearch(request, (results, status) => {
//           if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//             resultdata[place.type] = results;
//           } else {
//             return null;
//           }
//         });
//       }
//       console.log(resultData);
//       setPlaces(resultdata);
//     } catch (err) {
//       console.error("Error fetching nearby places:", err);
//     }
//   };

//   const fetchTrafficData = async (coordinates) => {
//     if (!window.google) return;

//     const times = ["08:00:00", "12:00:00", "16:00:00", "20:00:00"];
//     const trafficConditions = [];

//     for (const time of times) {
//       // Convert time to seconds since midnight
//       const [hours, minutes] = time?.split(":")?.map(Number);
//       let departureTime = new Date();
//       departureTime.setHours(hours, minutes, 0, 0);

//       // If the time is in the past, set it to tomorrow
//       if (departureTime < new Date()) {
//         departureTime.setDate(departureTime.getDate() + 1);
//       }

//       // Define multiple relevant destinations
//       const destinations = [
//         new window.google.maps.LatLng(
//           coordinates.lat + 0.01,
//           coordinates.lng + 0.01
//         ),
//         new window.google.maps.LatLng(
//           coordinates.lat - 0.01,
//           coordinates.lng - 0.01
//         ),
//         new window.google.maps.LatLng(
//           coordinates.lat + 0.05,
//           coordinates.lng + 0.05
//         ),
//         new window.google.maps.LatLng(
//           coordinates.lat - 0.05,
//           coordinates.lng - 0.05
//         ),
//         // Add more destinations as needed
//       ];

//       const service = new window.google.maps.DistanceMatrixService();
//       const request = {
//         origins: [
//           new window.google.maps.LatLng(coordinates.lat, coordinates.lng),
//         ],
//         destinations: destinations,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//         drivingOptions: {
//           departureTime: departureTime,
//           trafficModel: "bestguess",
//         },
//       };

//       service.getDistanceMatrix(request, (response, status) => {
//         if (status === "OK" && response.rows[0].elements[0].status === "OK") {
//           const element = response?.rows[0]?.elements[0];
//           const duration = element?.duration_in_traffic?.value;
//           // Determine traffic level based on duration
//           let trafficLevel;
//           if (duration > 1800) trafficLevel = "Heavy Traffic";
//           else if (duration > 900) trafficLevel = "Medium Traffic";
//           else trafficLevel = "Light Traffic";

//           trafficConditions.push({
//             time: time.slice(0, 5),
//             duration: Math.round(duration / 60),
//             traffic: trafficLevel,
//           });
//           if (trafficConditions.length === times.length) {
//             setTrafficData(trafficConditions);
//             let sortedData = trafficConditions?.slice()?.sort((a, b) => {
//               const order = ["08:00", "12:00", "16:00", "20:00"];
//               return order.indexOf(a.time) - order.indexOf(b.time);
//             });
//             setSortedData(sortedData);
//           }
//         } else {
//           console.error("Error fetching traffic data:", status);
//           return null;
//         }
//       });
//     }
//   };

//   useEffect(() => {
//     if (coordinates) {
//       console.log("fetching data");
//       fetchTrafficData(coordinates);
//       fetchNearbyPlaces(coordinates);
//     }
//   }, [coordinates]);

//   const places = {
//     // dummy data
//     bank: [
//       {
//         name: "Access Bank",
//         vicinity: "Ikeja",
//         rating: 4.5,
//         user_ratings_total: 100,
//         icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bank-71.png",
//       },
//       {
//         name: "GT Bank",
//         vicinity: "Ikeja",
//         rating: 4.5,
//         user_ratings_total: 100,
//         icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bank-71.png",
//       },
//     ],
//   };

//   const amenities = [
//     {
//       name: "Bank",
//       icon: <MapBankIcon />,
//       count: places["bank"]?.length ?? 0,
//     },
//     {
//       name: "Supermarket",
//       icon: <MapSuperMarketIcon />,
//       count: places["supermarket"]?.length ?? 0,
//     },
//     {
//       name: "Hospital",
//       icon: <MapHospitalIcon />,
//       count: places["hospital"]?.length ?? 0,
//     },
//     {
//       name: "Fuelling Station",
//       icon: <MapFuelStationIcon />,
//       count: places["gas_station"]?.length ?? 0,
//     },
//     {
//       name: "Church",
//       icon: <MapChurchIcon />,
//       count: places["church"]?.length ?? 0,
//     },
//     {
//       name: "Mosque",
//       icon: <MapMosqueIcon />,
//       count: places["mosque"]?.length ?? 0,
//     },
//     {
//       name: "Hotel",
//       icon: <MapHotelIcon />,
//       count: places["lodging"]?.length ?? 0,
//     },
//     {
//       name: "School",
//       icon: <MapSchoolIcon />,
//       count: places["school"]?.length ?? 0,
//     },
//     {
//       name: "Restaurant",
//       icon: <MapRestaurantIcon />,
//       count: places["restaurant"]?.length ?? 0,
//     },
//   ];

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//     setDestination(e.target.value);
//     setWalkTime(null);
//     setDriveTime(null);
//   };

//   const handleSelect = async (address: string) => {
//     setValue(address, false);
//     setDestination(address);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       calculateDistance(lat, lng);
//     } catch (error) {
//       console.error("Error: ", error);
//     }
//   };

//   const handleSearch = async (destination: string) => {
//     setDestination(destination);
//     try {
//       const results = await getGeocode({ address: destination });
//       const { lat, lng } = getLatLng(results[0]);
//       calculateDistance(lat, lng);
//     } catch (error) {
//       console.error("Error: ", error);
//     }
//   };

//   const calculateDistance = (lat: number, lng: number) => {
//     if (!coordinates) return;
//     if (!window.google) return;

//     const service = new window.google.maps.DistanceMatrixService();
//     const origin = new window.google.maps.LatLng(
//       coordinates?.lat,
//       coordinates?.lng
//     );

//     service.getDistanceMatrix(
//       {
//         origins: [origin],
//         destinations: [{ lat, lng }],
//         travelMode: "DRIVING" as any,
//       },
//       (response, status) => {
//         if (status === "OK") {
//           setDriveTime(response?.rows[0].elements[0].duration.text!);
//         } else {
//           setDriveTime("Drive time not available");
//         }
//       }
//     );

//     service.getDistanceMatrix(
//       {
//         origins: [origin],
//         destinations: [{ lat, lng }],
//         travelMode: "WALKING" as any,
//       },
//       (response, status) => {
//         if (status === "OK") {
//           setWalkTime(response?.rows[0].elements[0].duration.text!);
//         } else {
//           setWalkTime("Walk time not available");
//         }
//       }
//     );
//   };

//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//     init,
//   } = usePlacesAutocomplete({
//     initOnMount: false,
//   });

//   useEffect(() => {
//     if (hasLoadedGoogleApis) {
//       init();
//     }
//   }, [hasLoadedGoogleApis]);

//   return (
//     <div className="mb-8">
//       <div className=" flex flex-col xl:flex-row gap-10">
//         <div className=" xl:w-[60%]">
//           <div className=" space-y-4 mb-6">
//             <p className="text-body-lg font-bold">{address}</p>
//             <p className=" text-body-sm">
//               The location of this short let is off by 2km. This is a map view
//               of the surrounding areas. The exact location and address will be
//               made available to you upon reservation.
//             </p>
//           </div>
//           <MapContainer
//             location={coordinates}
//             errorLoadingGoogleApis={errorLoadingGoogleApis}
//             hasLaodingGoogleApis={hasLoadedGoogleApis}
//           />

//           <div className="rounded-b-[20px] bg-white p-5 pb-7 border border-[#D9D9D9] border-t-0">
//             <div className="flex justify-between items-center mt-2">
//               <div className="relative">
//                 <div
//                   className="flex gap-5 items-center cursor-pointer"
//                   onClick={() => setShowLandMarks(!showLandMarks)}>
//                   {/* <DistanceIcon /> */}
//                   <p className="giddaa-normal-text-three">
//                     <span className="font-medium">
//                       {"View Distance From Popular Landmarks"}
//                     </span>
//                   </p>
//                   {showLandMarks ? (
//                     <RiArrowUpSFill style={{ color: "#335F32" }} size={20} />
//                   ) : (
//                     <RiArrowDownSFill style={{ color: "#335F32" }} size={20} />
//                   )}
//                 </div>
//                 {showLandMarks && (
//                   <div className="absolute mt-4 border-2 p-3 border-primary w-full overflow-x-auto rounded-[16px] bg-white z-10  scrollbar-none">
//                     {isLoadingCities ? (
//                       <span>Loading Cities</span>
//                     ) : (
//                       <ul
//                         className={`${
//                           cities && cities.length > 4 ? "h-[20rem]" : "h-fit"
//                         } w-full giddaa-normal-text-three text-primary bg-white scrollbar-none overflow-y-auto`}>
//                         {cities && cities.length > 0 ? (
//                           <>
//                             {cities?.map((item) => {
//                               return (
//                                 <li
//                                   key={item.id}
//                                   className="cursor-pointer px-5 py-3 hover:text-white hover:bg-primary rounded-xl giddaa-normal-text-three"
//                                   onClick={() => {
//                                     setShowLandMarks(false);
//                                     handleSearch(item?.popularLandMark);
//                                   }}>
//                                   {item?.popularLandMark}
//                                 </li>
//                               );
//                             })}
//                           </>
//                         ) : (
//                           <li className="cursor-pointer px-5 py-3 rounded-xl">
//                             No Available Popular Landmark
//                           </li>
//                         )}
//                       </ul>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div className="relative">
//                 <div
//                   className="flex gap-3 items-center cursor-pointer"
//                   onClick={() => setShowTrafficData(!showTrafficData)}>
//                   {/* <TrafficIcon /> */}
//                   <p className="giddaa-normal-text-three">
//                     <span className="font-medium">
//                       {"View Traffic Trends Around This Area"}
//                     </span>
//                   </p>
//                   {showTrafficData ? (
//                     <RiArrowUpSFill style={{ color: "#335F32" }} size={20} />
//                   ) : (
//                     <RiArrowDownSFill style={{ color: "#335F32" }} size={20} />
//                   )}
//                 </div>

//                 {showTrafficData && (
//                   <div className="absolute mt-4 border border-primary w-full max-w-[305px] overflow-x-auto rounded-[16px] bg-white z-10">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="whitespace-nowrap giddaa-small-text-one uppercase text-left font-normal">
//                           <th className="p-4 border-l-0 border-r bg-[#F9FAFB] border-[#F0F0F0]">
//                             TIME OF DAY
//                           </th>
//                           <th className="p-4 border-l border-[#F0F0F0]">
//                             AMOUNT OF TRAFFIC
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {/* {sortedData?.map((item, index) => (
//                         <tr
//                           key={index}
//                           className="border-t giddaa-normal-text-three">
//                           <td className="py-3 px-4 border-l-0 border-r border-[#F0F0F0] bg-[#F9FAFB] font-bold">
//                             {formatTimeTo12Hour(item?.time)}
//                           </td>
//                           <td className="py-3 px-4 flex items-center gap-2 border-l border-[#F0F0F0]">
//                             <div
//                               className={`w-[10px] h-[10px] rounded-full ${
//                                 item?.traffic === "Heavy Traffic"
//                                   ? "bg-[#C90000]"
//                                   : item?.traffic === "Medium Traffic"
//                                   ? "bg-[#F7B11C]"
//                                   : "bg-primary"
//                               }`}></div>
//                             <span>{item?.traffic}</span>
//                           </td>
//                         </tr>
//                       ))} */}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* {showLandMarks &&
//             <div className='max-w-[500px] mt-4 border border-primary w-full overflow-x-auto rounded-[16px] bg-white z-10  scrollbar-none'>
//               <table className='w-full'>
//                 <thead>
//                   <tr className='whitespace-nowrap giddaa-small-text-one uppercase text-left font-normal'>
//                     <th className='p-4 border-l-0 border-r bg-[#F9FAFB] border-[#F0F0F0]'>landmark</th>
//                     <th className='p-4  border-l-0 border-r border-[#F0F0F0]'>
//                       <CarIcon />
//                       <span>driving distance</span>
//                     </th>
//                     <th className='p-4  border-l-0 border-r border-[#F0F0F0]'>
//                       <WalkingIcon />
//                       <span>walking distance</span>
//                     </th>
//                     <th className='p-4 border-l border-[#F0F0F0]'>
                      
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {isLoadingCities ?
//                     <tr>
//                       <td>Loading Cities</td>
//                     </tr> :
//                     cities?.slice(0, 20)?.map((city, index) => (
//                       <tr key={index} className="border-t giddaa-normal-text-three whitespace-nowrap">
//                         <td className="py-3 px-4 border-l-0 border-r border-[#F0F0F0] bg-[#F9FAFB] font-bold">{city?.name}</td>
//                         <td className='py-3 px-4 border-l-0 border-r border-[#F0F0F0]'>{city?.name === destination ? driveTime : ''}</td>
//                         <td className='py-3 px-4 border-l-0 border-r border-[#F0F0F0] font-bold'>
//                           {city?.name === destination ? walkTime : ''}
//                         </td>
//                         <td className='py-3 px-4 flex items-center gap-2 border-l border-[#F0F0F0]'>
//                           <button className='bg-primary text-white p-3 rounded-[10px] h-[30px] flex justify-center items-center font-bold' onClick={()=>handleSearch(city.name)}>Load</button>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           } */}

//             <div className="mt-4">
//               <h3 className="text-body-tiny uppercase mb-1.5">
//                 Travel Distance
//               </h3>
//               <div className="flex items-center gap-4 w-full">
//                 <div className="flex-1 w-full">
//                   <Input
//                     label=""
//                     value={value}
//                     onChange={handleInput}
//                     disabled={!ready}
//                     className="w-full font-bold"
//                     placeholder="Enter Destination"
//                   />
//                   {status === "OK" && (
//                     <ul className="mt-2 bg-white border rounded">
//                       {data.map(({ place_id, description }) => (
//                         <li
//                           key={place_id}
//                           onClick={() => handleSelect(description)}
//                           className="p-2 hover:bg-gray-100 cursor-pointer">
//                           {description}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//                 {/* <div className='w-fit ml-auto'>
//                 <Button className='font-bold giddaa-normal-text-two' onClick={() => handleSearch(destination)}>
//                   Enter
//                 </Button>
//               </div> */}
//               </div>
//               <p className="mt-1.5 text-body-subtext text-[#4B4B4B]">
//                 Enter a destination and see how far it is from this property
//               </p>
//             </div>

//             {driveTime && walkTime && (
//               <div className="flex justify-between items-center mt-4">
//                 <div className="flex gap-3 items-center">
//                   {/* <DriveIcon /> */}
//                   <p className="giddaa-normal-text-three">
//                     <span className="font-bold text-primary">
//                       {driveTime} Drive from{" "}
//                     </span>
//                     <span className="font-semibold">{destination}</span>
//                   </p>
//                 </div>

//                 <div className="flex gap-3 items-center mr-8">
//                   {/* <WalkIcon /> */}
//                   <p className="giddaa-normal-text-three">
//                     <span className="font-bold text-primary">
//                       {walkTime} Walk from{" "}
//                     </span>
//                     <span className="font-semibold">{destination}</span>
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex-1 space-y-4">
//           <h3 className="text-body-sm font-bold">NEARBY PLACES & AMENITIES</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6">
//             {amenities.map((amenity, i) => (
//               <div
//                 className="rounded-[20px]  col-span-1 bg-white  flex flex-col justify-center items-center gap-y-5 w-full px-3 h-[124px] border border-[#D9D9D9] relative cursor-pointer"
//                 key={i}
//                 onClick={() => {
//                   // setActive(amenity.name?.toLowerCase());
//                   // setShowMapFull(true);
//                 }}>
//                 <div className="absolute top-3 right-3">
//                   <ArrowOpenIcon />
//                 </div>
//                 {amenity.icon}

//                 {/* {loading ? (
//                 <SkeletonLoader className=" w-full h-full rounded-xl" />
//               ) : (
//                 <h4 className="font-semibold giddaa-normal-text-three text-center">
//                   {(amenity.count > 0 ? amenity.count : "No Nearby") +
//                     " " +
//                     amenity.name +
//                     `${
//                       amenity.count > 1 && amenity.name === "Church"
//                         ? "es"
//                         : amenity.count > 1 && amenity.name !== "Church"
//                         ? "s"
//                         : ""
//                     }`}
//                 </h4>
//               )} */}
//               </div>
//             ))}
//           </div>

//           <div
//             onClick={() => {
//               setShowMapFull(true);
//             }}
//             className="flex items-center space-x-2 w-fit border-2 cursor-pointer border-primary2 rounded-full p-3 mb-5 text-primary2 font-bold giddaa-normal-text-two mt-8">
//             <p>View More Details</p>
//             <ArrowOpenIcon />
//           </div>
//         </div>
//       </div>

//       <LocationDetails
//         isOpen={showMapFull}
//         setIsOpen={setShowMapFull}
//         places={places}
//         coordinates={{ lat: 0, lng: 0 }}
//         house={{ name: "", address: "" }}
//       />
//     </div>
//   );
// };

// export default HouseLocation;
