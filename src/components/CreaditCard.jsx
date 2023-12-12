import Visa from '../assets/images/visa.png'
import {useState,useEffect} from 'react'
import svg from '../assets/images/master-card.svg'





export function CreditCard({type, number, expirationMonth, expirationYear,bank,owner,bgColor,color}){
const maskeCard= `**** **** **** ${number.slice(-4)}`;
const [img,setImg]=useState('')

useEffect(() => {
   if (type === 'Master Card') {
     setImg(svg); // masterCardSvg should be the SVG for Master Card
   } else {
     setImg(Visa); // visaSvg should be the SVG for Visa
   }
 }, [type]);
const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',
    height: '180px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
  };

    return(
        <div style={cardStyle}>
        <div>{type}</div>
        <div>{maskeCard}</div>
        <div>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</div>
        <div>{bank}</div>
        <div>{owner}</div>
        <img src={img} alt={type} height={'20px'} width={'40px'} />
      </div>
    )
}