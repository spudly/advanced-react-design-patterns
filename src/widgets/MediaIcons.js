import React from 'react';

export const PlayIcon = ({size = '1em', fill = 'currentColor'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M2 24v-24l20 12-20 12z" />
  </svg>
);

export const PauseIcon = ({size = '1em', fill = 'currentColor'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z" />
  </svg>
);

export const StopIcon = ({size = '1em', fill = 'currentColor'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M0 0h24v24h-24z" />
  </svg>
);

export const FirstIcon = ({size = '1em', fill = 'currentColor'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M13 12l11-7v14l-11-7zm-11 0l11-7v14l-11-7zm-2 6h2v-12h-2v12z" />
  </svg>
);

export const LastIcon = ({size = '1em', fill = 'currentColor'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M0 19v-14l11 7-11 7zm11 0v-14l11 7-11 7zm13-13h-2v12h2v-12z" />
  </svg>
);

export const NextIcon = ({size = '1em', fill = 'currentColor'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M0 19v-14l12 7-12 7zm12 0v-14l12 7-12 7z" />
  </svg>
);

export const PrevIcon = ({size = '1em', fill = 'currentColor'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M12 12l12-7v14l-12-7zm-12 0l12-7v14l-12-7z" />
  </svg>
);
