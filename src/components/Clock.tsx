import * as React from "react";

export class Clock extends React.Component<{},{}> {
    private _timerId: number;

    public state = {
        initCounter: 100,
        counter: 100
    };

    private resetCounterHandler = (e: React.MouseEvent<HTMLButtonElement>) => this.resetCounter(e);

    public componentDidMount() {
        this._timerId = setInterval(() => {
            this.setState((prevState: any, props: any) => {
                let newCounter = prevState.counter - 1;
                if (newCounter === 0) {
                    clearInterval(this._timerId);
                    this._timerId = undefined;
                }
                return {
                    counter: newCounter
                }
            });
        }, 1000);
    }

    public componentWillUnmount() {
        if (this._timerId)
            clearInterval(this._timerId);
    }

    private resetCounter(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.setState({
            initCounter: this.refs['counter'].value,
            counter: this.refs['counter'].value
        });
    }

    public render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <form>
                    <input type="text" defaultValue={String(this.state.initCounter)} ref="counter" />
                    <button onClick={this.resetCounterHandler}>Reset</button>
                </form>
            </div>
        );
    }
}
