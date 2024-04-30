import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addByOne, reset, substractByOne } from './reducer/actions/actionCreator';

function App() {
  let storeObj=useSelector(storeObject=> storeObject)
  let dispatch=useDispatch()

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{storeObj.value}</h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={()=>{dispatch(addByOne())}}>+</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
        <button onClick={()=>{dispatch(substractByOne())}}>-</button>
      </div>
    </>
  );
}

export default App;
