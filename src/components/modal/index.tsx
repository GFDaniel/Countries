import React, { useEffect, useState, VoidFunctionComponent } from "react";
import { useCookies } from "react-cookie";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { IModal } from "../../types";
import './index.css';

const Modal: VoidFunctionComponent<IModal> = ({isOpen, toggle, country}) => {
    
    const [currency, setCurrency] = useState<string[]>([]);
    const [language, setLanguage] = useState<string[]>([]);
    
    const [cookies, setCookie] = useCookies(['favorites']);

    const onclickFavorite = ()=>{
        if (cookies.favorites) {
        setCookie('favorites', [...cookies.favorites, country.name.common], { path: '/' }); 
        }else{
        setCookie('favorites', [country.name.common], { path: '/' }); 
        }
    }

    const formatter =(num:any, round = 1) => {
        const unit = Math.floor(Math.round(num / 1.0e+1).toLocaleString().replaceAll(',', '').length),
            wunit = ["K","M","B"][Math.floor(unit / 3) - 1],
            funit = Math.abs(Number(num))/Number('1.0e+'+(unit-unit%3));
        return wunit ? funit.toFixed(round).toLocaleString() + ' ' + wunit : num.toFixed(round).toString();
    }

    
    useEffect(() => {
        const objCurrency = JSON.parse(JSON.stringify(country.currencies))
        Object.keys(JSON.parse(JSON.stringify(country.currencies))).map((item:any, i:any) => {
            setCurrency([...currency, objCurrency[item].name])
        })        
        setLanguage(Object.values(JSON.parse(JSON.stringify(country.languages))))
    },[])

    return (
        <>
        {isOpen && (
            <div className="modal-overlay" onClick={toggle}>
                <div onClick={(e) => e.stopPropagation()} className="modal-box">
                    <div style={{fontSize:16, textAlign:'right'}}>
                        <GrFormClose onClick={toggle}/>
                    </div>
                    <div>
                        <p style={{color:"#09295E", fontSize:50, fontWeight:500, textAlign:'left', padding:0, margin:0}}>
                            {country.name.common}
                            { cookies.favorites.includes(country.name.common) ? (<AiFillStar style={{ fontSize:30, color:'#F2C94C'}}/>): 
                                <AiOutlineStar onClick={onclickFavorite} style={{ fontSize:30, color:"#BDBDBD"}}/> }
                        </p>
                    </div>
                    <div>
                        <p className="info">Region: <span className="spanInfo">{country.region}</span></p>
                        <p className="info">Population: <span className="spanInfo">{formatter(country.population)}</span></p>
                        <p className="info">Capital: <span className="spanInfo">{country.capital}</span></p>
                        <p className="info">Currency: <span className="spanInfo">{currency}</span></p>
                        <p className="info">Lenguage:
                            <span className="spanInfo">
                                {language.map((item:any, i:any) => {
                                    return ((i+1===language.length) ? <span key={i}> {item}</span> : <span key={i}> {item},</span>);
                                })}
                            </span>
                        </p>
                        <p className="info">Borders Countries:
                            <span className="spanInfo">
                                {country.borders?.map((item:any, i:any) => {
                                    return ((i+1===country.borders?.length) ? <span key={i}> {item}</span> : <span key={i}> {item},</span>);
                                })}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="info" style={{margin:0, padding:0}} >Flag:</p>
                        <p style={{textAlign:'left', fontSize:100, margin:0, padding:0}}>{country.flag}</p>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;