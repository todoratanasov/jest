import React, {useState} from 'react'
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [isBelow, setIsBelow] = useState(false)
  const onIncrementHandler = ()=>{
    if(isBelow){
      setIsBelow(prevState => !prevState)
    }
    setCount(count+1)
  }
  const onDecrementHandler = ()=>{
    if(count ===0){
      setIsBelow(prevState => true)
    }else{
      setCount(prevState=>{
        console.log(prevState)
        return prevState-1})
    } 
  }
  return (
    <div data-test="component-app">
      <h1 data-test = "counter-display">The counter is currently <span data-test="count">{count}</span></h1>
      {isBelow ? <p data-test="bellow-error">The counter can not go below 0</p> : null}
      <button onClick={onIncrementHandler} data-test="increment-button">Increment counter</button>
      <button onClick={onDecrementHandler} data-test ='decrement-button'>Decrement</button>
    </div>
  );
}

export default App;
