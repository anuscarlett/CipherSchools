import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
width:360px;
margin-bottom:45px;
cursor:pointer;
overflow: hidden;
`;
const Image=styled.img`
width:95%;
height:202px;
border-radius:8px;
`;
const Texts=styled.div``;

const Title=styled.h1`
font-size:16px;
font-weigth:500;
color:${({theme})=>theme.text};
`;
const Info=styled.div`
color:${({theme})=>theme.text}
`;


const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container><Image src="https://havecamerawilltravel.com/wp-content/uploads/2020/01/youtube-thumbnails-size-header-1-678x381@2x.png"/>
        <Texts>
           <Title>Test Title</Title>
           <Info>haha this is video</Info>
        </Texts>
        </Container>
        </Link>
    );
}
 
export default Card;