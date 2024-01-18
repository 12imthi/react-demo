import './App.css';
import Card from './card';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <Card name='hello'></Card>
        <Card name='hello'></Card>
        <Card name='hello'></Card>
        <Card name='hello'></Card>
      </div>
    </div>
  );
}

export default App;
