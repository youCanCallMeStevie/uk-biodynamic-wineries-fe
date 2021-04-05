import styled from "styled-components";

export const ListingWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
background: rgba(255, 255, 255, 0.1);
border: 2px solid #F5A831;
text-decoration: none;
img{
    width: 50px;
    height: 50px
};
p{
    margin-left: 20px;
};
margin-bottom: 20px;
@media screen and (max-width: 990px) {
    p{
        display: none;
    }
}
`;