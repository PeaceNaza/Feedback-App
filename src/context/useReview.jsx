import { useContext } from "react";
import { ReviewsContext } from "./ReviewContext";

export const useReviews = () => {
  return useContext(ReviewsContext);
};
