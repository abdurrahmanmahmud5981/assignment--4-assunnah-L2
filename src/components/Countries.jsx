/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Country from "./Country";
import Navber from "./Navber";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [country, setDetailsOfCountry] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedCountry = localStorage.getItem("countries");
    if (storedCountry) {
      console.log(JSON.parse(storedCountry));
      setCountries(JSON.parse(storedCountry));
      setFilteredCountry(JSON.parse(storedCountry));
    } else {
      try {
        const fetchCountries = async () => {
          const fecthRequest = await fetch(
            "https://restcountries.com/v3.1/all"
          );
          const fecthData = await fecthRequest.json();

          const data = fecthData.map((country) => {
            return {
              ...country,
              isVisibale: false,
            };
          });
          localStorage.setItem("countries", JSON.stringify(data));
          console.log(data);
          setCountries(data);
          setFilteredCountry(data);
        };
        fetchCountries();
      } catch (error) {
        console.log(error.message);
      }
    }
  }, []);

  const handleDetailsOfCountry = (country) => {
    const countryCurrencies = Object.entries(country?.currencies || {}).map(
      (currency) => {
        const [code, { name, symbol }] = currency;
        return { code, name, symbol };
      }
    );

    setDetailsOfCountry({
      ...country,
      flag: country?.flags?.svg,
      currencies: countryCurrencies,
    });
    setIsModalOpen(true);
  };

  /**
   *  sorting function
   */
  function sortA_to_Z() {
    // const b = filteredCountry.map((a)=>console.log(a))
    // console.log(b);
    // console.log("sortA_to_Z");
    // const sortCountries = [...countries].sort((a, b) =>{
    //   // console.log(a.name.commn);
    //  return a?.name?.common.localeCompare(b?.name?.common)
    // })
    // setFilteredCountry(sortCountries);
    //  return setFilteredCountry([...countries].sort((a, b) =>
    //     a?.name?.common.localeCompare(b?.name?.common)
    //   ));
  }

  function sortZ_to_A() {
    setFilteredCountry(
      [...filteredCountry].sort((a, b) =>
        b?.name?.common.localeCompare(a?.name?.common)
      )
    );
  }

  /**
   *  searching functionality for country
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (search) {
        const filtered = countries.filter((country) =>
          country?.name?.common.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCountry(filtered);
      } else {
        setFilteredCountry(countries);
      }
    }, 500);
    return () => clearTimeout(timerId);
  }, [search, countries]);
  // handleSearch
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <>
      {/* modal */}
      {isModalOpen && (
        <div
          className=" fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-50 "
          onClick={(e) => {
            setIsModalOpen(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" bg-gray-200 p-5 rounded-lg max-w-xl sm:w-1/2 shadow-lg m-7 "
          >
            <div className="flex  flex-col justify-between gap-1">
              <h2 className=" text-xl font-bold">{country?.name?.common} </h2>
              <img
                src={country.flags.png}
                alt={country?.name?.alt}
                className="w-full h-52 object-fill"
              />
              <h3>
                <span className=" font-semibold">Capital</span> :
                {country?.capital[0]}
              </h3>
              <h3>
                <span className=" font-semibold">Region</span> :
                {country?.region}
              </h3>
              <h3>
                <span className=" font-semibold">Population</span> :
                {country?.population.toLocaleString()}
              </h3>
              <h3>
                <span className=" font-semibold">Currency</span> :
                {` ${country?.currencies[0].name} (${country?.currencies[0].symbol})-${country?.currencies[0].code} `}
              </h3>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* navber */}
      <Navber
        search={search}
        sortA_to_Z={sortA_to_Z}
        sortZ_to_A={sortZ_to_A}
        handleSearch={handleSearch}
      />

      {/* cardes */}
      <div className="max-w-screen-xl mx-auto my-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
          {filteredCountry.length > 0 ? (
            filteredCountry
              .sort((a, b) => {
                return b?.population - a?.population;
                // eslint-disable-next-line no-unreachable
                {
                  /* return a?.name?.common.localeCompare(b?.name?.common); */
                }
              })
              .filter(
                (e) =>
                  e?.name?.common !== "India" &&
                  e?.name?.common !== "Israel" &&
                  e?.region !== "Europe" &&
                  e?.region !== "Americas"
              )
              .map((e) => (
                <Country
                  key={e?.cca3}
                  country={e}
                  handleDetailsOfCountry={handleDetailsOfCountry}
                />
              ))
          ) : (
            <h2 className=" text-xl text-red-500 font-semibold">
              No Country Found......
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Countries;
