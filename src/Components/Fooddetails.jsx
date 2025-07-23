import { useEffect, useState } from "react";
import styles from "./Fooddetails.module.css";
import ItemList from "./ItemList";

export default function Fooddetails({ foodId }) {
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "d7684f891902488fa773c39f14f8e116";
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${url}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);

      setFood(data);
      setIsLoading(false);
    }
    fetchfood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recepiecrt}>
        <h1 className={styles.recepiename}>{food.title}</h1>
        {foodId}
        <img className={styles.recepieimg} src={food.image} alt="" />
        <div className={styles.recepieDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👦 <strong>{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🟢 Vegetarian" : "🔴 Non Vegetarian"}
            </strong>
          </span>
          <span>{food.vegan ? " 🐮Vegan meal" : ""}</span>
        </div>
        <div>
          $
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
            {isLoading ? (
              <p>Loading........</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
