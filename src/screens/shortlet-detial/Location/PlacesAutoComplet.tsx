import Input from "@/components/ui/Input";
import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

type PlacesAutoCompletProps = {
  handleSearch: (address: string) => void;
};

const PlacesAutoComplete = ({ handleSearch }: PlacesAutoCompletProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    handleSearch(address);
  };

  return (
    <div className="mt-4">
      <h3 className="text-body-tiny uppercase mb-1.5">Travel Distance</h3>
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 w-full">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="w-full font-bold"
            placeholder="Enter Destination"
          />
          {status === "OK" && (
            <ul className="mt-2 bg-white border rounded">
              {data.map(({ place_id, description }) => (
                <li
                  key={place_id}
                  onClick={() => handleSelect(description)}
                  className="p-2 text-body-xs hover:bg-gray-100 cursor-pointer">
                  {description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className="mt-1.5 text-body-subtext text-[#4B4B4B]">
        Enter a destination and see how far it is from this property
      </p>
    </div>
  );
};

export default PlacesAutoComplete;
