import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    async function getDrinks(){
    setLoading(true)
    try {
        const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await response.json()
        const {drinks} = data 
        if(drinks){
          
          const newCocktails = drinks.map(item=>{
            const {idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass} = item
             return{
               id:idDrink,
               info:strAlcoholic,
               category:strCategory,
               image:strDrinkThumb,
               glass:strGlass
             }
          })
          console.log(newCocktails)
          setCocktails(newCocktails)
        }else{
          setCocktails([])
          console.log([])
        }
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }  
    getDrinks()
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}
