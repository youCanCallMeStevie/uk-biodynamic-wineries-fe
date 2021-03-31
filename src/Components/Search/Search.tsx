import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { VineyardData } from "../../store/types";
import { SearchContainer, SearchInput, SearchWrapper } from "./Search.elements";
import { Button } from "../../styles/globalStyles";
import { SearchQuery } from "../../utils/interfaces";
import { useDispatch } from "react-redux";
import { searchVineyardsAction } from "../../store/actions/vineyardActions";
interface SearchProps {
  data?: VineyardData;
}

function Search({ data }: SearchProps) {
  const dispatch = useDispatch();
  const [grapes, setGrapes] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const query = { grapes, city, date };

  const handleSearch = async (query: SearchQuery) => {
    try {
      const res = await dispatch(searchVineyardsAction(query));

      setGrapes("");
      setCity("");
      setDate("");
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchInput
            type="datetime-local"
            value={date && date}
            onChange={e => setDate(e.target.value.toString())}
          ></SearchInput>
          <SearchInput
            type="text"
            placeholder="Sussex"
            value={city && city}
            onChange={e => setCity(e.target.value)}
          ></SearchInput>
          <SearchInput
            type="text"
            placeholder="grape"
            value={grapes && grapes}
            onChange={e => setGrapes(e.target.value)}
          ></SearchInput>
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
      </SearchContainer>
    </>
  );
}

export default Search;
