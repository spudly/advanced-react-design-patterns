import React from 'react';
import Slide from '../widgets/Slide';

const Why2 = () => (
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
          <li style={{visibility: 'hidden'}}>Easy to Read</li>
          <li style={{visibility: 'hidden'}}>Easy to Test</li>
          <li style={{visibility: 'hidden'}}>Faster</li>
          <li style={{visibility: 'hidden'}}>More Reliable (fewer bugs)</li>
        </ul>
      </section>
    </Slide>
  </>
);

Why2.displayName = 'Why2';

export default Why2;
