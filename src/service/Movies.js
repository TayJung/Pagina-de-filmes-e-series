import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  BoxMovies,
  Title,
  Sipnose,
  ImageFolder,
  Input
} from "../Styles/style.js";

const FilmesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=ce4af048dc3c54fde9cad7df6b751094&language=pt-br&page=1"
});

export default class Movies extends Component {
  state = {
    movies: [],
    FilterMovies: [],
    Busca: "Não encontrado!"
  };
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const resposta = await FilmesApi.get();
    console.log(resposta);

    const AllFilmes = resposta.data.results.map((item) => {
      return {
        ...item,
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });
    console.log(AllFilmes);
    this.setState({
      movies: AllFilmes,
      FilterMovies: AllFilmes
    });
    console.log(AllFilmes);
  };

  handleChange = (e) => {
    const ListFilter = this.state.movies.filter((item) => {
      if (
        item.original_title.toUpperCase().includes(e.target.value.toUpperCase())
      ) {
        return true;
      }
    });
    this.setState({
      FilterMovies: ListFilter
    });
  };

  render() {
    return (
      <Container>
        <Input onChange={this.handleChange} placeholder="Buscar" />
        {this.state.FilterMovies.map((item, index) => (
          <BoxMovies key={index}>
            <ImageFolder src={item.image} alt={item.title} title={item.title} />

            <Title>{item.original_title}</Title>
            <Sipnose>{item.overview}</Sipnose>
          </BoxMovies>
        ))}
      </Container>
    );
  }
}
