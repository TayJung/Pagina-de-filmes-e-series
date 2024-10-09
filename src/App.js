import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Movies from "./service/Movies.js";
import Home from "./service/Home.js";
import Series from "./service/Series.js";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ContainerHeader, BoxNavegacao } from "./Styles/style.js";
import Styled from "styled-components";

const Links = Styled(Link)`
color:#1C1C1C;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
&:hover{
    color:#B5B5B5;
    font-size: +1.1em;
    transition: 3s ease-in-out;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
   }
`;

const GlobalStyle = createGlobalStyle` 
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
 text-decoration: none;
 list-style: none;
 font-family: 'Noto Sans TC', sans-serif; 
}
body{
  background:#363636;  
}
`;

export default class App extends Component {
  render() {
    return (
      <>
        <ContainerHeader>
          <GlobalStyle />
          <BrowserRouter>
            <Links to="/Home">
              <h1>TimeFlix</h1>
            </Links>
            <BoxNavegacao>
              <ul>
                <li>
                  <Links to="/Home">Home</Links>
                </li>
                <li>
                  <Links to="/Movies">Filmes</Links>
                </li>
                <li>
                  <Links to="/Series">Series</Links>
                </li>
              </ul>
            </BoxNavegacao>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/Series" element={<Series />} />
            </Routes>
          </BrowserRouter>
        </ContainerHeader>
      </>
    );
  }
}
