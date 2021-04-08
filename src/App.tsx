import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
// import './App.css';
import Home from "./Pages/Home/Home";
import User from "./Pages/UserProfile/User";
import Vineyard from "./Pages/Vineyard/Vineyard";
import Alert from "./Components/Alert/Alert";
// import { VineyardData, VineyardDispatchTypes } from './store/types';
import Loader from "./Components/Loader/Loader";
import BarNav from "./Components/BarNav/BarNav";
import { fetchTodaysMoonAction } from "./store/actions/moonActions";
import { getVineyardAction, setLoading } from "./store/actions/vineyardActions";
import GlobalStyles from "./styles/globalStyles";
import Footer from "./Components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const bioType = moonInfo?.bioDay;
  const moonPhase = moonInfo?.moonPhase;
  const vineyardData = useSelector((state: RootState) => state.vineyard);
  const loading = useSelector((state: RootState) => state.vineyard.loading);
  const error = useSelector((state: RootState) => state.vineyard.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getVineyardAction());
    dispatch(fetchTodaysMoonAction());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />

      <Router>
        <BarNav moonPhase={moonPhase} bioType={bioType} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>{loading ? <Loader /> : <>{vineyardData && <Home />}</>}</>
              );
            }}
          />
          <Route exact path="/vineyard/:vineyardId" component={Vineyard} />
          <Route exact path="/me" component={User} />
        </Switch>
        <Footer moonPhase={moonPhase} />
        {/* {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />} */}
      </Router>
    </>
  );
}
export default App;
