import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { VineyardData } from "../../store/types";
import { SearchWrapper, SearchInput } from "./Search.elements";
import { Button } from "../../styles/globalStyles";
interface SearchProps {
  data?: VineyardData;
}

function Search({ data }: SearchProps) {
  const [search, setSearch] = useState({});
  return (
    <>
      <SearchWrapper>
        <SearchInput type="datetime-local" value="date"></SearchInput>
        <SearchInput
          type="text"
          placeholder="Sussex"
          value="city"
        ></SearchInput>
        <SearchInput
          type="text"
          placeholder="grape"
          value="grapes"
        ></SearchInput>
        <Button primary fontBig>
          {" "}
          Plan Your Visit
        </Button>
      </SearchWrapper>
    </>
  );
}

export default Search;
