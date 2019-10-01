import React from 'react';

function Search() {
    return(
        <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search"></input>            
        </div>
    )
}

export default Search;