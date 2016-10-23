import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from 'material-ui/DatePicker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => {
	
	return (
		<div>
		<MuiThemeProvider>
    		<DatePicker hintText="Date" mode="landscape" />
    	</MuiThemeProvider>
	</div>
	);
};


ReactDOM.render( <App />, document.querySelector('.container'));