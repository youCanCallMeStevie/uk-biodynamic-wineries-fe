import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
// import './App.css';
import Home from "./Pages/Home/Home";
import Vineyard from "./Pages/VineyardProfile/Vineyard";
import Alert from "./Components/Alert/Alert";
// import { VineyardData, VineyardDispatchTypes } from './store/types';
import { setAlert } from "./store/actions/alertActions";
import Loader from "./Components/Loader/Loader";
import BarNav from "./Components/BarNav/BarNav";
import { fetchTodaysMoonAction } from "./store/actions/moonActions";

import {
  getVineyardAction,
  setLoading,
  setError,
} from "./store/actions/vineyardActions";
import GlobalStyles from "./styles/globalStyles";
import Footer from "./Components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const moonPhase = moonInfo?.moonPhase;
  const vineyardData = useSelector((state: RootState) => state.vineyard.data);
  const loading = useSelector((state: RootState) => state.vineyard.loading);
  const error = useSelector((state: RootState) => state.vineyard.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getVineyardAction());
    dispatch(fetchTodaysMoonAction());
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyles />
      <BarNav />
      {loading ? (
        <Loader />
      ) : (
        vineyardData && (
          <>
            <Route path="/" exact component={Home} />
            <Footer moonPhase={moonPhase} />
          </>
        )
      )}
      {loading ? (
        <Loader />
      ) : (
        vineyardData && (
          <>
            <Route path="/:vineyardId" exact component={Vineyard} />
            <Footer moonPhase={moonPhase} />
          </>
        )
      )}
      {/* {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />} */}
    </Router>
  );
}
export default App;
