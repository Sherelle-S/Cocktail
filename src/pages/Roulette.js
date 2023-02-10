import Header from '../header/Header'
import Footer from '../header/Footer'
import React, { useEffect, useState } from "react";
import CreateCard from "../components/CreateCard";
import ImageCard from "../components/ImageCard";
import NotFound from "../pages/NotFound";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Roulette() {
  const [cocktail, setCocktail] = useState([]);
  const[notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  // let isRoulette = true;
  // let searchName = false;

 useEffect(() => {
   fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
   .then((response) => {
    if (response.status === 404) {
      setNotFound(true);
    } else if (response.status === 401) {
      navigate('/#')
    } else if (response.status === 500) {
      setError(true);
    }

    if (!response.ok) {
      setError(true);
       throw new Error('Oops, something went wrong')
    }
    return response.json()
  })
      .then((data) => {
      // console.log(cocktail)
       // for (let i = 0; i < data.drinks.length; i++)
       setCocktail(data.drinks[0]);
      
      })
     .catch((err) => {
       console.log(`erro ${err}`);
      });
 }, []);
    return (
        <>
      <Header />
   <div className="main-container">
     <ImageCard strDrinkThumb={cocktail.strDrinkThumb} />
     <CreateCard
       strDrink={cocktail.strDrink}
       strMeasure1={cocktail.strMeasure1}
       strIngredient1={cocktail.strIngredient1}
       strMeasure2={cocktail.strMeasure2}
       strIngredient2={cocktail.strIngredient2}
       strMeasure3={cocktail.strMeasure3}
       strIngredient3={cocktail.strIngredient3}
       strMeasure4={cocktail.strMeasure4}
       strIngredient4={cocktail.strIngredient4}
       strMeasure5={cocktail.strMeasure5}
       strIngredient5={cocktail.strIngredient5}
       strInstructions={cocktail.strInstructions}
     />
  </div>
        <Footer />
        </>
 );
}
