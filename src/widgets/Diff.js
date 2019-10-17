import React, {useContext} from 'react';
import {MonacoDiffEditor} from 'react-monaco-editor';
import ThemeContext from '../utils/ThemeContext';

const Diff = ({a, b}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <MonacoDiffEditor
      language="javascript"
      theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
      original={a}
      value={b}
      options={{
        readOnly: true,
        automaticLayout: true,
      }}
    />
  );
};

export default Diff;
