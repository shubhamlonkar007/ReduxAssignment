import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../components/controllerOutput/ControllerOutput.css'
import './ControllerOutput.css';

const controllerOutput = (props) => {
    return (<div>
        <div className="CounterOutput">Current Counter:{props.output}</div>
    </div>)

}

export default controllerOutput;