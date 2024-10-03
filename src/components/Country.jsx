/* eslint-disable react/prop-types */
import { useState } from "react";

const Country = ({ country, handleDetailsOfCountry }) => {
  const [isVisited, setIsVisted] = useState(false);
  function handleBtnClick(e) {
    handleDetailsOfCountry(country);
    setIsVisted(!isVisited);
    e.target.setAttribute("disabled",true);
  }
  // console.log(country?.region !== 'Europe' ? "true": 'Country Not found' );
  return (
    <>
      <div className="card glass ">
        <figure>
          <img
  
            src={country.flags.png}
            alt={country?.name?.alt}
            className="w-full h-52 "
          />
        </figure>
        <div className="card-body px-6 pb-6 ">
          <h2 className="card-title">{country?.name?.common}</h2>
          <h3>
            <span className=" font-semibold">Capital</span> : {country?.capital}
            .
          </h3>
          <h3>
            <span className=" font-semibold">Population</span> :
            {country?.population.toLocaleString()}
          </h3>
          <div className="card-actions">
            <button 
              onClick={handleBtnClick}
              className= "btn bg-primary text-secondary hover:text-primary hover:bg-secondary w-full"
           
            >
             {isVisited ? "Visited" : "Details"}
            </button>
          </div>
        </div>
        {/* <Modal key={country.cca3}country={modal}/>  */}
      </div>
    </>
  );
};

export default Country;
