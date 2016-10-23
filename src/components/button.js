import React, { Component } from 'react';


import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Button = () => (
    	<RaisedButton label="Primary" primary={true} style={style} />
);

export default Button;
