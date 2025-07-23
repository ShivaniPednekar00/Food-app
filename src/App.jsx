import { useState } from "react";
import Search from "./Components/Search";
import Foodlist from "./Components/Foodlist";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import Fooddetails from "./Components/Fooddetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodid] = useState("658615");
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist foodData={foodData} setFoodid={setFoodid} />
        </InnerContainer>
        <InnerContainer>
          <Fooddetails setFoodid={setFoodid} foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
