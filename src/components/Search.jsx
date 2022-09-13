import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 5
function Search({ filterFoods }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filterFoodList = (e) => {
    setSearchQuery(e.target.value);
    filterFoods(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={filterFoodList} />
    </>
  );
}

export default Search;
