import React from 'react';
import Slide from '../widgets/Slide';
import controlled from '../images/controlled.jpeg';

const ControlledComponents = () => (
  <>
    <img
      src={controlled}
      alt="controlled"
      style={{position: 'absolute', height: '40vh', top: '30vh', right: '5vw'}}
    />
    <Slide title="<ControlledComponents />">
      <section style={{width: '50vw'}}>
        <ul>
          <li>
            Props control what gets rendered, not internal state
            <dl>
              <dt>Uncontrolled:</dt>
              <dd>{`<input defaultValue="stuff" />`}</dd>
              <dt>Controlled:</dt>
              <dd>
                <pre>{`<input
  value="stuff"
  onChange={handleChange}
/>`}</pre>
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </Slide>
  </>
);

ControlledComponents.displayName = 'ControlledComponents';

export default ControlledComponents;
