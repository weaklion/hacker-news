import React, { useEffect, useState } from 'react';
import { getCategoryList }from "./api"
import ExpansionPanel from './components/ExpansionPanel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import "./App.css"


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
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getCategoryList(category)
    .then(res => {
      setDataList(res);
      setLoading(false);
    })
    .catch(error => {
      console.error(error, 'error')
      alert('에러가 발생했습니다. : ' , error);
      setLoading(false);
    });
  }, [category])

  const handleChange = (evt) => {
    setLoading(true);
    setCategory(evt.target.value);
  }

  return (
    <div className="container">
      { loading ? (
      <div className="loading-container">
        <CircularProgress size="7rem"/>
      </div>
      ) : (
        <>
          <div className="header-container">
          <Typography variant="h4">
            HackerNews ID
          </Typography>

          <FormControl margin="dense">
            <InputLabel id="select-label">Category</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              {stories.map(el => (
                <MenuItem value={el} key={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          </div>
          
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
        </>
      )}

    </div>
  );
}

export default App;
