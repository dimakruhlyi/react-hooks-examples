import React, {useState, useEffect, useRef} from 'react';

function App() {
 //const [renderCount, setRenderCount] = useState(1);
 const [value, setValue] = useState('initial');
 const renderCount = useRef(1);
 const inputRef = useRef(null);
 const prevValue = useRef('');

 useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current)
 })

 useEffect(() => {
    prevValue.current = value;
 }, [value])

 const focus = () => inputRef.current.focus();

  return (
    <>
      <h1>Count renders: {renderCount.current}</h1>
      <h1>Last value is: {prevValue.current}</h1>
      <input ref = {inputRef} type="text" onChange = {e => setValue(e.target.value)} value = {value}/>
      <div className="btn btn-success" onClick = {() => focus()}>Focus</div>
    </>
  );
}

export default App;
