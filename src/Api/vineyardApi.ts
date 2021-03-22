import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const fetchSavedVineyards = async ()=>{
    try {
        const vineyards = await axios.get(`${REACT_APP_API_URI}/api/vineyards/me`, 
        {
          withCredentials: true,
        }
        );
        return vineyards.data;
      } catch (error) {
        console.log(error);
        return null;
      }
}
export const getAllVineyards = async () => {
  try {
    const vineyards = await axios.get(`${REACT_APP_API_URI}/api/vineyards`);
    return vineyards.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createVineyard= async () => {
    try {
      const vineyard = await axios.get(
        `${REACT_APP_API_URI}/api/vineyards`,
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

export const getOneVineyard= async (vineyardId: any) => {
    try {
      const vineyard = await axios.get(
        `${REACT_APP_API_URI}/api/vineyards/${vineyardId}`,
        // {
        //   withCredentials: true,
        // }
      );
      return vineyard.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  export const editVineyard= async (vineyardId: any) => {
    try {
      const vineyard = await axios.put(
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

  export const deleteVineyard= async (vineyardId: any) => {
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

  export const searchVineyards = async (query: any) => {
    try {
      const vineyard = await axios.get(
        `${REACT_APP_API_URI}/api/vineyards/search/results?city=${query.city}&grapes=${query.grapes}`,
        // {
        //   withCredentials: true,
        // }
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
  
