import React from "react";
import styled from "styled-components";
import cipher from "./img/logo.png";

const Container=styled.div`
background-color:#202020;
color:white;
height:100px;
width:100vw;
`;
const Wrapper=styled.div``;
const Logo=styled.div`
display:flex;
align-items:center;
font-size:20px;
font-weight:bold;
padding:10px;
`;
const Img=styled.img`
display:flex;
align-items:end;
height:50px;
`;

const Item=styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
`;
const Navbar = () => {
    return ( 
        <Container>
            <Wrapper>
             <Logo>
                <Img src={cipher}/>
                CipherSchools
             </Logo>
             <Item>
                Home
             </Item>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;