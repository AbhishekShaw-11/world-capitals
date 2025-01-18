import React,{useEffect,useState,useTransition} from 'react'
import { useParams } from 'react-router-dom'
import { getCountryIndData } from '../../api/postApi'
import Loader from '../UI/Loader'
const CountryDetails = () => {
  const par = useParams()

  const [isPending, startTransition] = useTransition();
  const [nation, setNation] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(par.id);
       console.log(res)
       if(res.status === 200){
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
  console.log(par.id)
  console.log(nation.name)
  
  return (
    <section className='card country-details-card container'>
      <div className="container-card bg-white-box">

      </div>
    </section>
  )
}

export default CountryDetails

