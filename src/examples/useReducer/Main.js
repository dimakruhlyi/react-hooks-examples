import React from 'react';
import {useAlert} from './alert/AlertContext';

export default function Main() {
   const {show} = useAlert();
    return (
        <>
            <h1>context example</h1>
            <button className="btn btn-success" onClick = {() => show('this is text from Main.js')}>Show alert</button>
        </>
    )
}