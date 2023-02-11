import './App.css';
import TeacherName from './components/TeacherName/TeacherName';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="app">
      <h2>Componente nombre:</h2>
      <TeacherName></TeacherName>

      <h2>Contador:</h2>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
