import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const DateInput = () => (
	<MuiThemeProvider>
    	<DatePicker hintText="Date" mode="landscape" />
    </MuiThemeProvider>
);

export default DateInput;