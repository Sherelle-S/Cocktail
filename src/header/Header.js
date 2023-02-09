import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
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
          <a href="/roulette"
            className="selection roulette"
            onClick={() => window.location.reload(false)}
         >
            Play Roulette <i className="fa-solid fa-repeat"></i>
          </a>
        </li>
        <li className="selection">
          {/* <CocktailSearch /> */}
        </li>
      </ul>
    </div>
  );
}
