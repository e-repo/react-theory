import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
    state = {
        isLoggedIn: false,
    }

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

                <div style={{textAlign: 'center'}}>
                    <h2>Param isLoggedIn {(this.state.isLoggedIn) ? 'TRUE' : 'FALSE'}</h2>
                    <button type={'button'} onClick={() => this.setState({isLoggedIn: true})}>Login</button>
                </div>

                <hr/>

                <Switch>
                    <Route path="/" exact render={() => <h1 style={{textAlign: 'center'}}>Home page</h1>} />
                    {(this.state.isLoggedIn) ? <Route path="/about" component={About} /> : null}
                    <Route path="/cars/:name" component={CarDetail}/>
                    <Route path="/cars" component={Cars} />
                    <Route render={() => <h2 style={{textAlign: 'center', color: 'red'}}>404 Not found</h2>}/>
                </Switch>

            </div>
        );
    }
}

export default App
