import { City } from "./location";
import { User } from "./user";

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
  maxGuestNumber: number;
  minBookingDays: number;
  bathroomType: string;
  category: string;
  buildingType: string;
  relationshipType: string;
  pricingType: string;
  listingPrice: number;
  offeringPrice: number;
  cautionFee: number;
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
  rules: Array<ShortLetHouseRules>;
  features: Array<ShortLetFeatures>;
  bookings: number;
  isVerified: boolean;
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

type ShortLetHouseRules = {
  id: string;
  name: string;
  description: string;
  extraProperties: string;
};

export type ShortLetFeatures = {
  id: string;
  name: string;
  icon: string | null;
  hasWashingMachine: boolean;
  hasPoPCeiling: boolean;
  hasDryer: boolean;
  hasAirConditioning: boolean;
  hasHighSpeedInternet: boolean;
  hasWineCeller: boolean;
  hasEnsuite: boolean;
  hasWifi: boolean;
  hasSmartHomeTechnology: boolean;
  hasPresingIron: boolean;
  hasOpenFloorPlan: boolean;
  hasLargeWindwos: boolean;
  hasBuiltInHouseTheater: boolean;
  hasTelevision: boolean;
  hasPoolOrSnookerTable: boolean;
  hasKettle: boolean;
  hasRefrigerator: boolean;
  hasGrantieCountertops: boolean;
  hasBreakfastBar: boolean;
  hasCookingGas: boolean;
  hasMicrowave: boolean;
  hasOven: boolean;
  hasMarbleWalls: boolean;
  hasBathtub: boolean;
  hasStandingShower: boolean;
  hasHeaterAndHotWater: boolean;
  hasPrivateBackyard: boolean;
  hasPatioOrDarkSpace: boolean;
  hasLandscapedGarden: boolean;
  hasSwimmingPool: boolean;
  hasSnokerArea: boolean;
  hasHomeOfficeSpace: boolean;
  hasBuiltInShelfOrBookSpace: boolean;
  hasAmpleNaturalLight: boolean;
  hasCCTVSurveillanceSystem: boolean;
  hasGatedCompound: boolean;
  hasHighBrowArea: boolean;
  hasArmedGuards: boolean;
  hasBulletProofDoors: boolean;
  hasBurglaryProofWindows: boolean;
};

export type ReserveShortLetPayload = {
  guest: {
    type?: string;
    firstName: string;
    withInNigeria?: boolean;
    address?: string;
    occupation?: string;
    contactMethod?: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  cautionFee: number;
  bookingFee: number;
  shortletId: string;
  parentBookingId: string;
  numberOfDays: number;
  contactMethod: string;
  isPaid: boolean;
};

export type ShortLetBooking = {
  id: string;
  dateCreated: string;
  createdBy: string;
  guest: {
    id: string;
    type: string;
    firstName: string;
    withInNigeria: boolean;
    lastName: string;
    contactMethod: string | null;
    occupation: string | null;
    email: string;
    phoneNumber: string;
    customer: User | null;
    bookings: Array<ShortLetBooking>;
  };
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  cautionFee: number;
  bookingFee: number;
  totalFee: number;
  numberOfDays: number;
  isPaid: boolean;
  contactMethod: string;
  shortlet: ShortLet;
  extendedBookings: Array<ShortLetBooking>;
  customer: User | null;
  transaction: ShortLetBookingTransaction | null;
};

export type ShortLetBookingTransaction = {
  id: string;
  rrr: string;
  transactionType: string;
  amount: number;
  organizationAmount: number;
  giddaaAmount: number;
  defaultAmount: number;
  application: string | null;
  customer: User | null;
  mortgagePlan: string | null;
  house: ShortLet | null;
  dueDate: string;
  dateOfPayment: string;
  isPaid: boolean;
  paymentItem: string | null;
  merchantCode: string;
};
