import React, { Component } from 'react';
import ButtonAppBar  from './components/header'
import AppDrawer from "./components/drawer";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDrawerOpen: false
		};
	}

    render() {
        return (
            <div>
                <ButtonAppBar
	                onLeftIconClick={() => this.setState({isDrawerOpen: true})}
                />
                <AppDrawer
                    open={this.state.isDrawerOpen}
                    //onLeftIconClick={() => this.setState({isDrawerOpen: true})}
                />
            </div>
        )
    }
}