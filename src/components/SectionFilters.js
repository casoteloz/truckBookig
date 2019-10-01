import React, { Component } from "react";
import SwitchFilter from "./SwitchFilter";
import Sale from '../img/sale.png';
import Calendar from '../img/calendar.png';
import Heart from '../img/heart.png';
 
export default class sectionFIlter extends Component {
    render() {
        return (
            <div style={blockFilter}>
                <div className="row mt-4">
                    <div className="col">
                        <img className="float-right mr-2" src={Sale} alt=""/>
                    </div>                
                    <div className="col">
                        <SwitchFilter />
                    </div>
                </div>            
                <div className="row mt-4">
                    <div className="col">
                        <img className="float-right mr-2" src={Calendar} alt=""/>
                    </div>                
                    <div className="col">
                        <SwitchFilter />
                    </div>
                </div>  
                <div className="row mt-4">
                    <div className="col">
                        <img className="float-right mr-2" src={Heart} alt=""/>
                    </div>                
                    <div className="col">
                        <SwitchFilter />
                    </div>
                </div>  
            </div>
        );
    }
}

const blockFilter = {
    width: '70%',
    margin: '0px auto',
    borderBottom: '1px solid rgb(89, 89, 89)',
    paddingBottom: '17px'    
}

