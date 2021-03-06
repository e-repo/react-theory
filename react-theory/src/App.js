import React, { Component } from 'react';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Car from './Car/Car';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {
    state = {
      clicked: false,
      car: [
          {name: 'FORD', year: 2013},
          {name: 'MAZDA', year: 2015},
          {name: 'LADA', year: 2016},
      ],
      title: 'React component',
      viewCarsList: true,
    };

    changeTitle (newTitle) {
        this.setState({
            title: newTitle,
        });
    };

    writeTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    viewCarsList = () => {
        this.setState({
            viewCarsList: !this.state.viewCarsList
        });
    };

    changeCarName(event, index) {
        const cars = [...this.state.car];
        cars[index].name = event.target.value;
        this.setState({cars});
    }

    render() {
	    const divStyle = {
	    	textAlign: 'center'
	    };

	    let carsList = null;

	    if (this.state.viewCarsList) {
	        carsList = this.state.car.map((car, index)=> {
                    return (
                      <ErrorBoundary key={index}>
                        <Car
                          name={car.name}
                          year={car.year}
                          changeTitle={this.changeTitle.bind(this, car.name)}
                          changeCarName={event => this.changeCarName(event, index)}
                        />
                      </ErrorBoundary>
                    )
                }
            )
        }

        return (
          <div style={divStyle}>
            <h1>{this.state.title}</h1>
            <ClickedContext.Provider value={this.state.clicked}>
              <Counter />
            </ClickedContext.Provider>
            <div style={{marginTop: 20}}>
              <button
                onClick={this.viewCarsList}
                className={'AppButton'}
              >{(this.state.viewCarsList) ? '???????????? ????????????' : '???????????????????? ????????????'}
              </button>
              <button className={'AppButton'} onClick={() => this.setState({clicked: !this.state.clicked})}>Change clicked</button>
            </div>
            <div style={{
              marginTop: '5px',
              marginBottom: '5px'
            }}>
              <button onClick={this.changeTitle.bind(this, 'New title')}>Change title</button>
              <button onClick={this.changeTitle.bind(this, 'React component')}>Reset</button>
            </div>
            <div>
              <input type="text" onChange={this.writeTitle}/>
            </div>
            {carsList}
          </div>
        );
	};
}

export default App;
