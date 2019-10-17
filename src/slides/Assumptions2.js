import React from 'react';
import Slide from '../widgets/Slide';
import walkaway from '../images/walkaway.gif';

const Assumptions2 = () => (
  <>
    <Slide title={'<Assumptions />'}>
      <section>
        <h2>Intermediate Knowledge Of:</h2>
        <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>React &amp; React Hooks</li>
        </ul>
      </section>

      <section>
        <h2>This Talk is Not:</h2>
        <ul>
          <li>A React Tutorial</li>
          <li>An Overview of Documented React APIs</li>
        </ul>
      </section>

      <section>
        <h2>This Talk Is:</h2>
        <ul>
          <li>Design Patterns for using React APIs</li>
        </ul>
      </section>
    </Slide>
    <img
      src={walkaway}
      alt="walk out"
      style={{position: 'absolute', right: '5vw', height: '40vh', top: '30vh'}}
    />
  </>
);

Assumptions2.displayName = 'Assumptions2';

export default Assumptions2;
