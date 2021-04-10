import React, { useState, useEffect } from "react";
import { MoonData, SET_SEARCH_PERFORMED } from "../../store/types";
import { searchBioDate } from "../../utils/Api/vineyardApi";
import {
  SearchWrapper,
  DayHeading,
  SearchContainer,
} from "../Search/Search.elements";
import {
  Subtitle,
  TextWrapper,
  TopLine,
} from "../InfoBanner/InfoBanner.elements";
import { Button, Container, Input } from "../../styles/globalStyles";
import { SearchQuery } from "../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

interface DateProps {
  moonInfo?: MoonData;
}

function DateSearch({ moonInfo }: DateProps) {
  const moment = require("moment");
  const dispatch = useDispatch();
  const { searchPerformed } = useSelector((state: RootState) => state.vineyard);
  const [date, setDate] = useState("");
  const [searchDate, setSearchDate] = useState({} as MoonData);
  console.log("searchDate", searchDate);
  const query = { date };

  const handleSearch = async (query: SearchQuery) => {
    try {
      let results = await searchBioDate(query);
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
      <TopLine>Plan your visit:</TopLine>
      {searchPerformed && searchDate !== undefined && (
        //   <div></div>
        <>
          <Subtitle>
            {console.log("searchDate?.bioDay", searchDate?.bioDay)}
            It will be {searchDate?.bioDay} Day on your visit{" "}
            {moment(searchDate?.resultsDate?.date).format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}
            , as the moon will be in {searchDate?.zodiac} which is known for{" "}
            {searchDate?.house}. The moon will be in {searchDate?.moonPhase}.{" "}
            {searchDate?.moonPhase !== "Full" &&
              `The next full moon, after your visit, will happen on ${moment(
                searchDate?.nextFullMoon?.date
              ).format("dddd, MMMM Do")}. `}
            {searchDate && searchDate?.bioDay !== "Fruit"
              ? `If you want to wait for a fruit day to visit instead, it will be
            ${searchDate?.nextFruitDay}.`
              : `This is a great day & time to visit, as wine will be at it's fullest expression.`}
          </Subtitle>
        </>
      )}
      <Input
        type="datetime-local"
        value={date && date}
        onChange={e => setDate(e.target.value.toString())}
      ></Input>

      <Button
        // primary
        fontBig
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.preventDefault();
          handleSearch(query);
        }}
      >
        Tell Me About the Day!
      </Button>
    </>
  );
}

export default DateSearch;
