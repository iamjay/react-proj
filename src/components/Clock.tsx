import * as React from "react";

export class Clock extends React.Component<{},{}> {
    private _timerId: number;
    private _inputCounter: any;

    public state = {
        initCounter: 100,
        counter: 100
    };

    private resetCounterHandler = (e: React.MouseEvent<HTMLButtonElement>) => this.resetCounter(e);

    private initCounterChangeHandler = (e: React.FormEvent<HTMLInputElement>) => this.initCounterChange(e);

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
        this.setState((prevState: any) => {
            return {
                counter: prevState.initCounter
            }
        });
    }

    private initCounterChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            initCounter: (e.target as HTMLInputElement).value
        });
    }

    public render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <form>
                    <input type="text" value={String(this.state.initCounter)}
                        onChange={this.initCounterChangeHandler} />
                    <button onClick={this.resetCounterHandler}>Reset</button>
                </form>
            </div>
        );
    }
}
