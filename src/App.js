import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/MoviesContainer/Container";

function App() {
  const api = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [val, searchValue] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
        // console.log(movies);
      });
  }, []);

  async function newApi() {
    setLoading(false);
    setErrorMessage(null);

    const data = await fetch(
      `https://www.omdbapi.com/?s=${val}&apikey=4a3b711b`
    );
    const textData = await data.text();
    const jsonData = JSON.parse(textData);
    console.log(textData, "hello");
    if (jsonData.Response === "True") {
      setErrorMessage(false);
      setMovies(jsonData.Search);
    } else {
      setErrorMessage(jsonData.Error);
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="inputContainer">
        <input
          onChange={(e) => {
            searchValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            newApi();
          }}
        >
          SEARCH
        </button>
      </div>
      <p style={{ textAlign: "center" }}>Share Few Of Our Favorite Movies</p>
      
      
      <div className="moviesss">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Container key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
      </div>

  );
}

export default App;
