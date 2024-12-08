import { useGetGMapPlaceOpeningHours } from "@/apis/queries/google-maps";

function LocationOpeningHours({ placeId }: { placeId: string }) {
  const { data, isLoading, isFetched } = useGetGMapPlaceOpeningHours(placeId);

  return (
    <div className=" p-4">
      {/* <h2>Opening Hours</h2> */}
      {!isLoading && data && (
        <>
          <ul className="flex flex-col gap-y-4">
            {data?.weekday_text &&
              data?.weekday_text?.map((dayHours, index) => {
                const [day, hours] = dayHours?.split(": ");
                return (
                  <li
                    key={index}
                    className="flex gap-2 items-start text-body-subtext">
                    <span>{day}:</span>
                    <b className="flex-1 font-bold">{hours}</b>
                  </li>
                );
              })}
          </ul>
          {typeof data === "string" && <p className="font-semibold">{data}</p>}
        </>
      )}
      {!data && isFetched && <p className=" text-body-xs font-semibold">No opening hours available</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default LocationOpeningHours;
