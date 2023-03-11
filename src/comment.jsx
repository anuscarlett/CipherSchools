import React from 'react';
import styled from 'styled-components';
const Container =styled.div`
display:flex;
gap:10px;
margin:30px 0px;
`;
const Details=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;
const Name=styled.div`
font-size:14px;
font-weight:500;
`;
const Text=styled.div`
margin-right:38px;
font-size:14px;
font-weight:400;
`;
const Comment=()=>{
    return(
        <Container>
            <Details>
                <Name>
                    Anu
                </Name>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptates nisi provident odio, modi explicabo nihil. Nulla excepturi, molestiae, fugit rem vero nostrum vitae nihil quae quibusdam velit impedit voluptatem.
                </Text>
            </Details>
        </Container>
    )
}

export default Comment