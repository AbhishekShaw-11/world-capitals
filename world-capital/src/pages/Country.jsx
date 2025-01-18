import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../component/UI/Loader";
import CountryCard from "../component/Layout/CountryCard";
import SearchFilter from "../component/UI/SearchFilter";
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

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

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, ind) => {
          return <CountryCard country={curCountry} key={ind} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
