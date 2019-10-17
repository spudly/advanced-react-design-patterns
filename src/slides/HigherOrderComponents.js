import React from 'react';
import Slide from '../widgets/Slide';
import wrappers from '../images/wrappers.jpeg';

// (displayName, statics, forwardRef)
const HigherOrderComponents = () => (
  <>
    <img
      src={wrappers}
      alt="wrappers"
      style={{position: 'absolute', height: '50vh', top: '25vh', right: '5vw'}}
    />
    <Slide title="<HigherOrderComponents />">
      <section style={{width: '40vw'}}>
        <ul>
          <li>Makes Containers Reusable</li>
          <li>
            Basically, it's a function that generates a Container Component
          </li>
        </ul>
      </section>
    </Slide>
  </>
);

HigherOrderComponents.displayName = 'HigherOrderComponents';

export default HigherOrderComponents;
