import React from 'react';
import Slide from '../widgets/Slide';
import freedom from '../images/freedom.jpeg';

const NestedCompoundComponents = () => (
  <>
    <img
      src={freedom}
      alt="freedom"
      style={{position: 'absolute', height: '50vh', top: '25vh', right: '5vw'}}
    />
    <Slide title="<NestedCompoundComponents />">
      <section style={{width: '50vw'}}>
        <ul>
          <li>Uses React context to link compound components together</li>
          <li>Child components don't have to be direct-children anymore</li>
          <li>
            <pre>
              <code>{`<Radios name="count">
  <label><Radio value={1} />One</label>
  <label><Radio value={2} />Two</label>
  <label><Radio value={3} />Three</label>
</Radios>
            `}</code>
            </pre>
          </li>
        </ul>
      </section>
    </Slide>
  </>
);

NestedCompoundComponents.displayName = 'NestedCompoundComponents';

export default NestedCompoundComponents;
