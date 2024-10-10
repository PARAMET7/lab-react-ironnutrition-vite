// src/App.js
import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox"; // Import FoodBox

function App() {
  const [foods, setFoods] = useState(foodsJson);

  // Function to handle delete action
  const handleDelete = (foodName) => {
    setFoods(foods.filter((food) => food.name !== foodName));
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {/* Iterate over the foods array and render FoodBox for each food item */}
      {foods.map((food) => (
        <FoodBox
          key={food.id} // Use unique id as key for each FoodBox
          food={food} // Pass the food object as a prop
          onDelete={handleDelete} // Pass the delete function
        />
      ))}
    </div>
  );
}

export default App;
