import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <h1>AGEN LEVEL BERDASARKAN WILAYAH KERJA</h1>
      <table border="1">
        <thead>
          <tr>
            <th rowSpan="2">no</th>
            <th rowSpan="2">wilayah</th>
            <th colSpan="4">level agen</th>
          </tr>
          <tr>
            <th>RM</th>
            <th>SM</th>
            <th>UM</th>
            <th>FU</th>
          </tr>
        </thead>
        <tbody>
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
