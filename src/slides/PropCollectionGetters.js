import React from 'react';
import Slide from '../widgets/Slide';
import collectionAgency from '../images/collection-agency.png';

const PropCollectionGetters = () => (
  <>
    <img
      src={collectionAgency}
      alt="collectionAgency"
      style={{position: 'absolute', height: '35vh', top: '20vh', right: '5vw'}}
    />
    <Slide title="<PropCollectionGetters />">
      <section style={{width: '50vw'}}>
        <ul>
          <li>
            A function provided to a presentation component by a container, HoC,
            or a component with render props
          </li>
          <li>Creates a prop collection</li>
          <li>
            Makes it possible to generate the prop collection based on props
            provided by the consumer, merging and preserving both the consumer's
            desired behavior and the container's desired behavior.
          </li>
          <li>
            Input:{' '}
            <code style={{whiteSpace: 'nowrap'}}>
              {'<input {...getInputProps({className: "consumer-class"}) />'}
            </code>
            <br />
            Result:
            <code style={{whiteSpace: 'nowrap'}}>
              {'<input className="consumer-class container-class" />'}
            </code>
          </li>
        </ul>
      </section>
    </Slide>
  </>
);

PropCollectionGetters.displayName = 'PropCollectionGetters';

export default PropCollectionGetters;
