import React from 'react';
import Slide from '../widgets/Slide';
import react from '../images/react.svg';
import javascript from '../images/javascript.svg';
import notepad from '../images/notepad.png';
import netscape from '../images/netscape.png';
import vscode from '../images/vscode.svg';
import IceLogo from '../images/IceNyseLogo';

const AboutMe = () => (
  <>
    <Slide title="<AboutMe />">
      <section>
        <ul style={{width: '60vw'}}>
          <li>
            Frontend Developer on Website Team @ Intercontinental Exchange, Inc.
            (ICE owns the New York Stock Exchange)
          </li>
          <li>
            Maintain a React-based CMS used to build several websites, including{' '}
            <a href="https://www.theice.com/">theice.com</a> &amp;{' '}
            <a href="https://www.nyse.com/">nyse.com</a>
          </li>
          <li>React since 2014 (React 0.12)</li>
          <li>HTML, CSS, &amp; JavaScript since ~ 1996 (Netscape, Notepad)</li>
        </ul>
      </section>

      <section
        style={{display: 'flex', justifyContent: 'space-around', width: '60vw'}}
      >
        <img
          src={javascript}
          alt="javascript"
          style={{
            opacity: 1,
            height: '11vw',
            marginRight: '1vw',
          }}
        />

        <img
          src={react}
          alt="react"
          style={{
            opacity: 1,
            height: '11vw',
            marginRight: '1vw',
          }}
        />

        <img
          src={notepad}
          alt="notepad"
          style={{
            opacity: 1,
            height: '11vw',
            marginRight: '1vw',
            imageRendering: 'pixelated',
          }}
        />
      </section>

      <section
        style={{display: 'flex', justifyContent: 'space-around', width: '60%'}}
      >
        <img
          src={vscode}
          alt="vscode"
          style={{
            opacity: 1,
            height: '11vw',
            marginRight: '1vw',
            imageRendering: 'pixelated',
          }}
        />

        <IceLogo
          style={{
            opacity: 1,
            height: '11vw',
            marginRight: '1vw',
          }}
        />
      </section>
    </Slide>
    <img
      src={netscape}
      alt="netscape"
      style={{
        opacity: 1,
        position: 'absolute',
        height: '60vh',
        top: '20vh',
        right: '5vw',
        imageRendering: 'pixelated',
      }}
    />
  </>
);

AboutMe.displayName = 'AboutMe';

export default AboutMe;
