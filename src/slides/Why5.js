import React from 'react';
import Slide from '../widgets/Slide';

const Why5 = () => (
  <>
    <Slide title="<Why />">
      <section style={{alignSelf: 'center'}}>
        <h2 style={{fontSize: '10vw'}}>Better Code!</h2>
      </section>
      <section
        style={{alignSelf: 'center', fontSize: '3vw', marginBottom: '20vh'}}
      >
        <ul>
          <li>Easy to Write</li>
          <li>Easy to Read</li>
          <li>Easy to Test</li>
          <li>Faster</li>
          <li style={{visibility: 'hidden'}}>More Reliable (fewer bugs)</li>
        </ul>
      </section>
    </Slide>
  </>
);

Why5.displayName = 'Why5';

export default Why5;
