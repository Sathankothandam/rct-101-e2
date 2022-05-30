import React from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
const App = () => {
  return <div className="main"> 
    <AddProduct/>
    <button className="but">Add product</button>
    <div className="mini">
     <button>First</button>
     <button>Previous</button>
     <select>
       <option>3</option>
       <option>6</option>
     </select>
     <button>Next</button>
     <button>Last</button>
    </div>
    </div>;
};

export default App;
