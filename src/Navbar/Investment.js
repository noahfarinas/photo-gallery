import InvestmentView from "./InvestmentView";
import React from "react";

const PRICING = [
  {
    type: "Elopment",
    price: "$1200",
    detail: "Two hour coverage", 
    img: "./photo-gallery/photos/salazar.jpg",
    qty: "Four-hundred high resolution photos"
  },
  {
    type: "Engagement",
    price: "$500",
    detail: "One hour coverage", 
    img: "./photo-gallery/photos/toth.jpg",
    qty: "One-hundred and twenty high resolution photos"
  },
  {
    type: "Branding",
    price: "$750",
    detail: "Three hour coverage", 
    img: "./photo-gallery/photos/kristine.jpg",
    qty: "Three-hundred and fifty high resolution photos"
  },
]


const Investment = () => {
  return (
    <InvestmentView detail={PRICING}/>
  );
};

export default Investment;
