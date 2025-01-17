import React, { useEffect, useState, useTransition } from "react";
import { useParams } from 'react-router-dom'
import Loader from "../UI/Loader";
import { getCountryIndData } from "../../api/postApi";
const CountryDetails = () => {
    const parmas= useParams()
    console.log(parmas)

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);
  
    useEffect(() => {
      startTransition(async () => {
        const res = await getCountryIndData(parmas.id);
        setCountry(res.data[0]);
      });
    }, []);
  
    if (isPending)
      return (
        <h1>
          <Loader />
        </h1>
      );
      console.log(parmas)
  return (
    <div>
      
    </div>
  )
}

export default CountryDetails
