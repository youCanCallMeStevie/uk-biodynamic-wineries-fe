import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Map from "../Components/Map/Map";
import { RootState } from "../store";



function Home() {
    const details = useSelector((state: RootState) => state.vineyard.data);

    return (
        <div>
            
            {details!.vineyards && (<Map data={details} />)}
\        </div>
    )
}

export default Home
