import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import CountriesList from './components/countriesList';
import Header from './components/header';

function App() {

  const [countries, setCountries] = useState<any>();
  const [originalCountries, setOriginalCountries] = useState<any>();
  const [inputRes, setInputRes] = useState<any>();
  const [selectedValue, setSelectedValue] = useState<any>('0');
  const [showStars, setShowStars] = useState<boolean>(false);
  
  const [cookies] = useCookies(['favorites']);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
    .then(results => results.json())
      .then(data => {
        setCountries(data);
        setOriginalCountries(data);
      });
  }, []);

  const handleChangeInput = (event: any) =>{
    setInputRes(originalCountries.filter( (country:any) => {
      return country.name.common.toUpperCase().includes(event.target.value.toUpperCase())
    }))
  }

  const handleChangeSelect = (event: any) =>{
    if (event.target.value==='1') {
      setShowStars(true)
      setCountries(originalCountries.filter((country:any) => cookies.favorites.some((fav:any) => fav === country.name.common)));
    }else{
      setShowStars(false)
      setSelectedValue(event.target.value)
      setCountries(originalCountries)
    }
  }

  const handleSearchButtom = () =>{
    setCountries(inputRes)
  }
  

  return (
    <div className="App">
      <Header handleChangeInput={handleChangeInput} handleChangeSelect={handleChangeSelect} handleSearchButtom={handleSearchButtom} />
      <CountriesList countries={countries} selectedValue={selectedValue} showStars={showStars} />
    </div>
  );
}

export default App;
