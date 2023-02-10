import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className='notFound-container'>
            <h2>I Don't Currently Have Any Recipies Using That Ingredient,
                <br />  
        Play Roulette Instead </h2>
         <Link to='/frontpage' className ='notFound-redirect selection'> <i class="fa-solid fa-magnifying-glass"></i>Search Another Drink </Link>
        <br/>
        <Link to='/roulette' className ='notFound-redirect selection'> <i className="fa-solid fa-whiskey-glass"></i>Play Roulette </Link> 

        </div>
    )
}