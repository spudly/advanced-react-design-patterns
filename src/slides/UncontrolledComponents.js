import React from 'react';
import Slide from '../widgets/Slide';
import imperative from '../images/imperative.jpg';

const UncontrolledComponents = () => (
  <>
    <img
      src={imperative}
      alt="imperative"
      style={{position: 'absolute', height: '30vh', top: '35vh', right: '5vw'}}
    />
    <Slide title="<UncontrolledComponents />">
      <section style={{width: '40vw'}}>
        <ul>
          <li>Locally-Managed State</li>
          <li>Can be controlled using an imperative API</li>
        </ul>
      </section>
    </Slide>
  </>
);

UncontrolledComponents.displayName = 'UncontrolledComponents';

export default UncontrolledComponents;
