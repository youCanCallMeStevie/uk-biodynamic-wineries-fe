import axios from "axios";
import { SearchQuery } from "../interfaces";
import { VineyardData } from "../../store/types";
const { REACT_APP_API_URI } = process.env;



export const fetchSavedVineyards = async () => {
  try {
    const vineyards = await axios.get(`${REACT_APP_API_URI}/api/vineyards/me`, {
      withCredentials: true,
    });
    return vineyards.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getAllVineyards = async () => {
  try {
    const vineyards = await axios.get(`${REACT_APP_API_URI}/api/vineyards`);
    return vineyards.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createVineyard = async () => {
  try {
    const vineyard = await axios.get(`${REACT_APP_API_URI}/api/vineyards`, {
      withCredentials: true,
    });
    return vineyard.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOneVineyard = async (vineyardId: string) => {
  try {
    const vineyard = await axios.get(
      `${REACT_APP_API_URI}/api/vineyards/${vineyardId}`
    );
    return vineyard.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editVineyard = async (vineyardId: string, data: VineyardData) => {
  try {
    const vineyard = await axios.put(
      `${REACT_APP_API_URI}/api/vineyards/${vineyardId}`,
      data,
      {
        withCredentials: true,
      }
    );
    return vineyard.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteVineyard = async (vineyardId: string) => {
  try {
    const vineyard = await axios.delete(
      `${REACT_APP_API_URI}/api/vineyards/${vineyardId}`,
      {
        withCredentials: true,
      }
    );
    return vineyard.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const fetchTodaysMoon = async() => {
  try {
    const moonInfo = await axios.get(
      `${REACT_APP_API_URI}/api/vineyards/today/mooninfo`
    );
    console.log("moonInfo.data.moonInfo.bioObject", moonInfo.data.moonInfo.bioObject)
    return moonInfo.data.moonInfo.bioObject;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export const searchVineyards = async (query: SearchQuery) => {
  try {
    const { grapes, date, city } = query;
    if (!grapes && !date && !city)
      throw new Error("You need to specify a query.");
    //wrap with try catch as need to handle error!!!! make sure user selects one query
console.log("process.env.REACT_APP_API_URI",process.env.REACT_APP_API_URI )
    const vineyard = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/vineyards/search/results?` + grapes &&
        `&grapes=${grapes}` + date &&
        `&date=${date}` + city &&
        `&city=${city}`
    );
    return vineyard.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const likeAVineyard = async (vineyardId: string) => {
  try {
    const post = await axios.post(
      `${REACT_APP_API_URI}/api/vineyards/${vineyardId}/like`,
      {
        withCredentials: true,
      }
    );
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const unlikeAVineyard = async (vineyardId: string) => {
  try {
    const post = await axios.put(
      `${REACT_APP_API_URI}/api/vineyards/${vineyardId}/unlike`,
      {
        withCredentials: true,
      }
    );
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
