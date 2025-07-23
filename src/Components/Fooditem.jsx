import styles from "./Fooditem.module.css";
export default function Fooditem({ food, setFoodid }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemimage} src={food.image} alt="" />
      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.btncontainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodid(food.id);
          }}
          className={styles.itembtn}
        >
          VIEW RECEPIE
        </button>
      </div>
    </div>
  );
}
