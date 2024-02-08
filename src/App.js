import './App.css';
import Example from "./CircularProgressBar";

function App() {
    const percentage = 90;

  return (
    <div className="App">
      <Example percentage={percentage}></Example>
    </div>
  );
}

export default App;
