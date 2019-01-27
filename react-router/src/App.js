import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
    render() {

        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cars">Cars</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr/>

                <Switch>
                    <Route path="/" exact render={() => <h1 style={{textAlign: 'center'}}>Home page</h1>} />
                    <Route path="/about" component={About} />
                    <Route path="/cars/:name" component={CarDetail}/>
                    <Route path="/cars" component={Cars} />
                </Switch>

            </div>
        );
    }
}

export default App
