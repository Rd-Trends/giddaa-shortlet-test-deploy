import { ShortLetCardLoader } from "@/components/shared/Cards/ShortLetCard";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 ">
      {Array.from({ length: 4 }).map((_, index) => (
        <ShortLetCardLoader key={index} />
      ))}
    </div>
  );
};

export default Loading;
