import logo from './logo.svg';
import './App.css';
import TenKCoders from './Components/TenKCoders'
import TenKClass1 from './ClassComponents/TenKClass1';
import ClassCompo from './Components/ClassCompo';
import FunctionalCompo from './Components/FunctionalCompo';

function App() {
  return (
    <div className="App">
      <h2>Hello from 10K coders</h2>
      <TenKCoders/>
      <TenKClass1/>
      <ClassCompo/>
      <FunctionalCompo/>
    </div>
  );
}

export default App;
