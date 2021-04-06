import axios from "axios";
import { Review } from "../interfaces";
import { ReviewData } from "../../store/types";
const { REACT_APP_API_URI } = process.env;


export const getVineyardReviews = async (vineyardId: string) => {
  try {
    const reviews = await axios.get(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${vineyardId}`,
      {
        withCredentials: true,
      }
    );
    return reviews.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const newReview = async (data: ReviewData, vineyardId: string) => {
  try {
    console.log("text api", data.text);
    console.log("postId api", vineyardId);

    const review = await axios.post(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${vineyardId}`,
      { text: data.text },
      {
        withCredentials: true,
      }
    );
    console.log("did this go through", review);
    return review.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editReview = async (data: Review, vineyardId: string) => {
  try {
    const review = await axios.put(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${data._id}`,
      { text: data.text, vineyardId },
      {
        withCredentials: true,
      }
    );
    return review.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteReview = async (reviewData: Review, vineyardId: string) => {
  try {
    const review = await axios.delete(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${vineyardId}/${reviewData._id}`,
      {
        withCredentials: true,
      }
    );
    return review.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const likeAReview = async (reviewData: Review) => {
  try {
    const review = await axios.post(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${reviewData._id}/like`,
      {
        withCredentials: true,
      }
    );
    return review.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const unlikeAReview = async (reviewData: Review) => {
  try {
    const review = await axios.put(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${reviewData._id}/unlike`,
      {
        withCredentials: true,
      }
    );
    return review.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
