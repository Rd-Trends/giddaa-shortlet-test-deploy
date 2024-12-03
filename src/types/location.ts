export type City = {
  id: string;
  name: string;
  stateId: string;
  dateCreated: string;
  state: {
    id: string;
    name: string;
    code: string | null;
    dateCreated: string;
    citiesCount: number;
    country: null;
  };
  popularLandMark: string | null;
  popularLandMarkLongitude: number;
  popularLandMarkLatitude: number;
};
