/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Slide from '../widgets/Slide';

const Takeaways = () => (
  <>
    <Slide title="<Takeaways />">
      <section>
        <ul style={{fontSize: '4vw', listStyle: 'none'}}>
          <li style={{visibility: 'hidden'}}>😓 Coding is Hard</li>
          <li style={{visibility: 'hidden'}}>
            👍 Design Patterns Make it Better
          </li>
          <li style={{visibility: 'hidden'}}>
            🏁🇺🇸🇪🇬🇪🇭🇪🇷🇪🇸 There are Lots of Patterns
          </li>
          <li style={{visibility: 'hidden'}}>💡 Know the Patterns</li>
          <li style={{visibility: 'hidden'}}>🦉 Choose Patterns Wisely</li>
          <li style={{visibility: 'hidden'}}>👊 You got this!</li>
        </ul>
      </section>
    </Slide>
  </>
);

Takeaways.displayName = 'Takeaways';

export default Takeaways;
