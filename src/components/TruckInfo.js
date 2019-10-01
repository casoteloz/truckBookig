import React, { Component } from 'react';
import Check from './Check';
import Pointer from '../img/pointer.png';
import arrowDown from '../img/arrowDown.png';
import Truck from '../img/truck.png';
import point from '../img/point.png';   

export class TruckInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            price: '$250.000'
        };
    }
    
    render(){
        return(
            <div>
                <div className="row mt-4 d-flex align-items-center">
                    <div className="col-sm-1">
                        <Check />
                    </div>
                    <div className="col-sm-11">
                        <div style={contentInfo} className="truck-info">
                            <div className="row d-flex align-items-center">
                                <div style={bordeR} className="col-sm-2 text-center">
                                    <h3>Monday</h3>
                                    <span>10 <sup>th</sup> 2:28 PM</span>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <img src={Pointer} alt=""/>
                                        </div>
                                        <div className="text-center">
                                            <h3>Houstun, TX, 33619</h3>
                                            <img src={arrowDown} alt=""/>
                                            <p style={location}>Atlanta, GA, 30123</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={bordeL} className="col-sm-2">
                                    <img src={Truck} alt="" />
                                </div>
                                <div className="col-sm-2">
                                    {this.state.price}
                                </div>
                                <div className="col-sm-1">
                                    <span style={count}>1</span>
                                </div>
                                <div className="col-sm-1">
                                    <img src={point} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="row mt-4 d-flex align-items-center">
                    <div className="col-sm-1">
                        <Check />
                    </div>
                    <div className="col-sm-11">
                        <div style={contentInfo} className="truck-info">
                            <div className="row d-flex align-items-center">
                                <div style={bordeR} className="col-sm-2 text-center">
                                    <h3>Monday</h3>
                                    <span>10 <sup>th</sup> 2:28 PM</span>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <img src={Pointer} alt=""/>
                                        </div>
                                        <div className="text-center">
                                            <h3>Houstun, TX, 33619</h3>
                                            <img src={arrowDown} alt=""/>
                                            <p style={location}>Atlanta, GA, 30123</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={bordeL} className="col-sm-2">
                                    <img src={Truck} alt="" />
                                </div>
                                <div className="col-sm-2">
                                    {this.state.price}
                                </div>
                                <div className="col-sm-1">
                                    <span style={count}>1</span>
                                </div>
                                <div className="col-sm-1">
                                    <img src={point} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 d-flex align-items-center">
                    <div className="col-sm-1">
                        <Check />
                    </div>
                    <div className="col-sm-11">
                        <div style={contentInfo} className="truck-info">
                            <div className="row d-flex align-items-center">
                                <div style={bordeR} className="col-sm-2 text-center">
                                    <h3>Monday</h3>
                                    <span>10 <sup>th</sup> 2:28 PM</span>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <img src={Pointer} alt=""/>
                                        </div>
                                        <div className="text-center">
                                            <h3>Houstun, TX, 33619</h3>
                                            <img src={arrowDown} alt=""/>
                                            <p style={location}>Atlanta, GA, 30123</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={bordeL} className="col-sm-2">
                                    <img src={Truck} alt="" />
                                </div>
                                <div className="col-sm-2">
                                    {this.state.price}
                                </div>
                                <div className="col-sm-1">
                                    <span style={count}>1</span>
                                </div>
                                <div className="col-sm-1">
                                    <img src={point} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                       
            </div>    
        )
    }
}

const btnAdd = {
    background: '#EE8D38'
}

const bordeL ={
    borderLeft: 'solid 1px #686868',
}

const bordeR ={
    borderRight: 'solid 1px #686868',
}

const contentInfo ={
    height: '97px'
}

const count = {
    background: '#EF686A',
    borderRadius: '20%',
    color: '#ffffff',
    display: 'block',
    height: '30px',
    textAlign: 'center',
    width: '30px'
}

const location = {
    marginBottom: '0'
}

export default TruckInfo;