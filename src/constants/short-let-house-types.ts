// IHOUSE TYPE DROPDOWN
const houseType = [
  {
    id: "BUNGALOW",
    name: "Bungalow",
  },
  {
    id: "TERRACE",
    name: "Terrace",
  },
  {
    id: "FLAT",
    name: "Flat",
  },
  {
    id: "APARTMENT",
    name: "Apartment",
  },
  {
    id: "DETACHED_BUNGALOW",
    name: "Detached Bungalow",
  },
  {
    id: "SEMI_DETACHED_BUNGALOW",
    name: "Semi-detached Bungalow",
  },
  {
    id: "DUPLEX",
    name: "Duplex",
  },
  {
    id: "SUITE",
    name: "Suite",
  },
  {
    id: "DETACHED_DUPLEX",
    name: "Detached Duplex",
  },
  {
    id: "SEMI_DETACHED_DUPLEX",
    name: "Semi Detached Duplex",
  },
  {
    id: "TRIPLEX",
    name: "Triplex ",
  },
  {
    id: "DETACHED_TRIPLEX",
    name: "Detached Triplex ",
  },
  {
    id: "SEMI_DETACHED_TRIPLEX",
    name: "Semi Detached Triplex",
  },
  {
    id: "MASSIONETTE",
    name: "Massionette ",
  },
  {
    id: "QUADRUPLEX",
    name: "Quadruplex ",
  },
  {
    id: "TOWN_HOUSE",
    name: "Townhouse  ",
  },
  {
    id: "TWIN_VILLA",
    name: "Twin Villa  ",
  },
  {
    id: "VILLA",
    name: "Villa  ",
  },
];

export const houseTypes = houseType
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));
