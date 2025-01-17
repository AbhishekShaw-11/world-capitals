import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../component/UI/Loader";
import CountryCard from "../component/Layout/CountryCard";
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending)
    return (
      <h1>
        <Loader />
      </h1>
    );
  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry,ind) => {
          return <CountryCard country={curCountry} key={ind} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
