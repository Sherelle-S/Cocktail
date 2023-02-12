export default function CreateCard(props) {

    return (
     <div className="card">
       {props && <h2 className="name">{props.strDrink}</h2>}
      <hr />
       <h3 className="subTitle">What shall we Add?</h3>
       <ul className="card-list">
         {props && (
           <li className="measures">
             {props.strMeasure1}      {props.strIngredient1}
            </li>
         )}
         {props && (
           <li className="measures">
             {props.strMeasure2}       {props.strIngredient2}
           </li>
          )}
          {props && (
           <li className="measures">
 
            {props.strMeasure3}      {props.strIngredient3}
           </li>
         )}
         {props && (
 
           <li className="measures">
             {props.strMeasure4}      {props.strIngredient4}
           </li>
         )}
         {props && (
           <li className="measures">
             {props.strMeasure5}      {props.strIngredient5}
           </li>
         )}
         {props && (
           <li className="measures">
             {props.strMeasure6}      {props.strIngredient6}
           </li>
         )}
         {props && (
           <li className="measures">
             {props.strMeasure7}      {props.strIngredient7}
           </li>
          )}
          {props && (
           <li className="measures">
             {props.strMeasure8}      {props.strIngredient8}
           </li>
          )}
          {props && (
           <li className="measures">
             {props.strMeasure9}      {props.strIngredient9}
           </li>
          )}
          {props && (
           <li className="measures">
             {props.strMeasure10}      {props.strIngredient10}
           </li>
          )}
          {props && (
           <li className="measures">
             {props.strMeasure11}      {props.strIngredient11}
            </li>
         )}
         {props && (
           <li className="measures">
             {props.strMeasure12}       {props.strIngredient12}
           </li>
          )}
          {props && (
           <li className="measures">
 
            {props.strMeasure13}      {props.strIngredient13}
           </li>
         )}
         {props && (
 
           <li className="measures">
             {props.strMeasure14}      {props.strIngredient14}
           </li>
         )}
         {props && (
           <li className="measures">
             {props.strMeasure15}      {props.strIngredient15}
           </li>
         )}
         {props && (
           <li className="measures">
             {props.strMeasure16}      {props.strIngredient16}
           </li>
         )}
         <h3 className="subTitle">Shaken it or Stir it?</h3>
          {props && <p className="card-text">{props.strInstructions}</p>}
       </ul>
       {props && <h6>{props.id}</h6>}
    </div>
   );
 }