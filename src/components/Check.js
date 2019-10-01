import React from 'react';

function Check() {
    return(
        <button style={colorBtn} type="button" className="btn btn-warning btn-lg"> <span style={checkBtn} className="fa fa-check"></span></button>
    )
}

const colorBtn = {
    borderRadius: '50%',
    color: '#ffffff',
    background: '#EE8D38',
    width: '45px',
    height: '45px'
}

const checkBtn = {
    position: 'relative',
    left: '-4px',
    top: '-2px'
}


export default Check;
