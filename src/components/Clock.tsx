import * as React from "react";

export class Clock extends React.Component<{},{}> {
    private _timerId: number;

    public state = {
        counter: 0
    };

    private resetCounterHandler = (e: React.MouseEvent<HTMLButtonElement>) => this.resetCounter(e);

    public componentDidMount() {
        this._timerId = setInterval(() => {
            this.setState((prevState: any, props: any) => {
                return {
                    counter: prevState.counter + 1
                }
            });
        }, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this._timerId);
    }

    public resetCounter(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.setState({
            counter: 0
        });
    }

    public render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.resetCounterHandler}>Reset</button>
            </div>
        );
    }
}
