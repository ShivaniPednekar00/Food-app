import Fooditem from "./Fooditem";
export default function Foodlist({ foodData, setFoodid }) {
  return (
    <div>
      {foodData.map((food) => (
        <Fooditem setFoodid={setFoodid} key={food.id} food={food} />
      ))}
    </div>
  );
}
