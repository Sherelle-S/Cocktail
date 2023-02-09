export default function ImageCard(props) {
    return (
  
     <div className="image-container">
  
       {props && (
         <img
           className="image-card"
  
          src={props.strDrinkThumb}
           alt="named cocktail"
          >
           {props.strDrink}
         </img>
        )}
   
      </div>
   );
  }