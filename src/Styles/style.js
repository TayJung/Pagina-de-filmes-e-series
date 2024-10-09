import Styled from "styled-components";

//estilização da Header
export const ContainerHeader = Styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
width:100%;
height:20vh;
position:fixed;
background-color:#8B6969;


h1{
  font-size:2.5em;
  position: fixed;
  top:5vh;
  left:6vw;  
}
`;

export const BoxNavegacao = Styled.nav`
 width:30%;
 height:10vh; 
 ul{   
  height:6vh;
  width:35vw;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left:35vw;
  top:6vh;

 }
 li{
   font-size:1.5em;
   padding:1.5em;
   
 }
`;

//Estilização da main

export const ContainerMain = Styled.section`
  display: flex;
  align-itens:center;
  justify-content: center;  
  padding-top:5rem;
  height:80vh;  
  position:fixed;  
  top:10vh;

`;
export const BoxImage = Styled.figure`
width:80vw;
height:70vh;
display:flex;
justify-content:center;
align-items: center;
`;

export const Image = Styled.img`
width: 40%;
border-radius:1.5em;
cursor: pointer;
animation: shine 5s ease-in-out infinite;
@keyframes shine {
    0% {
      filter: hue-rotate(0) opacity(1);
    }
    30% {
      filter: hue-rotate(200deg) opacity(0.8);
    }
    
    
    
    60% {
      filter:hue-rotate(290deg) opacity(0.8);
    }
    
    100% {
      filter:hue-rotate(0) opacity(1);
    }
  }
`;

//Estilização Filmes e Series

export const Container = Styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
  padding-top:2rem;
  height:80vh; 
  overflow-y:scroll;
  position:fixed;  
  top:20vh;
  &::-webkit-scrollbar{
    width: 1vw;
  }
  &::-webkit-scrollbar-track{
    background:#1C1C1C;
  }
  &::-webkit-scrollbar-thumb{
    background-color:#696969;
    border-radius:1em;
    border:3px solid #1C1C1C;
  }
  
`;

export const BoxMovies = Styled.figure`
display: flex;
flex-direction:column;
width: 25vw;
height:90vh;
align-items:center;
padding:5vh;
`;

export const Title = Styled.figcaption`
font-size: 1.2rem;
cursor: pointer;
margin-top:0.8em;
text-align:center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
&:hover{
  color:#B5B5B5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
 
}
`;
export const Sipnose = Styled.p`
font-size: 0.8rem;
width: 20vw;
text-align:center;
padding:10px;
&:hover{
  color:#B5B5B5;
  font-size: 0.9rem;
}
`;

export const ImageFolder = Styled.img`
width: 15vw;
height: 50vh;
border-radius:1.5em;
cursor: pointer;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55), 0px 4px 4px rgba(0, 0, 0, 0.55);
&:hover{
  width:17vw;
  height:53vh
}
`;

export const Input = Styled.input`
 width:20vw;
 height:5vh;
 position:fixed;
 top:6vh;
 left:75vw;
 border-radius:5em;
 outline:none;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
 border:none;
 text-align:center;
 background-color:#1C1C1C;
 color:#B5B5B5; 
 font-weight:700;
 &::placeholder{
   text-align:center;   
 }
`;
