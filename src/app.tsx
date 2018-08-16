import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
    public render(): JSX.Element {
        return <div>Hello World!</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
