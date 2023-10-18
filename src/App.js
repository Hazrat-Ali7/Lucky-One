import './App.css';
import Products from './Components/Products/Products';
import Qna from './Components/QNA/Qna';

function App() {
  return (
    <div>
      <h1> Mobile Computer Watch </h1>
      <Products></Products>
      <div className='qna'><Qna></Qna></div>
    </div>
  );
}

export default App;
