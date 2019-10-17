import React from 'react';
import Slide from '../widgets/Slide';
import collections from '../images/collections.jpeg';

const PropCollections = () => (
  <>
    <img
      src={collections}
      alt="collections"
      style={{position: 'absolute', height: '70vh', top: '15vh', right: '5vw'}}
    />
    <Slide title="<PropCollections />">
      <section style={{width: '50vw'}}>
        <ul>
          <li>
            An object of props provided to a presentation component by a
            container, HoC, or a component with render props
          </li>
          <li>
            Each prop collection is intended to be spread onto a DOM node.
          </li>
          <li>
            Example: <code>{'<input {...inputProps} />'}</code>
          </li>
        </ul>
      </section>
    </Slide>
  </>
);

PropCollections.displayName = 'PropCollections';

export default PropCollections;
