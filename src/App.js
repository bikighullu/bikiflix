import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

const data = [
  {
    title: "BIKIFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },

  {
    title: "Trending Now",
    fetchUrl: requests.fetchTrending,
    isLargeRow: false,
  },
  {
    title: "Top Rated",
    fetchUrl: requests.fetchTopRated,
    isLargeRow: false,
  },
  {
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
    isLargeRow: false,
  },
  {
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
    isLargeRow: false,
  },

  {
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
    isLargeRow: false,
  },

  {
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
    isLargeRow: false,
  },

  {
    title: "Document Movies",
    fetchUrl: requests.fetchDocumentaries,
    isLargeRow: false,
  },
];

const App = () => {
  return (
    <div className="App">
      <Banner />s
      {data.map((row, i) => {
        return (
          <Row
            key={i}
            title={row.title}
            fetchUrl={row.fetchUrl}
            isLargeRow={row.isLargeRow}
          />
        );
      })}
      {/* <Row
          title="BIKIFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Document Movies" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
};

export default App;
