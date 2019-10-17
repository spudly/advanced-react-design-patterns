import React from 'react';
import Slide from '../widgets/Slide';
import overwhelmed from '../images/overwhelmed.png';

const Agenda = () => (
  <>
    <img
      src={overwhelmed}
      alt="overwhelmed"
      style={{position: 'absolute', height: '70vh', top: '15vh', right: '5vw'}}
    />
    <Slide title="<Agenda />">
      <section>
        <ul>
          <li>Presentation Components</li>
          <li>Container Components</li>
          <li>Higher-Order Components</li>
          <li>Render Props</li>
          <li>Prop Collections</li>
          <li>Prop Collection Getters</li>
          <li>Compound Components</li>
          <li>Nested Compound Components</li>
          <li>Validated Context Consumers</li>
          <li>Uncontrolled Components</li>
          <li>State Initializers</li>
          <li>Controlled Components</li>
        </ul>
      </section>
    </Slide>
  </>
);

Agenda.displayName = 'Agenda';

export default Agenda;
