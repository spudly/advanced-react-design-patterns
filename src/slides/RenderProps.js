import React from 'react';
import Slide from '../widgets/Slide';
import inverted from '../images/inverted.jpeg';

const RenderProps = () => (
  <>
    <img
      src={inverted}
      alt="inverted"
      style={{position: 'absolute', height: '70vh', top: '15vh', right: '5vw'}}
    />
    <Slide title="<RenderProps />">
      <section style={{width: '30vw'}}>
        <ul>
          <li>Alternative to Containers / Higher-Order Components</li>
          <li>All the Business Logic</li>
          <li>All the State</li>
          <li>All the Effects</li>
          <li>Consumer Provides Functions that Determine what gets Rendered</li>
        </ul>
      </section>
    </Slide>
  </>
);

RenderProps.displayName = 'RenderProps';

export default RenderProps;
