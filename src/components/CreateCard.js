export default function CreateCard(props) {

    return (
     <div className="card">
       {props && <h2 className="name">{props.strDrink}</h2>}
      <hr />
       <h3 className="subTitle">What shall we Add?</h3>
       <ul className="card-list">
         {props && (
           <li>
             {props.strMeasure1}      {props.strIngredient1}
 
           </li>
         )}
         {props && (
           <li>
             {props.strMeasure2}       {props.strIngredient2}
           </li>
          )}
          {props && (
           <li>
 
            {props.strMeasure3}      {props.strIngredient3}
           </li>
         )}
         {props && (
 
           <li>
             {props.strMeasure4}      {props.strIngredient4}
           </li>
         )}
         {props && (
           <li>
             {props.strMeasure5}      {props.strIngredient5}
           </li>
         )}
         {props && (
           <li>
             {props.strMeasure6}      {props.strIngredient6}
           </li>
         )}
         <h3 className="subTitle">Shaken it or Stir it?</h3>
          {props && <p className="card-text">{props.strInstructions}</p>}
       </ul>
       {props && <h6>{props.id}</h6>}
    </div>
   );
 }