import React from 'react';
import {ClickedContext} from '../App'

export default props => {
  return (
    <div>
      <hr/>
      <h3>Counter 2</h3>
      <ClickedContext.Consumer>
        {clicked => clicked ? <p>Clicked</p> : null}
      </ClickedContext.Consumer>
      <hr/>
    </div>
  );
}
