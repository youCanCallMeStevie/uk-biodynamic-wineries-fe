import React from "react";
import { VineyardInfo } from "../../store/types";
import { Avatar, Image, Container } from "../../styles/globalStyles";
import { ListingWrapper } from "./Listing.elements";
import { Link } from "react-router-dom";

interface ListingProps {
  listing?: VineyardInfo;
}

function Listing({ listing }: ListingProps) {
  return (
    <Container>
      <ListingWrapper>
        <Link to={`/vineyard/${listing?._id}`}>
          <Avatar>
            <Image src={listing?.images[0]} />
          </Avatar>
        </Link>
        <Link to={`/vineyard/${listing?._id}`}>
          <h1>{listing?.name}</h1>
        </Link>
        <p>{listing?.address.city}</p>
        <p>{listing?.bio}</p>
      </ListingWrapper>
    </Container>
  );
}

export default Listing;
