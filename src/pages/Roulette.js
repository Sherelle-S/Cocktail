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
       strMeasure6={cocktail.strMeasure6}
       strIngredient6={cocktail.strIngredient6}
       strMeasure7={cocktail.strMeasure7}
       strIngredient7={cocktail.strIngredient7}
       strMeasure8={cocktail.strMeasure8}
       strIngredient8={cocktail.strIngredient8}
       strMeasure9={cocktail.strMeasure9}
       strIngredient9={cocktail.strIngredient9}
       strMeasure10={cocktail.strMeasure10}
       strIngredient10={cocktail.strIngredient10}
       strMeasure11={cocktail.strMeasure11}
       strIngredient11={cocktail.strIngredient11}
       strMeasure12={cocktail.strMeasure12}
       strIngredient12={cocktail.strIngredient12}
       strMeasure13={cocktail.strMeasure13}
       strIngredient13={cocktail.strIngredient13}
       strMeasure14={cocktail.strMeasure14}
       strIngredient14={cocktail.strIngredient14}
       strMeasure15={cocktail.strMeasure15}
       strIngredient15={cocktail.strIngredient15}
       strMeasure16={cocktail.strMeasure16}
       strIngredient16={cocktail.strIngredient16}
       strInstructions={cocktail.strInstructions}
       />
  </div>
        <Footer />
        </>
 );
}
