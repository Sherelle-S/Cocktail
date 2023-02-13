import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
// import CocktailSearch from "./CocktailSearch";
 
export default function Header() {

const[roulette, setRoulette]=useState(true)
  function SelectAPI(){
setRoulette(prevState => !prevState)
  }

  

  return (
    <div className='nav-container'>
      <ul className="header">
        <li className="roulette">
          <Link to='/roulette' className='roulette selection'
            // onClick={() => window.location.reload(false)}
          >
           Play Roulette <i className="fa-solid fa-repeat"></i>
          </Link>
        </li>
                 <li className="roulette"><Link to='/'
        className="selection"><i className="fa-solid fa-house"></i></Link></li>
        
        <li className="selection">
          <SearchForm />
        </li>
      </ul>
    </div>
  );
}
