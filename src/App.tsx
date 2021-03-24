import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import './App.css';
import Search from "./Components/Search/Search";
import Map from "./Components/Map/Map";
import Alert from "./Components/Alert/Alert";
// import { VineyardData, VineyardDispatchTypes } from './store/types';
import { setAlert} from "./store/actions/alertActions";
import Loader from "./Components/Loader/Loader";
import {getVineyardAction, setLoading, setError} from "./store/actions/vineyardActions";

function App() {
  const dispatch = useDispatch();
  const vineyardData = useSelector((state: RootState) => state.vineyard.data);
  const loading = useSelector((state: RootState) => state.vineyard.loading);
  const error = useSelector((state: RootState) => state.vineyard.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  
  useEffect(() =>{
    dispatch(setLoading());
dispatch(getVineyardAction())
  },[])
  
  return (
  <div className="App">
<Search 
// title = "Enter city name & press search button"
/>
{alertMsg && <Alert message={alertMsg} onClose={()=> dispatch(setAlert(""))}/>}
{error && <Alert message={error} onClose={()=> dispatch(setError())}/>}

{loading? <Loader />: vineyardData && <Map data={vineyardData}/>}

  </div>
  );
}
export default App;
