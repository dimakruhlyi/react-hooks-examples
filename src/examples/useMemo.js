import React, {useState, useMemo, useEffect} from 'react';

const complexCompute = (num) => {
  console.log('complexCompute');
  let i = 0;
  while( i < 1000000000) i++;
  return num * 2
}

function App() {
  const [number, setNumber] = useState(12);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'green' : 'black'
  }), [colored]);

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]);

  useEffect(()=>{
    console.log('Styles changed');
  }, [styles])

  return (
    <>
     <h1 style = {styles}>Number value is: {computed}</h1>
     <div className="btn btn-success" onClick = {() => setNumber(prev => prev + 1)}>Add</div>
     <div className="btn btn-danger" onClick = {() => setNumber(prev => prev - 1)}>Sub</div>
     <div className="btn btn-warning" onClick = {() => setColored(prev => !prev)}>Change</div>
    </>
  );
}

export default App;