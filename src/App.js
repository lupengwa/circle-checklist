import './App.css';
import Example from "./components/CircularProgressBar";
import TodoList from "./components/TodoList";

function App() {
    const percentage = 90;

  return (
    <div className="App">
        <div className='todo-app'>
            <TodoList />
        </div>
      <Example percentage={percentage}></Example>
    </div>
  );
}

export default App;
