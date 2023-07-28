import './App.css';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
     <Calendar date={new Date(Date.now())}/>
  );
}


export default App;
