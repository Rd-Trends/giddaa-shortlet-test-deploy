import { useMutation } from "@tanstack/react-query";
import { JOIN_NEWSLETTER_KEY } from "../constants/keys";
import { joinNewsLetter } from "../services/news-letter";

export const useJoinNewsLetter = () => {
  return useMutation({
    mutationKey: [JOIN_NEWSLETTER_KEY],
    mutationFn: joinNewsLetter,
  });
};
