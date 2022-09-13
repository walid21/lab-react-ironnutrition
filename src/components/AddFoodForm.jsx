import React, { useState } from 'react';
import { Input } from 'antd';
import FoodBox from './FoodBox';

function AddFoodForm({ addNewFoodToList }) {
  // const [name, setName] = useState('');
  // const [image, setImage] = useState('');
  // const [calories, setCalories] = useState(0);
  // const [servings, setServings] = useState(0);
  const [food, setFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function submit(data) {
    data.preventDefault();
    addNewFoodToList(food);
    setFood({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    });
  }

  const handleChange = (e) => {
    setFood({ ...food, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        value={food.name}
        type="text"
        onChange={(element) => setFood({ ...food, name: element.target.value })} // we can also use the handleChange function inside the setList
      />
      <label htmlFor="image">Image</label>
      <Input
        id="image"
        value={food.image}
        type="text"
        onChange={(element) =>
          setFood({ ...food, image: element.target.value })
        }
      />
      <label htmlFor="calories">Calories</label>
      <Input
        id="calories"
        value={food.calories}
        type="Number"
        onChange={(element) =>
          setFood({ ...food, calories: element.target.value })
        }
      />
      <label htmlFor="servings">Servings</label>
      <Input
        id="servings"
        value={food.servings}
        type="Number"
        onChange={(element) =>
          setFood({ ...food, servings: element.target.value })
        }
      />
      <button type="submit" className="btn-sortByPopularity">
        submit
      </button>
    </form>
  );
}

export default AddFoodForm;
