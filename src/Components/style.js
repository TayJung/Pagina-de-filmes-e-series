import Styled from "styled-components";

//estilização da Header
export const ContainerHeader = Styled.section`
display: flex;
justify-content: space-around;
align-items: center;

width:100%;
heigth:15vh;
background-color:#8B658B;
h1{
  font-size:2.5em;
}
`;

export const BoxNavegacao = Styled.nav`

width:60%;
 ul{
  display:flex;
  justify-content: space-around;
  align-items: center;
 }
 li{
   font-size:1.5em;
   

 }
`;
