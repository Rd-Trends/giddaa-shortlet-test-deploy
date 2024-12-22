import { useFilterStore } from "@/app/providers/home-page-filter-provider";
import { Filter } from "@/types/api";
import { useMemo } from "react";

export const useFilter = () => {
  const types = useFilterStore((state) => state.types);
  const services = useFilterStore((state) => state.services);
  const uses = useFilterStore((state) => state.uses);
  const features = useFilterStore((state) => state.features);
  const city = useFilterStore((state) => state.city);
  const bedrooms = useFilterStore((state) => state.bedrooms);
  const bathrooms = useFilterStore((state) => state.bathrooms);
  const houseType = useFilterStore((state) => state.houseTypes);
  const minimumPrice = useFilterStore((state) => state.minimumPrice);
  const maximumPrice = useFilterStore((state) => state.maximumPrice);
  const cautionFee = useFilterStore((state) => state.cautionFee);

  const advancedFilter = useMemo(() => {
    const filter: Filter[] = [];

    if (types.length > 0 && !types.includes("all")) {
      filter.push({
        connector: "AND",
        field: "Type",
        action: "equals",
        value: types.join(", "),
      });
    }

    if (services.length > 0 && !services.includes("all")) {
      filter.push({
        connector: "AND",
        field: "Services.Service",
        action: "equals",
        value: services.join(", "),
      });
    }

    if (uses.length > 0 && !uses.includes("all")) {
      filter.push({
        connector: "AND",
        field: "Uses.Use",
        action: "equals",
        value: uses.join(", "),
      });
    }

    if (features.length > 0) {
      features.forEach((a) => {
        filter.push({
          connector: "AND",
          field: `Features.${capitalizeFirstLetter(a)}`,
          action: "equals",
          value: true,
        });
      });
    }

    if (city) {
      filter.push({
        connector: "AND",
        field: "CityId",
        action: "equals",
        value: city,
      });
    }

    if (bedrooms) {
      filter.push({
        connector: "AND",
        field: "NumberOfBedroom",
        action: "equals",
        value: bedrooms.toString(),
      });
    }

    if (bathrooms) {
      filter.push({
        connector: "AND",
        field: "NumberOfBathroom",
        action: "equals",
        value: bathrooms.toString(),
      });
    }

    if (houseType.length > 0 && !houseType.includes("all")) {
      filter.push({
        connector: "AND",
        field: "BuildingType",
        action: "equals",
        value: houseType.join(", "),
      });
    }

    if (minimumPrice) {
      filter.push({
        connector: "AND",
        field: "OfferingPrice",
        action: "greatThan",
        value: minimumPrice.toString(),
      });
    }

    if (maximumPrice) {
      filter.push({
        connector: "AND",
        field: "OfferingPrice",
        action: "lessThan",
        value: maximumPrice.toString(),
      });
    }

    if (!!cautionFee) {
      filter.push({
        connector: "AND",
        field: "CautionFee",
        action: cautionFee === "yes" ? "greatThan" : "lessThan",
        value: 1,
      });
    }

    return filter;
  }, [
    types,
    services,
    uses,
    features,
    city,
    bedrooms,
    bathrooms,
    houseType,
    minimumPrice,
    maximumPrice,
    cautionFee,
  ]);

  return advancedFilter;
};

// capitalize the first letter of a string
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
