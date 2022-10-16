import React, { useEffect, useState } from "react";
import { VoidFunctionComponent } from "react"
import { ICountries, ICountry } from "../../types";
import CountryItem from '../country';
import './index.css';


const CountriesList: VoidFunctionComponent<ICountries> = ({ countries, selectedValue, showStars }) => {

    const [asianCountries, setAsianCountries] = useState<ICountry[]>();
    const [africanCountries, setAfricanCountries] = useState<ICountry[]>();
    const [americanCountries, setAmericanCountries] = useState<ICountry[]>();
    const [europeanCountries, setEuropeanCountries] = useState<ICountry[]>();
    const [oceanianCountries, setOceanianCountries] = useState<ICountry[]>();

    const filterByContinent = async () =>{
        if (countries) {
            let asian = countries.filter(country => {
                return country.continents.includes('Asia')
            })
            let african = countries.filter(country => {
                return country.continents.includes('Africa')
            })
            let american = countries.filter(country => {
                return country.continents.includes('North America') || country.continents.includes('South America')
            })
            let european = countries.filter(country => {
                return country.continents.includes('Europe')
            })
            let oceanian = countries.filter(country => {
                return country.continents.includes('Oceania')
            })

            await asian.sort((a:any,b:any) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
            setAsianCountries(asian)

            await african.sort((a:any,b:any) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
            setAfricanCountries(african)

            await american.sort((a:any,b:any) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
            setAmericanCountries(american)

            await european.sort((a:any,b:any) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
            setEuropeanCountries(european)

            await oceanian.sort((a:any,b:any) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
            setOceanianCountries(oceanian)
        }
    }

    useEffect(() => {
        filterByContinent()   
    },[countries])


    return (<div>
        <div className="grid">
            {(selectedValue==='0' || selectedValue==='2') && (
                <div><p className="continentsName">Africa</p></div>
            )}
            {(selectedValue==='0' || selectedValue==='3') && (
                <div><p className="continentsName">America</p></div>
            )}
            {(selectedValue==='0' || selectedValue==='4') && (
                <div><p className="continentsName">Asia</p></div>
            )}
            {(selectedValue==='0' || selectedValue==='5') && (
                <div><p className="continentsName">Europe</p></div>
            )}
            {(selectedValue==='0' || selectedValue==='6') && (
                <div><p className="continentsName">Oceania</p></div>
            )}
        </div>
        <div className="grid">
            {(selectedValue==='0' || selectedValue==='2') && (
                <div>
                    {africanCountries?.map((country:any, i:any) => {
                        return (<CountryItem key={i} country={country} showStars={showStars} />)
                    })}
                </div>
            )}
            {(selectedValue==='0' || selectedValue==='3') && (
                <div>
                {americanCountries?.map((country:any, i:any) => {
                    return (<CountryItem key={i} country={country} showStars={showStars} />)
                })}
                </div>
            )}
            {(selectedValue==='0' || selectedValue==='4') && (
                <div>
                    {asianCountries?.map((country:any, i:any) => {
                        return (<CountryItem key={i} country={country} showStars={showStars} />)
                    })}
                </div>
            )}
            {(selectedValue==='0' || selectedValue==='5') && (
                <div>
                {europeanCountries?.map((country:any, i:any) => {
                    return (<CountryItem key={i} country={country} showStars={showStars} />)
                })}
                </div>
            )}
            {(selectedValue==='0' || selectedValue==='6') && (
                <div>
                    {oceanianCountries?.map((country:any, i:any) => {
                        return (<CountryItem key={i} country={country} showStars={showStars} />)
                    })}
                </div>
            )}
        </div>
    </div>);
}

export default CountriesList;