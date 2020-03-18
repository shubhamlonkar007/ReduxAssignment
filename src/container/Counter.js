import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Controller from '../components/controller/Controller';
import ControllerOutput from '../components/controllerOutput/ControllerOutput';

import { Row, Col } from 'react-bootstrap';

import '../components/controller/Controller.css'

class Counter extends Component {

    state = {
        count: 0
    }

    /* handleClickIncByOne = this.handleClickIncByOne.bind(this);


    handleClickIncByOne(event) {
        event.preventDefault();
        
        this.setState({
          count: this.state.count + 1
        });
      } */

    /* handleClickIncByOne = () => {

        this.setState({
            count: this.state.count + 1
        });
    }

    handleClickDecByOne = () => {

        this.setState({
            count: this.state.count - 1
        });
    }

    handleClickIncByFive = () => {

        this.setState({
            count: this.state.count + 5
        });
    }

    handleClickDecByFive = () => {

        this.setState({
            count: this.state.count - 5
        });
    } */

    handleClick = (obj) => {

        console.log("obj.type==>", obj.type);
        switch (obj.type) {
            case "addOne":
                this.setState({
                    ...this.state,
                    count: this.state.count + obj.number
                });
                break;
            case "subOne":
                this.setState({
                    ...this.state,
                    count: this.state.count - obj.number
                });
                break;
            case "addFive":
                this.setState(prevState => {
                    console.log("prevState==>", prevState);
                    return { count: prevState.count + obj.number };
                });
                break;
            case "subFive":
                this.setState(prevState => {
                    return { count: prevState.count - obj.number }
                });
                break;
            default: console.log("No choice");
                break;
        }
        console.log("count=====>", this.state.count);

    }


    render() {
        return (
            <div className="fluid">
                <ControllerOutput output={this.state.count} />

                {/* <Controller text={"Increment By 1"} click={this.handleClickIncByOne} />
                    <Controller text={"Decrement By 1"} click={this.handleClickDecByOne} />
                    <Controller text={"Increment By 5"} click={this.handleClickIncByFive} />
                    <Controller text={"Decrement By 5"} click={this.handleClickDecByFive} /> */}

                <div className="controller" style={{textAlign:"center"}}>
                    <Controller text={"Increment"} click={() => this.handleClick({
                        type: "addOne", number: 1
                    })} />
                    <Controller text={"Decrement"} click={() => this.handleClick({
                        type: "subOne", number: 1
                    })} />
                    <Controller text={"Add 5"} click={() => this.handleClick({
                        type: "addFive", number: 5
                    })} />
                    <Controller text={"Subtract 5"} click={() => this.handleClick({
                        type: "subFive", number: 5
                    })} />
                </div>





            </div>);
    }
}

export default Counter;