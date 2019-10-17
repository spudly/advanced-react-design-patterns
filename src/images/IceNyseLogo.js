import React, {useContext} from 'react';
import ThemeContext from '../utils/ThemeContext';

const NyseBar = ({textColor, ...props}) => {
  return (
    <rect
      className="bar"
      height={32.1}
      width={6.5}
      y={9.5}
      fill="url(#__ice-logo-nyse_bar-gradient)"
      {...props}
    />
  );
};

const IceNyseLogo = props => {
  const {theme} = useContext(ThemeContext);
  const textColor = theme === 'dark' ? 'white' : 'black';
  return (
    <>
      <svg viewBox="10 10 50 50" {...props}>
        <g>
          <polygon
            points="9.9,9.5 9.9,59.5 19.8,59.5 19.8,53.8 15.6,53.8 15.6,15.2 54.3,15.2 54.3,36.6 59.9,36.6 59.9,9.5"
            fill="#72c7e7"
          />
          <g>
            <rect x="27.9" y="44.4" width="3" height="15" fill={textColor} />
            <path
              d="M41.5,46.2c1.5,0,2.5,0.4,3,0.7l0.2,0.1l0.7-2.4l-0.1-0.1c-0.7-0.4-2.1-0.8-3.8-0.8c-2.4,0-4.4,0.8-5.9,2.3c-1.4,1.4-2.2,3.5-2.2,5.7c0,2.3,0.7,4.2,2,5.6c1.3,1.4,3.2,2.1,5.4,2.1c1.9,0,3.5-0.5,4.3-0.9l0.1-0.1l-0.5-2.4l-0.2,0.1c-0.8,0.3-1.7,0.7-3.2,0.7c-2.9,0-4.9-2.1-4.9-5.3c0-1.5,0.5-2.8,1.3-3.8C38.6,46.8,39.9,46.2,41.5,46.2"
              fill={textColor}
            />
            <path
              d="M53.2,46c1,0,1.8,0.3,2.4,0.9c0.9,1,1.1,2.4,1.1,3h-7.4C49.6,48.4,50.7,46,53.2,46 M58.4,46.2c-1.1-1.7-2.8-2.5-5-2.5c-2.1,0-3.9,0.8-5.2,2.4c-1.2,1.5-1.9,3.5-1.9,5.7c0,2.2,0.7,4.2,2,5.5c1.3,1.4,3.2,2.1,5.4,2.1c2.4,0,4-0.5,5-1l0.1-0.1l-0.5-2.3l-0.2,0.1c-0.9,0.4-2,0.7-4,0.7c-1.4,0-2.5-0.4-3.4-1.1c-0.9-0.8-1.4-2-1.5-3.6h10.3l0-0.3c0-0.3,0.1-0.7,0.1-1.1C59.7,50,59.6,48,58.4,46.2"
              fill={textColor}
            />
          </g>
        </g>
      </svg>
      <svg viewBox="10 10 50 50" {...props}>
        <g>
          <path
            fill={textColor}
            d="M43,50.7c-1.9-0.6-2.8-0.9-2.8-1.9v0c0-0.7,0.7-1.2,1.6-1.2c1.1,0,2.3,0.5,3.4,1.4l1.5-2.4c-1.3-1.2-3-1.8-4.9-1.8c-2.7,0-4.6,1.7-4.6,4.3v0c0,1.9,1.7,3.5,4.4,4.4c2,0.7,2.7,1,2.7,1.8v0c0,0.8-0.9,1.3-1.9,1.3c-1.5,0-2.7-0.7-3.9-1.7L37,57.3c1.6,1.4,3.5,2.1,5.4,2.1c2.8,0,4.8-2.1,4.8-4.4v0C47.2,52.9,45.7,51.5,43,50.7z"
          />
          <NyseBar x="9.3" textColor={textColor} />
          <NyseBar x="18" textColor={textColor} />
          <NyseBar x="26.7" textColor={textColor} />
          <NyseBar x="35.3" textColor={textColor} />
          <NyseBar x="44" textColor={textColor} />
          <NyseBar x="52.7" textColor={textColor} />
          <polygon
            fill={textColor}
            points="52.7,56.8 52.7,53.4 58.3,53.4 58.3,50.8 52.7,50.8 52.7,47.4 59.2,47.4 59.2,44.9 49.8,44.9 49.8,59.3 59.2,59.3 59.2,56.8 52.7,56.8"
          />
          <polygon
            fill={textColor}
            points="18,44.9 18,54 12.3,44.9 9.3,44.9 9.3,59.3 12.2,59.3 12.2,49.8 18.2,59.3 20.9,59.3 20.9,44.9"
          />
          <polygon
            fill={textColor}
            points="32.9,44.9 29.7,50.1 26.5,44.9 23,44.9 28.3,53 28.3,59.3 31.2,59.3 31.2,53 36.4,44.9"
          />
        </g>
        <defs>
          <linearGradient
            id="__ice-logo-nyse_bar-gradient"
            gradientUnits="userSpaceOnUse"
            y1="40.4105"
            x2="0"
            y2="5.23"
          >
            <stop offset="0" style={{stopColor: '#1B4677'}} />
            <stop offset="0.45" style={{stopColor: '#00B3DB'}} />
            <stop offset="0.4781" style={{stopColor: '#0CB6DD'}} />
            <stop offset="0.5996" style={{stopColor: '#39C0E5'}} />
            <stop offset="0.716" style={{stopColor: '#5DC8EC'}} />
            <stop offset="0.8246" style={{stopColor: '#77CDF0'}} />
            <stop offset="0.9224" style={{stopColor: '#87D1F3'}} />
            <stop offset="1" style={{stopColor: '#8CD2F4'}} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default IceNyseLogo;
