import React, { useEffect, useState, useTransition } from "react";
import { useParams,NavLink } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";
const CountryDetails = () => {
  const par = useParams();

  const [isPending, startTransition] = useTransition();
  const [nation, setNation] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(par.id);
      console.log(res);
      if (res.status === 200) {
        setNation(res.data[0]);
      }
    });
  }, []);

  if (isPending)
    return (
      <h1>
        <Loader />
      </h1>
    );
  console.log(par.id);

  //console.log(nation.name);
  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {nation && (
          <div className="country-image grid grid-two-cols">
            <img
              src={nation.flags.svg}
              alt={nation.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {nation.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names: </span>
                  {Object.keys(nation.name.nativeName)
                    .map((key) => nation.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Start of Week: </span>
                  {nation.startOfWeek.toUpperCase()} 
                </p>
                <p>
                  <span className="card-description"> Area: </span>
                  {nation.area.toLocaleString() } sq.km
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {nation.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region: </span>
                  {nation.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region: </span>
                  {nation.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital: </span>
                  {nation.capital}
                </p>
                <p>
                  <span className="card-description">Latitude & Longitude: </span>
                  {nation.latlng.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Continents: </span>
                  {nation.continents}
                </p>
                

                <p>
                  <span className="card-description">Top Level Domain: </span>
                  {nation.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(nation.currencies)
                    .map((curElem) => nation.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(nation.languages)
                    .map((key) => nation.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
