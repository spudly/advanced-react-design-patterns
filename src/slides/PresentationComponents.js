import React from 'react';
import Slide from '../widgets/Slide';
import presentation from '../images/presentation.jpg';

const PresentationComponents = () => (
  <>
    <img
      src={presentation}
      alt="presentation"
      style={{position: 'absolute', height: '50vh', top: '25vh', right: '5vw'}}
    />
    <Slide title="<PresentationComponents />">
      <section>
        <ul>
          <li>All the DOM Nodes</li>
          <li>No Business Logic</li>
          <li>No State</li>
          <li>No Effects</li>
        </ul>
      </section>
    </Slide>
  </>
);

PresentationComponents.displayName = 'PresentationComponents';

export default PresentationComponents;
