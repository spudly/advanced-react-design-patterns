import React from 'react';
import Slide from '../widgets/Slide';
import stop from '../images/stop.jpeg';

const TheEnd = () => (
  <Slide title="<TheEnd />">
    <section style={{textAlign: 'center'}}>
      <img
        className="slide-full"
        src={stop}
        alt="stop"
        style={{width: '50vw'}}
      />
    </section>
    <section style={{textAlign: 'center'}}>
      <p>
        <a href="https://twitter.com/shuoink">@shuoink</a>
      </p>
      <p>
        <a href="https://stephensorensen.com/">stephensorensen.com</a>
      </p>
      <p>
        <a href="https://react-patterns.stephensorensen.com/">
          react-patterns.stephensorensen.com
        </a>
      </p>
    </section>
  </Slide>
);

TheEnd.displayName = 'TheEnd';

export default TheEnd;
