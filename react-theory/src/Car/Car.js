import React, {Component} from 'react';
import classes from './Car.css';
import PropTypes from 'prop-types';
import withClass from '../hoc/withClass';

class Car extends Component {

	render() {
    const inputClass = [classes.input];
    if (this.props.name !== '') {
      inputClass.push(classes.green);
    } else {
      inputClass.push(classes.red);
    }

    return (
			<React.Fragment>
				<div>
					<button onClick={this.props.changeTitle}>Change title car</button>
				</div>
				<h2>Name: {this.props.name}</h2>
				<p>Year: {this.props.year}</p>
				<div>
					<input
						type="text"
						onChange={this.props.changeCarName}
						value={this.props.name}
						className={inputClass.join(' ')}
					/>
				</div>
			</React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  changeTitle: PropTypes.func,
  changeCarName: PropTypes.func,
};

export default withClass(Car, classes.card);
