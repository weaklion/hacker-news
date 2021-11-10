import React, { useEffect, useState } from 'react';
import { getCategoryList }from "../api"

  const stories = [
    "topstories", 
    "newstories", 
    "askstories", 
    "showstories", 
    "jobstories"
  ]

function App() {

  const [category, setCategory] = useState(stories[0]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getCategoryList(category)
    .then(res => setDataList(res))
    .catch(error => console.error(error, 'error'));
  }, [category])

  return (
    <div className="App">
      {dataList.map(el => (<span>{el}</span>))}
    </div>

  );
}

export default App;
