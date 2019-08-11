import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [line, setLine] = useState("#8884d8");
  const [graph, setGraph] = useState("#ccc");
  const [page, setPage] = useState(1);

  function nextPage(){
    setPage(page+1);
  }

  function previousPage(){
    if(page>1){
      setPage(page-1);
    }
  }

  function lineColor(bool){
    bool ? setLine("lightblue") : setLine("#8884d8");
    
    bool ? setGraph("purple") : setGraph("#ccc");
  }

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=true`
      )
      .then(res => {
        setCoinData(res.data)
      
      })
      
      .catch(err => console.log(err));
  }, [page]);
  return (
    <div className="App">
      <Navbar lineColor={lineColor} nextPage={nextPage} previousPage={previousPage}/>
      <Charts coinData={coinData} line={line} graph={graph} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
