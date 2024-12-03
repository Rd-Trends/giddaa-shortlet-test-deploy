import { JOIN_NEWSLETTER } from "../constants/endpoints";
import http from "../http";

export const joinNewsLetter = (email: string) => {
  return http.get(JOIN_NEWSLETTER, { params: { email } });
};
