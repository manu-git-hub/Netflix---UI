import {useState} from "react";
import axios from "axios";
// import NavBar from "./components/NavBar/NavBar";
// import './App.css';
// import Banner from "./components/Banner/Banner";
// import RowPost from "./components/RowPost/RowPost";

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      {/* <NavBar />
      <Banner />
      <RowPost /> */}

      {/* API GET */}
      <h1>Hello world</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data)
          setState(response.data)
        })
      }}>Click Me</button>
   {state.map((obj, index) => {
        return (
          <div>
            <h2>{index+1}</h2>
            <h2>{obj.title}</h2>
            <h4>{obj.body}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default App;
