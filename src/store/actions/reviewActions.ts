import { Dispatch } from "redux";


import {
  getVineyardReviews,
  newReview,
  editReview,
  deleteReview,
//   likeAReview,
//   unlikeAReview,
} from "../../utils/Api/reviewApi";

import {
  REVIEW_SUCCESS,
  REVIEW_LOADING,
  REVIEW_ERROR,
//   REVIEW_LIKE_SUCCESS,
  ReviewDispatchTypes,
  ReviewData,
} from "../types";

import { Review } from "../../utils/interfaces";


export const getVineyardReviewsAction = (vineyardId: string) => async (
  dispatch: Dispatch<ReviewDispatchTypes>
) => {
  try {
    dispatch({
      type: REVIEW_LOADING,
    });
    const vineyardReviews = await getVineyardReviews(vineyardId);
    if (vineyardReviews) {
      dispatch({
        type: REVIEW_SUCCESS,
        payload: vineyardReviews,
      });
      return vineyardReviews;
    } else throw Error;
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
      payload: {
        error_msg: "No reviews for this vineyard",
      },
    });
  }
};

export const newReviewAction = (data: ReviewData, vineyardId: string) => async (
  dispatch: Dispatch<ReviewDispatchTypes>
) => {
  try {
    dispatch({
      type: REVIEW_LOADING,
    });
    const review = await newReview(data, vineyardId);
    console.log("newReviewAction review", review);
    if (review) {
      dispatch(await getVineyardReviews(vineyardId));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
      payload: {
        error_msg: "Error posting this review",
      },
    });
  }
};

export const editReviewAction = (data: Review, vineyardId: string) => async (
  dispatch: Dispatch<ReviewDispatchTypes>
) => {
  try {
    dispatch({
      type: REVIEW_LOADING,
    });
    const review = await editReview(data, vineyardId);
    if (review) {
      dispatch(await getVineyardReviews(vineyardId));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
      payload: {
        error_msg: "Error editing this review",
      },
    });
  }
};

export const deleteReviewAction = (data: Review, vineyardId: string) => async (
  dispatch: Dispatch<ReviewDispatchTypes>
) => {
  try {
    dispatch({
      type: REVIEW_LOADING,
    });
    const review = await deleteReview(data, vineyardId);
    if (review) {
      dispatch(await getVineyardReviews(vineyardId));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
      payload: {
        error_msg: "Error deleting this review",
      },
    });
  }
};
