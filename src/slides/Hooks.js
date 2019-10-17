import React from 'react';
import Slide from '../widgets/Slide';
import useless from '../images/useless.jpg';

const Hooks = () => (
  <>
    <Slide title={'<Hooks />'}>
      <section>
        <ul>
          <li>
            <s>Container Components</s>
          </li>
          <li>
            <s>Presentation Components</s>
          </li>
          <li>
            <s>Render Props</s>
          </li>
        </ul>
      </section>
    </Slide>
    <img
      src={useless}
      alt="useless"
      style={{position: 'absolute', right: '5vw', height: '50vh', top: '25vh'}}
    />
  </>
);

Hooks.displayName = 'Hooks';

export default Hooks;
