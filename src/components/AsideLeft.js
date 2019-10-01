import React from 'react';
import SectionFilters from './SectionFilters';
import Search from './Search';
import Light from '../img/light.png';

function asideLeft() {
    return(
        <div className="row pt-4">
            <div style={borderR} className="col-sm-12">
            <h3 style={smFilters} className="text-center"><img className="mr-2" src={Light} alt=""/>Smart Filters</h3>
            <SectionFilters />
            <h3 style={smFilters2} className="text-center mt-3">Status</h3>
            <div style={blockSearch}><Search /></div>
            <button type="button" className="btn btn-primary btn-lg btn-state">DELIVERED</button>
            </div>
        </div>
    )
}

const blockSearch = {
    width: '70%',
    margin: '0 auto'
}

const borderR = {
    borderRight: 'solid 1px #595959'
}

const smFilters = {
    color: '#595959',
    fontSize: '1.1rem',
    paddingBottom: '9px',
    borderBottom: 'solid 1px #595959',
    width: '70%',
    margin: '0 auto'
}

const smFilters2 = {
    color: '#595959',
    fontSize: '1.1rem',
    paddingBottom: '9px',
    width: '70%',
    margin: '0 auto'
}


export default asideLeft;