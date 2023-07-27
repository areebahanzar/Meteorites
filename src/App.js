import React, { useState, useEffect } from 'react';
// import nebula from './nebula.jpg';
import FirstPage from './FirstPage';
const App = () => {
  const [space, setSpace] = useState([]);
  useEffect(() => {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.near_earth_objects);
        setSpace(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (<FirstPage />)
};

export default App;
