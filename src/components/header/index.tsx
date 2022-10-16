import React from "react";
import { VoidFunctionComponent } from "react"
import { BiSearch } from "react-icons/bi";
import { IHeader } from "../../types/header";
import './index.css';


const Header: VoidFunctionComponent<IHeader> = ({handleChangeInput, handleChangeSelect, handleSearchButtom}) => {

    
    return (
    <div>
        <div className="container" >
            <div style={{width:386, paddingTop:100}}>
                <div className="title">Find any <span style={{color:'#21ADCF'}}>country</span> in the world.</div>
            </div>
            <div className="searchBox">
                <input type="text" placeholder="Search country" name="search" 
                    onChange={handleChangeInput}/>
                <select onChange={handleChangeSelect}>
                    <option value="0">Show All</option>
                    <option value="1">Favorites</option>
                    <option value="2">Africa</option>
                    <option value="3">America</option>
                    <option value="4">Asia</option>
                    <option value="5">Europe</option>
                    <option value="6">Oceania</option>
                </select>
                <button type="submit" onClick={handleSearchButtom}>
                    <BiSearch style={{padding: 0, margin:0, color:'#FFFFFF'}}/> 
                </button>
            </div>
        </div>
    </div>);
}

export default Header;