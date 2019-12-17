import React from "react";
const Store = require('./store');
const App = require('./Action');

class View extends React.Component {

    constructor() {
        super();
        this.handleText = this.handleText.bind(this);
        this.state = {status:Store.getStatus()};
        this._onchange = this._onchange.bind(this)
    }

    componentDidMount() {
        Store.addChangeListener(this._onchange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onchange);
    }

    handleText(){
        return App.addNewText('ĐÃ CẬP NHẬT STATUS -> OK')
    }

    _onchange(){
        this.setState({status:Store.getStatus()});
    }

    render() {
        console.log(Store.getStatus());
        return(

            <div>
                <p>{this.state.status}</p>
                <button onClick={this.handleText}>CLick To Update Status</button>
            </div>
        )
    }
}

export default View