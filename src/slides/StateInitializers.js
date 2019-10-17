import React from 'react';
import Slide from '../widgets/Slide';
import uninitialized from '../images/unintialized.jpeg';

const StateInitializers = () => (
  <>
    <img
      src={uninitialized}
      alt="uninitialized"
      style={{position: 'absolute', height: '30vh', top: '35vh', right: '5vw'}}
    />
    <Slide title="<StateInitializers />">
      <section style={{width: '40vw'}}>
        <ul>
          <li>E.g., defaultValue</li>
          <li>Used with uncontrolled components to set the initial state</li>
        </ul>
      </section>
    </Slide>
  </>
);

StateInitializers.displayName = 'StateInitializers';

export default StateInitializers;
