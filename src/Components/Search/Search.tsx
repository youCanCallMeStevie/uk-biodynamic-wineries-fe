import React, { useState, useMemo, useEffect } from "react";
import { VineyardData, SET_POSITION, MoonData } from "../../store/types";
import { SearchWrapper, DayHeading, SearchContainer } from "./Search.elements";
import { Button, Container, Input } from "../../styles/globalStyles";
import { SearchQuery } from "../../utils/interfaces";
import { useDispatch } from "react-redux";
import { toggleModalActions } from "../../store/actions/modalActions";
import { searchVineyardsAction } from "../../store/actions/vineyardActions";
import { Listing } from "../index";

interface SearchProps {
  data?: VineyardData;
  moonInfo?: MoonData;
}

function Search({ data, moonInfo }: SearchProps) {
  const dispatch = useDispatch();

  const [showListings, setShowListings] = useState(false);
  const [grapes, setGrapes] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const query = { grapes, city, date };

  // useEffect(() => {
  //   console.log("useEffect showListings", showListings);
  // }, [showListings]);

  const handleListings = useMemo(() => {
    if (showListings === false) {
      return <></>;
    } else {
      return (
        <>
          {data &&
            data.vineyards &&
            data.vineyards.map(vineyard => (
              <Listing key={vineyard._id} listing={vineyard} />
            ))}
        </>
      );
    }
  }, [showListings]);

  const handleSearch = async (query: SearchQuery) => {
    try {
      await setShowListings(true);
      console.log("handle Search showListings1", showListings);
      await dispatch(searchVineyardsAction(query));
      dispatch({ type: SET_POSITION, payload: { center: [51.509, -0.118] } });
      // await setShowListings(true);
      // console.log("handle Search showListings2", showListings);
      setGrapes("");
      setCity("");
      setDate("");
      // console.log("data", data!.vineyards.length);
      // if (data!.vineyards.length == 0) {
      //   dispatch(dispatch(toggleModalActions(true, "alert")));
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SearchContainer>
        <Container>
          <SearchWrapper>
            <DayHeading>Today is: A {moonInfo?.bioDay} Day</DayHeading>

            {/* <Input
              type="datetime-local"
              value={date && date}
              onChange={e => setDate(e.target.value.toString())}
            ></Input> */}
            <Input
              type="text"
              placeholder="Sussex"
              value={city && city}
              onChange={e => setCity(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="grape"
              value={grapes && grapes}
              onChange={e => setGrapes(e.target.value)}
            ></Input>

            <Button
              primary
              fontBig
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                handleSearch(query);
              }}
            >
              Plan Your Visit
            </Button>
          </SearchWrapper>
          {handleListings}
        </Container>
      </SearchContainer>
    </>
  );
}

export default Search;
