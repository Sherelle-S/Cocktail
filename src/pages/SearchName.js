import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import CreateCard from "../components/CreateCard";
import ImageCard from "../components/ImageCard";
import Header from "../header/Header"
import Footer from "../header/Footer"
import NotFound from './NotFound';

export default function SearchName() {
  const [cocktail, setCocktail] = useState('');
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [word, setWord] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();
  const stopScroll = { visibility: 'hidden' };
  // console.log(search)

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
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
      .then(data => {
        setCocktail(data.drinks[count])
        setLimit(data.drinks.length)
        // console.log(cocktail)
        // console.log(data)
      })
      .catch(err => {
        console.log(`error ${err}`)
      });
  }, [count])


  const scrollBack = () => count === limit ? stopScroll :  setCount(prevCount => prevCount - 1)
  const scrollForward = () => setCount(prevCount => prevCount + 1)
  
    return (
               <>

        {limit === 0 && (<NotFound />)}
        {error === true && (
          <Link to="/frontpage"> Oops... Something went wrong, try again<i class="fa-solid fa-house selection"></i></Link>
          )}
            <Header />
        <div className='scroll-container'>
          <ul className='scroll-list'>
          {count && count > 0 && (<li className='scroll-left scroll' onClick={scrollBack}><i className="direction fa-solid fa-chevron-left selection"></i></li>)}

            <h5 className='counter'>{count + 1}/{limit}</h5>
          {count < limit-1 && (<li className='scroll-right scroll' onClick={scrollForward}> <i className="direction fa-solid fa-chevron-right selection"></i> </li>)}

          </ul>
              </div>
     <div className="main-container">
       
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
  
          <Footer />
            </>
        )
   }
