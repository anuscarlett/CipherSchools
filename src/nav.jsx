import React from "react";
import styled from "styled-components";
import cipher from "./img/logo.png";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FlashlightOnRoundedIcon from '@mui/icons-material/FlashlightOnRounded';

const Container=styled.div`
background-color:${({theme})=>theme.bg};
color:${({theme})=>theme.text};
height:100px;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
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
align-items:center;
height:50px;
`;

const Item=styled.div`
  display:inline-block;
  
  cursor:pointer;
`;
const Navbar = ({darkMode,setDarkMode}) => {
    return ( 
        <Container>
            <Wrapper>
             <Logo>
                <Img src={cipher}/>
                CipherSchools
             </Logo>
             <Item>
               <HomeRoundedIcon/>
                Home
             </Item>
             <Item onClick={()=>setDarkMode(!darkMode)}>
               <FlashlightOnRoundedIcon/>
                Light Mode
             </Item>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;