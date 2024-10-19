import { toast } from "react-toastify";
import { setReviews } from "./reviewSlice";
import { getBurrowsAction } from "../burrow/burrowActions";
import { createReview, updateReview, getReviews } from "./reviewAxiosHelper";

// get user burrows
export const getReviewsAction = () => async (dispatch) => {
  const result = await getReviews();

  if (result?.status === "success") {
    dispatch(setReviews(result.data));
  }
};
// create a review
export const createReviewAction = (reviewObj) => async (dispatch) => {
  const result = await createReview(reviewObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  // once a revew is submitted, we refetch burrows
  dispatch(getBurrowsAction());
};
// update a review
export const updateReviewAction = (reviewObj, book_id) => async (dispatch) => {
  const result = await updateReview(reviewObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success("Review updated successfully.");
  dispatch(getReviewsAction(book_id));
};
