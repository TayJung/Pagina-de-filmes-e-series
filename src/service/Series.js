import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Input,
  BoxMovies,
  Title,
  Sipnose,
  ImageFolder
} from "../Styles/style";

export const SeriesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=ce4af048dc3c54fde9cad7df6b751094&language=pt-BR&page=1"
});

export default class Series extends Component {
  state = {
    series: [],
    FilterSeries: []
  };
  componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const resposta = await SeriesApi.get();
    console.log(resposta);

    const AllSeries = resposta.data.results.map((item) => {
      return {
        ...item,
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });
    console.log(AllSeries);
    this.setState({
      series: AllSeries,
      FilterSeries: AllSeries
    });
    console.log(AllSeries);
  };

  handleChange = (e) => {
    const ListFilter = this.state.series.filter((item) => {
      if (
        item.original_name.toUpperCase().includes(e.target.value.toUpperCase())
      ) {
        return true;
      } else {
        return "";
      }
    });
    this.setState({
      FilterSeries: ListFilter
    });
    console.log(this.state.FilterSeries);
  };

  render() {
    return (
      <Container>
        <Input onChange={this.handleChange} placeholder="Buscar" />
        {this.state.FilterSeries.map((item) => (
          <BoxMovies>
            <ImageFolder src={item.image} alt={item.name} title={item.name} />
            <Title>{item.name}</Title>
            <Sipnose>{item.overview}</Sipnose>
          </BoxMovies>
        ))}
      </Container>
    );
  }
}
