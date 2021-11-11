import React, { useEffect, useState } from 'react';
import { getCategoryList }from "./api"
import ExpansionPanel from './components/ExpansionPanel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function App() {

  const stories = [
    "topstories", 
    "newstories", 
    "askstories", 
    "showstories", 
    "jobstories"
  ];

  
  const [category, setCategory] = useState(stories[0]);
  const [dataList, setDataList] = useState([]);
  const [expand, setExpand] = useState();
  
  useEffect(() => {
    getCategoryList(category)
    .then(res => setDataList(res))
    .catch(error => console.error(error, 'error'));
  }, [category])

  const handleChange = (evt) => {
    setCategory(evt.target.value);
  }

  return (
    <div className="container">
      <FormControl>
        <InputLabel id="select-label">Category</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {stories.map(el => (
            <MenuItem value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {
        dataList.map(el => (
          <ExpansionPanel 
            id={el}
            key={el}
            expand={expand}
            setExpand={setExpand}
          />
        ))
      }
    </div>
  );
}

export default App;
