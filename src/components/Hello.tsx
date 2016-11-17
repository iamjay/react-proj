import * as React from "react";

import RaisedButton from 'material-ui/RaisedButton';

export class Hello extends React.Component<{},{}> {
    render() {
        return (
            <RaisedButton label="Hello" />
        );
    }
}
