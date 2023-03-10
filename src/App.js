import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./nav";
import { lightTheme,darkTheme } from "./utils/theme";

const Container=styled.div``;
  
const Wrapper=styled.div`
background-color:${({theme})=>theme.bg};
`;
function App() {
  const[darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Wrapper>
        videos
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </Wrapper>
    </Container>
    </ThemeProvider>
  );
}

export default App;
