// import React, { useState } from "react";
// import NearbyPlacesCard from "./NearbyPlacesCard";
// import MapContainer from "../MapContainer";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerHeader,
//   DrawerTitle,
// } from "@/components/ui/Drawer";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/Tooltip";
// import { IoMdClose } from "react-icons/io";
// import Container from "@/components/layouts/Container";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/Toggle";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
// import { cn } from "@/utils/classname";

// // Define a mapping for types to display names
// const typeMapping = {
//   gas_station: "Fueling Station",
//   lodging: "Hotel",
// };

// const getDisplayName = (type: string) =>
//   typeMapping[type as keyof typeof typeMapping] || type;

// type LocationDetailsProps = {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
//   coordinates: {
//     lat: number;
//     lng: number;
//   };
//   house: {
//     name: string;
//     address: string;
//   };
//   places: Record<string, unknown[]>;
// };

// const LocationDetails = ({
//   isOpen,
//   setIsOpen,
//   coordinates,
//   house,
//   places,
// }: LocationDetailsProps) => {
//   const tabs = Object.keys(places)?.map((place) => ({
//     name: place,
//     displayName: getDisplayName(place),
//   }));

//   const [activeTab, setActiveTab] = useState(tabs[0]?.name);

//   // const findDisplayName = () => {
//   //   return tabs?.find((tab) => tab.name === activeTab)?.displayName;
//   // };

//   return (
//     // <FullScreenModal
//     //   title={"Location Information"}
//     //   subtext={`Places close to ${house?.name} located at ${house?.address}`}
//     //   onClose={onClose}
//     //   children2={
//     //     <div className="flex-1 h-[85svh] overflow-y-auto scrollbar-none lg:mt-16  lg:relative sticky bottom-0 left-0 w-full min-h-[225px] lg:min-h-auto block lg:hidden">
//     //       <MapContainer
//     //         location={coordinates}
//     //         styles={{
//     //           minHeight: "662px",
//     //           maxHeight: "662px",
//     //           borderRadius: "20px 20px 20px 20px",
//     //         }}
//     //       />
//     //     </div>
//     //   }>
//     //   <div className="flex lg:flex-row lg:justify-center items-center flex-col justify-between h-svh lg:h-auto gap-8 pb-0 lg:pb-16">
//     //     <div className="max-w-[100vw] lg:max-w-[558px] h-[85svh] overflow-y-auto scrollbar-none mt-12">
//     //       <div className="flex gap-x-4 border-b border-[#F0F0F0] overflow-x-auto scrollbar-none mb-16 z-10 sticky top-0 bg-white">
//     //         {tabs.map((tab) => {
//     //           return (
//     //             <TabSection
//     //               key={tab.name}
//     //               name={tab.name}
//     //               activeTab={activeTab}
//     //               setActiveTab={setActiveTab}
//     //               displayName={tab.displayName}
//     //             />
//     //           );
//     //         })}
//     //       </div>

//     //       <h3 className="mb-8 giddaa-small-text-two text-[#4B4B4B] text-center lg:text-left">
//     //         <span className="capitalize">{findDisplayName()}</span> within{" "}
//     //         <span className="font-bold">2 kilometres</span> of {house?.name}{" "}
//     //         located at {house?.address}
//     //       </h3>

//     //       <div className="flex flex-col md:flex-row items-center md:items-stretch md:flex-wrap md:justify-center lg:justify-start gap-4">
//     //         {places[activeTab]?.map((business, index) => (
//     //           <NearbyPlacesCard key={index} business={business} />
//     //         ))}
//     //       </div>
//     //     </div>
//     //     <div className="flex-1 h-[85svh] overflow-y-auto scrollbar-none lg:mt-16  lg:relative sticky bottom-0 left-0 w-full min-h-[225px] lg:min-h-auto hidden lg:block">
//     //       <MapContainer
//     //         location={coordinates}
//     //         styles={{
//     //           minHeight: "662px",
//     //           maxHeight: "662px",
//     //           borderRadius: "20px 20px 20px 20px",
//     //         }}
//     //       />
//     //     </div>
//     //   </div>
//     // </FullScreenModal>
//     <Drawer open={isOpen} onOpenChange={setIsOpen}>
//       <DrawerContent className=" flex flex-col overflow-y-auto">
//         <DrawerHeader className={"border-b border-midGrey pb-4"}>
//           <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
//             Where You’ll Stay
//           </DrawerTitle>
//           <DrawerDescription className=" text-center text-body-md text-charcoal-grey pt-1">
//             Places close to {house?.name} located at {house?.address}
//           </DrawerDescription>

//           <Tooltip>
//             <TooltipTrigger asChild>
//               <DrawerClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-primary hover:ring-primary hover:ring-offset-2 focus:ring-offset-2 disabled:pointer-events-none bg-white data-[state=open]:text-black p-0.5">
//                 <IoMdClose strokeWidth={10} className="size-4" />
//                 <span className="sr-only">Close</span>
//               </DrawerClose>
//             </TooltipTrigger>
//             <TooltipContent
//               sideOffset={8}
//               side="bottom"
//               align="end"
//               className="text-xs">
//               Close
//             </TooltipContent>
//           </Tooltip>
//         </DrawerHeader>
//         <Container className="py-2.5 border-b border-mid-grey">
//           <ToggleGroup
//             type="single"
//             variant={"default"}
//             size="sm"
//             className="border border-primary bg-white w-fit rounded-full p-0.5 mx-auto">
//             <ToggleGroupItem value="a" className="px-4">
//               MAP VIEW
//             </ToggleGroupItem>
//             <ToggleGroupItem value="b" className="px-4">
//               STREET VIEW
//             </ToggleGroupItem>
//           </ToggleGroup>
//         </Container>

//         <div className=" flex-1 overflow-y-auto xl:flex flex-row items-start ">
//           <Tabs
//             defaultValue={activeTab}
//             onValueChange={(value) => {
//               setActiveTab(value);
//             }}
//             className="xl:w-5/12 flex flex-col h-full overflow-y-auto">
//             <TabsList className=" px-4 md:px-6 lg:px-6 xl:px-10">
//               {tabs.map((tab) => (
//                 <TabsTrigger
//                   className="px-0 pb-0.5 h-10 items-end"
//                   key={tab.name}
//                   value={tab.name}>
//                   {tab.displayName}
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             {tabs.map((tab) => (
//               <TabsContent
//                 value={tab.name}
//                 key={tab.name}
//                 className={cn(
//                   " px-4 md:px-6 lg:px-6 xl:px-10 flex-1 overflow-y-auto pb-6",
//                   {
//                     hidden: tab.name !== activeTab,
//                   }
//                 )}>
//                 <h3 className="mt-2 mb-6 text-body-sm text-[#4B4B4B] text-center lg:text-left">
//                   <span className="capitalize">{tab.displayName}</span> within 2
//                   kilometres of {house?.name} located at {house?.address}
//                 </h3>

//                 {/* <div className="grid md:grid-cols-2 gap-4">
//                   {places[tab.name]?.map((business, index) => (
//                     <NearbyPlacesCard key={index} business={business} />
//                   ))}
//                 </div> */}
//               </TabsContent>
//             ))}
//           </Tabs>

//           <div className="flex-1 ">
//             <MapContainer
//               location={coordinates}
//               styles={{
//                 // minHeight: "662px",
//                 // maxHeight: "662px",
//                 borderRadius: "20px 20px 20px 20px",
//               }}
//             />
//           </div>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default LocationDetails;
