import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListingWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
background: rgba(255, 255, 255, 0.1);
border: 2px solid #c06014;
text-decoration: none;
img{
    width: 50px;
    height: 50px
};
p{
    margin-left: 20px;
    font-size: 16px;
    letter-spacing: 0.05em;

};
margin-bottom: 20px;
@media screen and (max-width: 990px) {
    p{
        display: none;
    }
}
`;

export const LinkedName = styled(Link)`
color: white;
text-decoration: none;
letter-spacing: 0.1em;
&:hover {
      color: #c06014;
      transition: all 0.3s ease;
    }
`