import { CardFood } from "./components/CardFood";
import dataFoods from "./assets/food.json";

function App() {
  return (
    <div className="flex flex-row gap-2 p-5">
      {dataFoods.map((food, index) => (
        <CardFood
          key={index}
          title={food.title}
          description={food.description}
          price={food.price}
          image={food.image}
        />
      ))}
    </div>
  );
}

export default App;
