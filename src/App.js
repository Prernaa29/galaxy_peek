import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "DEMO_KEY"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);
 console.log(data)
  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Astronomy Picture of the Day</h1>
      </header>
      <main>
        <div className="image-container">
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} className="apod-image" />
          <p className="apod-description">{data.explanation}</p>
        </div>
      </main>
      <footer>
        <p>
          Data provided by NASA | <a href="https://api.nasa.gov/">Learn more</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
