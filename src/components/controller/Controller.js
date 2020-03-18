import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../components/controller/Controller.css'
import './Controller.css';


const controller = (props) => {
    return (
        <div className="CounterControl" onClick={props.click}>{props.text}
        {/* <Button className="CounterControl"  onClick={props.click}>{props.text}</Button> */}
        </div >
    )

}

export default controller;