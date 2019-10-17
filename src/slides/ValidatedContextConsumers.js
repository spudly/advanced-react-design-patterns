import React from 'react';
import Slide from '../widgets/Slide';
import validate from '../images/validate.jpg';

const ValidatedContextConsumers = () => (
  <>
    <img
      src={validate}
      alt="validate"
      style={{position: 'absolute', height: '30vh', top: '35vh', right: '5vw'}}
    />
    <Slide title="<ValidatedContextConsumers />">
      <section style={{width: '40vw'}}>
        <ul>
          <li>
            Ensures that components that consume context are not rendered
            outside of a context provider
          </li>
        </ul>
      </section>
    </Slide>
  </>
);

ValidatedContextConsumers.displayName = 'ValidatedContextConsumers';

export default ValidatedContextConsumers;
