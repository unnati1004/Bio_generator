// import logo from './logo.svg';
// import './App.css';


import Generator from "./Components/Generator";

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:"rgb(146, 158, 129)"}}>
      <h1 style={{marginLeft:"40%"}}>Bio Generator</h1>
      </div>
      <div>
       <Generator />
      </div>
      
    </div>
  );
}

export default App;
