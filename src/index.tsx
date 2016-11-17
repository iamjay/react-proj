import * as React from "react";
import * as ReactDOM from "react-dom";

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { Clock } from './components/Clock';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Clock />,
    document.getElementById("app")
);
