import React from "react";
import { VoidFunctionComponent } from "react"
import { AiFillStar } from "react-icons/ai";
import { Country } from "../../types";
import Modal from "../modal";
import useModal from "../../hooks/useModal";
import './index.css';



const CountryItem: VoidFunctionComponent<Country> = ({ country, showStars}) => {
  const { isOpen, toggle } = useModal();

  return (
    <div onClick={toggle}>
      <div className="continersText" style={{ width: '10%'}}>{country.flag}</div>
      <div className="continersText" style={{ width: '70%'}}>
        {country.name.common}
        { showStars && (<AiFillStar style={{ fontSize:14, color:'#F2C94C'}}/>)}
      </div>
      <Modal isOpen={isOpen} toggle={toggle} country={country}></Modal>
    </div>
  );
}

export default CountryItem;