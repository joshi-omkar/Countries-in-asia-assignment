import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card } from "react-bootstrap";

export default function App() {
  const url = "https://restcountries.eu/rest/v2/region/asia";

  const [regions, setRegion] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios.get(`${url}`).then((res) => {
      const data = res.data;

      setRegion(data);
    });
  };

  return (
    <div className="App">
      <nav>Countries In ASIA</nav>
      <div className="container">
        {regions.map((region, index) => {
          return (
            <Card className="card">
              <Card.Img variant="top" src={region.flag} className="img" />
              <Card.Body className="card-body">
                <Card.Title>Nmae : {region.name}</Card.Title>
                <Card.Title>Capital: {region.capital}</Card.Title>
                <Card.Title>Region : {region.region}</Card.Title>
                <Card.Title>subregion : {region.subregion}</Card.Title>
                <Card.Title>population : {region.population}</Card.Title>
                <div className="borderAndLang">
                  <Card.Title className="borders">
                    borders {" "}
                    {region.borders.map((border) => (
                      <li>{border}</li>
                    ))}
                  </Card.Title>
                  <Card.Title className="lang">
                    languages {" "}
                    {region.languages.map((language) => (
                      <li>{language.name}</li>
                    ))}
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
