export type State = {
  id: string;
  name: string;
  code: string | null;
  dateCreated: string;
  citiesCount: number;
  country: null;
};

export type City = {
  id: string;
  name: string;
  stateId: string;
  dateCreated: string;
  state: State;
  popularLandMark: string | null;
  popularLandMarkLongitude: number;
  popularLandMarkLatitude: number;
};
