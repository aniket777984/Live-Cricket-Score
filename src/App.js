import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then(({ data }) => {
        setMatches(data.data.matchList);
        console.log(data.data.matchList);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, []);

  return (
   <div>
    <Navbar></Navbar>
    <div className="matchRow">
     

      {matches.map((match,index) => (
       <div className="card matchCol "  key={index}>
       <div className="card-header">
        {match.name}   :  Date :-  {match.date}
       </div>
       <div className="card-body">
         <h5 className="card-title">{match.status}</h5>
         <h5 className="card-title">Match-type :- {match.matchType}</h5>
         <h5 className="card-title">Teams :- </h5>
         <p className="card-text">{match.teams[0]}</p>
         <p className="card-text">{match.teams[1]}</p>
         <h5 className="card-title">Venue :- </h5>
         <p className="card-text">{match.venue}</p>
       </div>
     </div>
      ))} 


    </div>
    </div>
  );
}

export default App;


// const id ="820cfd88-3b56-4a6e-9dd8-1203051140da"
    // getMatchDetail(id).then(({data})=>{
    //   console.log(data.data.score);
    // })