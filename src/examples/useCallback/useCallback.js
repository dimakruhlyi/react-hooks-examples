import React, {useState, useCallback} from 'react';
import {ItemsList} from './ItemList';

function App() {
  const [number, setNumber] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'green' : 'black'
  };

  const generateItemsFromApi = useCallback(() => {
    return new Array(number).fill('').map((_, index) => `Item ${index + 1}`)
  }, [number])


  return (
    <>
     <h1 style = {styles}>Number value is: {number}</h1>
     <div className="btn btn-success" onClick = {() => setNumber(prev => prev + 1)}>Add</div>
     <div className="btn btn-warning" onClick = {() => setColored(prev => !prev)}>Change</div>
     <ItemsList getItems = {generateItemsFromApi}/>
    </>
  );
}

export default App;