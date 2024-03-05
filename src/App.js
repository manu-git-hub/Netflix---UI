import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { actions, orginals } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="Netflix Orginals"/>
      <RowPost url={actions} title="Actions" isSmall/>
    </div>
  );
}

export default App;
