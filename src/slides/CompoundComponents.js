import React from 'react';
import Slide from '../widgets/Slide';
import coupled from '../images/coupled.jpg';

const CompoundComponents = () => (
  <>
    <img
      src={coupled}
      alt="coupled"
      style={{position: 'absolute', height: '50vh', top: '25vh', right: '5vw'}}
    />
    <Slide title="<CompoundComponents />">
      <section style={{width: '50vw'}}>
        <ul>
          <li>Tightly-Coupled Components with a Parent/Child Relationship</li>
          <li>
            <select style={{fontSize: '2vw', float: 'right', marginTop: '7vh'}}>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
            <pre>
              <code>{`<select>
  <option>One</option>
  <option>Two</option>
  <option>Three</option>
</select>`}</code>
            </pre>
          </li>
          <li>
            Uses <code>React.Children</code> &amp;{' '}
            <code>React.cloneElement</code>
          </li>
        </ul>
      </section>
    </Slide>
  </>
);

CompoundComponents.displayName = 'CompoundComponents';

export default CompoundComponents;
