import { City } from "./location";

export type ShortLet = {
  id: string;
  createdBy: string;
  dateCreated: string;
  name: string;
  identifer: null;
  city: City;
  address: string;
  type: string;
  longitude: number;
  latitude: number;
  numberOfBathroom: number;
  numberOfBedroom: number;
  bathroomType: string;
  category: string;
  buildingType: string;
  relationshipType: string;
  pricingType: string;
  listingPrice: number;
  offeringPrice: number;
  videoUrl: string;
  images: Array<{
    id: string;
    document: string;
    optionId: string;
  }>;
  landmark: string;
  description: string;
  checkInTime: string;
  checkOutTime: string;
  checkInMethod: string;
  checkInProcess: string;
  checkOutProcess: string;
  cancellationPolicy: string;
  extentionPolicy: string;
  refundPolicy: string;
  uses: Array<ShortLetUses>;
  services: Array<ShortLetService>;
  rules: Array<string>;
  features: Array<string>;
  bookings: number;
};

type ShortLetService = {
  id: string;
  description: string;
  name: string;
  extraProperties: string;
};

type ShortLetUses = {
  id: string;
  description: string;
  name: string;
  extraProperties: string;
};
