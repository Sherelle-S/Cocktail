import React, { useEffect, useState } from "react";
import CreateCard from "../components/CreateCard";
import ImageCard from "../components/ImageCard";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from '../header/Header'
import Footer from '../header/Footer'
// import NotFound from "../components/NotFound";
// import CocktailSearch from "../components/CocktailSearch";
import SearchForm from "../components/SearchForm";
// import Add from "./slider";
// import ReactDOM from'react-dom';


export default function SearchName(props) {
  const [cocktail, setCocktail] = useState("");
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(0)
  // const [notFound, setNotFound] = useState(false);
  // const [error, setError] = useState(false)
  // const [word, setWord] = useState(false)
  // let { search } = useParams();
  // const navigate = useNavigate();
  // console.log(search)

  useEffect(() => {
    fetch('https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        // if (response.status === 404) {
        //   setNotFound(true);
        // } else if (response.status === 401) {
        //   navigate('/#')
        // } else if (response.status === 500) {
        //   setError(true);
        // }

        // if (!response.ok) {
        //   setError(true);
        //    throw new Error('Oops, something went wrong')
        // }
        return response.json()
      })
      .then((data) => {
        setCocktail(data.drinks[count]);
        setLimit(data.drinks.length)
        console.log(data)

    //    console.log(limit)
      })
      .catch((err) => {
        console.log(`erro ${err}`);

     });
  }, [count]);

  // // if(notFound === true)
  // if (limit === 0) {
  //   return (
  //     <>
  //       {/* <NotFound /> */}
  //       <Link to="/frontpage"> <i class="fa-solid fa-magnifying-glass"></i>Search Another Drink </Link>
  //       <br/>
  //       <Link to="/roulette"> <i className="fa-solid fa-whiskey-glass"></i>Play Roulette </Link>
  //       </>
  //   )
  // }
  // if (error === true) {
  //   return (
  //     <>
  //       <p>Oops... Something went wrong, try again</p>
  //       <Link to="/frontpage"> <i class="fa-solid fa-magnifying-glass"></i>Search Another Drink </Link>
  //       <br/>
  //       <Link to="/roulette"> <i className="fa-solid fa-whiskey-glass"></i>Play Roulette </Link>
  //     </>
  //   )
  // }
  return (
    <>
      {/* <CocktailSearch /> */}
          <Header />
      <div className='scroll-container'>
        <ul className='scroll-list'>
          <li className='scroll-left' onClick={() => setCount(prevCount => prevCount - 1)}> <i className="direction fa-solid fa-chevron-left selection"></i> </li>
         
          <h5 className='counter'>{count + 1}/{limit}</h5>
        <li className='scroll-right' onClick={() => setCount(prevCount => prevCount + 1)}> <i className="direction fa-solid fa-chevron-right selection"></i> </li>
        </ul>
            </div>
   <div className="main-container">
     {/* <button className='drink selection' onClick={carousel}>emoji dink</button> */}
     
          
     
     {/* <button onClick={scrollForward}>right arrow </button> */}
      <ImageCard strDrinkThumb={cocktail.strDrinkThumb} />
      <CreateCard
        strDrink={cocktail.strDrink}
        strInstructions={cocktail.strInstructions}
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
      />
          </div>
          {/* <CocktailSearch /> */}

        <Footer />
          </>
  );
}