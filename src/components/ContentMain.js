import React, { Component } from 'react';
import AsideLeft from './AsideLeft';
import Search from './Search';
import Check from './Check';
import TruckInfo from './TruckInfo';
export class contentMain extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-sm-3">
                    <AsideLeft />
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-3">
                            <Check />
                        </div>
                        <div className="col-sm-9">
                            <div style={blockSearch}>
                                <Search />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <TruckInfo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const blockSearch = {
    width: '46%',
    float: 'right',
    margin:'0 auto'    
}

export default contentMain;