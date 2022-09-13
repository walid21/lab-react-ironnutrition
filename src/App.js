import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredList, setFilteredList] = useState(foodList);

  const addNewFoodToList = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredList([...filteredList, newFood]);
  };

  const filterFoods = (name) => {
    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(name);
    });
    setFilteredList(filtered);
  };

  const deleteFood = (name) => {
    const filtered = filteredList.filter((food) => {
      return food.name !== name;
    });
    setFilteredList(filtered);
  };

  return (
    <div className="App">
      <h1>Search Bar</h1>
      <Search filterFoods={filterFoods} />
      <h1>Add Food Entry</h1>
      <div>
        <AddFoodForm addNewFoodToList={addNewFoodToList} />
      </div>
      <h1>Food List</h1>
      <div>
        {filteredList.map(({ name, calories, image, servings }) => {
          return (
            <>
              <FoodBox
                key={name}
                deleteFood={deleteFood}
                {...{ name, calories, image, servings }}
              ></FoodBox>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
