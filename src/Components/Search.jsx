import { useEffect, useState } from "react";
import styles from "./Search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "d7684f891902488fa773c39f14f8e116";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.serchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
