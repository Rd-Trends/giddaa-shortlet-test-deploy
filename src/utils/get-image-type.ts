export const getImageType = (id: string) => {
  // id is in form of e.g "BALCONY_SHORTLET_IMAGE_TYPE" | "BATH_ROOM_SHORTLET_IMAGE_TYPE"
  // remove the _SHORTLET_IMAGE_TYPE and return the rest

  return id
    .replace("_SHORTLET_IMAGE_TYPE", "")
    .replace(/_/g, " ")
    .toLowerCase();
};
