import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getVineyardReviews= async (vineyardId: any) => {
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

export const newReview = async (data: any) => {
  try {
    console.log("text api", data.text)
    console.log("postId api", data.vineyardId)

    const review = await axios.post(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${data.vineyardId}`,
      {text: data.text},
      {
        withCredentials: true,
      }
    );
  console.log("did this go through", review)
    return review.data;
    
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editReview = async (data: any, vineyardId: any ) => {
  try {
    const review = await axios.put(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${data._id}`,
      {text: data.text, vineyardId: vineyardId},
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

export const deleteReview = async (data: any, vineyardId: any) => {
  try {
    const review = await axios.delete(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${vineyardId}/${data._id}`,
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

export const likeAReview = async (reviewId: any) => {
  try {
    const review = await axios.post(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${reviewId}/like`,
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

export const unlikeAReview = async (reviewId: any) => {
  try {
    const review = await axios.put(
      `${REACT_APP_API_URI}/api/vineyards/reviews/${reviewId}/unlike`,
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
