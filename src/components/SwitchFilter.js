import React, { Component } from "react";
import Switch from "react-switch";

export default class BasicExample extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
        <div className="pt-2 float-right">
          <label htmlFor="material-switch">
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              offColor="#193948"
              onColor="#686868"
              onHandleColor="#E6E6E6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={28}
              width={50}
              className="react-switch"
              id="material-switch"
            />
          </label>
          {console.log(this.state.checked ? 'on' : 'off')}
        </div>
      );
    }
  }