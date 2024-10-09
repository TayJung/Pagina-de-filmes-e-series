import React, { Component } from "react";
import Filmes from "../Image/filmes.png";
import { BoxImage, ContainerMain, Image } from "../Styles/style";

export default class Main extends Component {
  render() {
    return (
      <ContainerMain>
        <BoxImage>
          <Image src={Filmes} alt="Filmes" title="Filmes e Series" />
        </BoxImage>
      </ContainerMain>
    );
  }
}
