import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    async function getCocktail() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const {
            strDrink: name,
            strCategory: category,
            strGlass: glass,
            strDrinkThumb: image,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            category,
            glass,
            image,
            instruction,
            ingredients,
          };
          setCocktail(newCocktail);
          console.log(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Found Cocktail Product</h2>;
  } else {
    const { name, category, glass, image, instruction, ingredients} = cocktail;
    let filteredIngredient = ingredients.filter(function (item) {
      return item != null;
    });
    return (
      <section className="section coctail-section">
        <div style={{textAlign:"center"}}>
        <Link className="btn btn-primary" to="/">Back To Home</Link>
        </div>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>Name: {name}</p>
            <p>Category: {category} </p>
    <p>Instruction: {instruction}</p>
    <p>Ingredients</p>
    <p>
      {ingredients.map((item, index)=>{
        if(index < filteredIngredient.length-1){
          return <span key={index}>{item?item:null},</span>
        }else{
          return <span key={index}>{item?item:null}</span>
        }
        
      })}

    </p>

          </div>
        </div>
      </section>
    );
  }
}
