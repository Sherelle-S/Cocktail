import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
// import SearchName from "../pages/SearchName";


export default function SearchForm() {
    
  const [word, setWord] = useState("");
  console.log(word)
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={() => {
   navigate(`/searchname/${word}`,{replace : true});
 }}>
        <input
         className="search-bar"
         type="text"
         placeholder="Search Ingredient"
         onChange={(e) => {
           setWord(e.target.value);
         }}
        />
        
       <button className='search-drink selection'><i className="fa-solid fa-martini-glass-citrus"></i>
      </button>
      </form>
      </div>
   
  )
}
