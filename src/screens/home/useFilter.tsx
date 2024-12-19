// import { useMemo, useState } from "react";

// export const useFilter = () => {
//   const [type, setType] = useState([]);
//   const [services, setServices] = useState([]);
//   const [uses, setUses] = useState([]);
//   const [amenities, setAmenities] = useState([]);
//   const [houseType, setHouseType] = useState([]);
//   const [securityFeatures, setSecurityFeatures] = useState([]);
//   const [city, setCity] = useState("");
//   const [bedrooms, setBedrooms] = useState(0);
//   const [bathrooms, setBathrooms] = useState(0);
//   const [minimumPrice, setMinimumPrice] = useState(0);
//   const [maximumPrice, setMaximumPrice] = useState(0);
//   const [cautionFee, setCautionFee] = useState("");

//   const advancedFilter = useMemo(() => {
//     const filter = [];

//     if (type.length > 0) {
//       type.forEach((t) => {
//         filter.push({
//           connector: "OR",
//           field: "Type",
//           action: "equals",
//           value: t,
//         });
//       });
//     }

//     if (services.length > 0) {
//       services.forEach((s) => {
//         filter.push({
//           connector: "OR",
//           field: "services",
//           action: "equals",
//           value: s,
//         });
//       });
//     }

//     if (uses.length > 0) {
//       uses.forEach((u) => {
//         filter.push({
//           connector: "OR",
//           field: "uses",
//           action: "equals",
//           value: u,
//         });
//       });
//     }

//     if (amenities.length > 0) {
//       amenities.forEach((a) => {
//         filter.push({
//           connector: "OR",
//           field: `Features.${a}`,
//           action: "equals",
//           value: true,
//         });
//       });
//     }

//     if (securityFeatures.length > 0) {
//       securityFeatures.forEach((s) => {
//         filter.push({
//           connector: "OR",
//           field: `Features.${s}`,
//           action: "equals",
//           value: true,
//         });
//       });
//     }

//     if (city) {
//       filter.push({
//         connector: "AND",
//         field: "CityId",
//         action: "equals",
//         value: city,
//       });
//     }

//     if (bedrooms) {
//       filter.push({
//         connector: "AND",
//         field: "NumberOfBedroom",
//         action: "equals",
//         value: bedrooms,
//       });
//     }

//     if (bathrooms) {
//       filter.push({
//         connector: "AND",
//         field: "NumberOfBathroom",
//         action: "equals",
//         value: bathrooms,
//       });
//     }

//     if (houseType.length > 0) {
//       houseType.forEach((h) => {
//         filter.push({
//           connector: "OR",
//           field: "BuildingType",
//           action: "equals",
//           value: h,
//         });
//       });
//     }

//     if (minimumPrice) {
//       filter.push({
//         connector: "AND",
//         field: "OfferingPrice",
//         action: "greatThan",
//         value: minimumPrice,
//       });
//     }

//     if (maximumPrice) {
//       filter.push({
//         connector: "AND",
//         field: "OfferingPrice",
//         action: "lessThan",
//         value: maximumPrice,
//       });
//     }

//     return filter;
//   }, [
//     type,
//     services,
//     uses,
//     amenities,
//     securityFeatures,
//     city,
//     bedrooms,
//     bathrooms,
//     houseType,
//     minimumPrice,
//     maximumPrice,
//     cautionFee,
//   ]);

//   return {
//       filter: advancedFilter,
      
      
//   };
// };
