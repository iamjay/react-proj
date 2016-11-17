import * as React from "react";
import * as ReactDOM from "react-dom";

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { Hello } from './components/Hello';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Hello />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
