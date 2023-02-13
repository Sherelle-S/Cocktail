import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className='notFound-container'>
            <h2 className='notFound-text'>I Don't Currently Have Any Recipies Using That Ingredient,
                <br />  
                Play Roulette Instead </h2>
            <ul className='notFound-list'>
        <li> <Link to='/' className ='notFound-redirect selection'> <i className="fa-solid fa-magnifying-glass"></i>Search Another Drink </Link></li>
        <br/>
        <li><Link to='/roulette' className ='notFound-redirect selection'> <i className="fa-solid fa-whiskey-glass"></i>Play Roulette </Link></li>
    </ul>
        </div>
    )
}