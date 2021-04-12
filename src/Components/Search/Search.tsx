import React, { useState, useMemo, useEffect } from "react";
import {
  VineyardData,
  SET_POSITION,
  MoonData,
  SET_SEARCH_PERFORMED,
} from "../../store/types";
import { SearchWrapper, DayHeading, SearchContainer } from "./Search.elements";
import { Button, Container, Input } from "../../styles/globalStyles";
import { SearchQuery } from "../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../../store/actions/modalActions";
import { searchVineyardsAction } from "../../store/actions/vineyardActions";
import { Listing } from "../index";
import { RootState } from "../../store";

interface SearchProps {
  data?: VineyardData;
  moonInfo?: MoonData;
}

function Search({ moonInfo }: SearchProps) {
  const dispatch = useDispatch();
  const { data, searchPerformed } = useSelector(
    (state: RootState) => state.vineyard
  );
  const [grapes, setGrapes] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const query = { grapes, city, date };

  const handleSearch = async (query: SearchQuery) => {
    try {
      await dispatch(searchVineyardsAction(query, true));

      dispatch({ type: SET_SEARCH_PERFORMED, payload: true });
      setGrapes("");
      setCity("");
      setDate("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("data.vineyards.length", data?.vineyards.length);
    if (data && data!.vineyards.length === 0) {
      dispatch(toggleModalActions(true, "alert"));
    }
  }, []);

  return (
    <>
      <SearchContainer>
        <Container>
          <SearchWrapper>
            <DayHeading>Today's a {moonInfo?.bioDay} Day</DayHeading>
            <Input
              type="text"
              placeholder="Search by city or region"
              value={city && city}
              onChange={e => setCity(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="Search by grape"
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
          </SearchWrapper>{" "}
          <>
            {searchPerformed &&
              data &&
              data.vineyards &&
              data.vineyards.map(vineyard => (
                <Listing key={vineyard._id} listing={vineyard} />
              ))}
          </>{" "}
        </Container>
      </SearchContainer>
    </>
  );
}

export default Search;
