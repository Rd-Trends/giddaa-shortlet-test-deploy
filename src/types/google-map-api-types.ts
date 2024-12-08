export type MapLocationResponse = {
  results: Array<{
    address_components: Array<{
      long_name: string;
      short_name: string;
      types: Array<string>;
    }>;
    formatted_address: string;
    geometry: {
      bounds: {
        northeast: {
          lat: number;
          lng: number;
        };
        southwest: {
          lat: number;
          lng: number;
        };
      };
      location: {
        lat: number;
        lng: number;
      };
      location_type: string;
      viewport: {
        northeast: {
          lat: number;
          lng: number;
        };
        southwest: {
          lat: number;
          lng: number;
        };
      };
    };
    place_id: string;
    types: Array<string>;
  }>;
  status: string;
};

export type GooglePlaceDetails = {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      south: number;
      west: number;
      north: number;
      east: number;
    };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  photos: Array<{
    height: number;
    html_attributions: Array<string>;
    width: number;
  }>;
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  reference: string;
  scope: string;
  types: Array<string>;
  vicinity: string;
  html_attributions: Array<string>;
  rating?: number;
  user_ratings_total?: number;
};

export type GoogleTrafficData = {
  time: string;
  duration: number;
  traffic: string;
};

export type Coordinates = {
  lat: number;
  lng: number;
};
