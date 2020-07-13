import React from "react";
import Cocktail from "./Cocktail"

export default function CocktailList({loading,cocktails}) {
  if(loading){
    return <h2 className="section-title">Loading.....</h2>
  }
  if(cocktails.length<1){
    return <h2 className="section-title">No Cocktail Products Found</h2>
  }
  return <div className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(cocktail=>{
          const {id} = cocktail
          return <Cocktail key={id} {...cocktail}></Cocktail> 
        })}
      </div>
  </div>
}
