import React, { useState, useEffect } from "react";
import {
  VineyardData,
  SET_POSITION,
  MoonData,
  SET_SEARCH_PERFORMED,
} from "../../store/types";
import { searchBioDate } from "../../utils/Api/vineyardApi";
import {
  SearchWrapper,
  DayHeading,
  SearchContainer,
} from "../Search/Search.elements";
import { Button, Container, Input } from "../../styles/globalStyles";
import { SearchQuery } from "../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalActions } from "../../store/actions/modalActions";
import { searchVineyardsAction } from "../../store/actions/vineyardActions";
import { Listing } from "../index";
import { RootState } from "../../store";

interface DateProps {
  moonInfo?: MoonData;
}

function DateSearch({ moonInfo }: DateProps) {
  const dispatch = useDispatch();
  const { searchPerformed } = useSelector((state: RootState) => state.vineyard);

  const [date, setDate] = useState("");
  const [searchDate, setSearchDate] = useState({} as MoonData);
  const query = { date };

  const handleSearch = async (query: SearchQuery) => {
    try {
      let results = await searchBioDate(query);
      console.log("results", results);
      setSearchDate(results);
      dispatch({ type: SET_SEARCH_PERFORMED, payload: true });
      setDate("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("searchDate", searchDate);
  }, [searchDate]);

  return (
    <>
      <SearchContainer>
        <Container>
          <SearchWrapper>
            <DayHeading>Today's a {moonInfo?.bioDay} Day</DayHeading>

            <Input
              type="datetime-local"
              value={date && date}
              onChange={e => setDate(e.target.value.toString())}
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
            {searchPerformed && searchDate !== undefined && (
              //   <div></div>
              <p>It will be {searchDate?.bioDay} on your visit</p>
            )}
          </>{" "}
        </Container>
      </SearchContainer>
    </>
  );
}

export default DateSearch;
