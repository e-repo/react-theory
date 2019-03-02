import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux'
import Counter from './Counter'
import {add, addNumber, asyncAdd, sub} from "./redux/actions/actions";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Счетчик {this.props.counter}</h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber(-15)}>Вычесть 15</button>
          <button onClick={() => this.props.onAsyncAdd(100)}>
            Ассинхронно добавить 100
          </button>
        </div>

        <Counter/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: (number) => dispatch(addNumber(number)),
    onAsyncAdd: (number) => dispatch(asyncAdd(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
