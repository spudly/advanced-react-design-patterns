import React from 'react';
import Slide from '../widgets/Slide';
import container from '../images/container.jpg';

const ContainerComponents = () => (
  <>
    <img
      src={container}
      alt="container"
      style={{position: 'absolute', height: '50vh', top: '25vh', right: '5vw'}}
    />
    <Slide title="<ContainerComponents />">
      <section>
        <ul>
          <li>No DOM Nodes</li>
          <li>All the Business Logic</li>
          <li>All the State</li>
          <li>All the Effects</li>
        </ul>
      </section>
    </Slide>
  </>
);

ContainerComponents.displayName = 'ContainerComponents';

export default ContainerComponents;
