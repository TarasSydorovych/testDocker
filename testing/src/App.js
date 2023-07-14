import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData('2');
  }, []);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/data?id=${id}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
<div>
      <input type="text" value={data} readOnly />
    </div>
  );
}

export default App;
