import React, {useState, useEffect, useMemo} from 'react';
import {Redirect, useRouteMatch, useHistory} from 'react-router-dom';
import ThemeContext from './utils/ThemeContext';
import Pagination from './widgets/Pagination';
import slides from './slides';

const getRoute = SlideComponent => SlideComponent.displayName.replace(/ /g, '');

function App() {
  const history = useHistory();
  const match = useRouteMatch(`/:page`);
  const page = match && match.params && match.params.page;
  const pageIndex = page ? slides.findIndex(s => getRoute(s) === page) : -1;
  const [theme, setTheme] = useState('dark');
  const themeContext = useMemo(() => ({theme, setTheme}), [theme]);

  useEffect(() => {
    document.documentElement.className = `theme--${theme}`;
  }, [theme]);

  useEffect(() => {
    const handleKeyUp = e => {
      if (
        document.activeElement instanceof HTMLTextAreaElement ||
        document.activeElement instanceof HTMLInputElement
      ) {
        return;
      }
      if (e.key === 'ArrowLeft' && pageIndex > 0) {
        history.push(`/${getRoute(slides[pageIndex - 1])}`);
      }
      if (e.key === 'ArrowRight' && pageIndex < slides.length - 1) {
        history.push(`/${getRoute(slides[pageIndex + 1])}`);
      }
    };
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [history, pageIndex]);

  const Comp = slides.find(s => getRoute(s) === page);
  if (!Comp) {
    return <Redirect to={`/${getRoute(slides[0])}`} />;
  }
  return (
    <ThemeContext.Provider value={themeContext}>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'grid',
          gridTemplateRows: '1fr 5vh',
          overflow: 'hidden',
        }}
      >
        <Comp />
        <footer
          className="text-center"
          style={{lineHeight: '5vh', position: 'relative'}}
        >
          <Pagination slides={slides} getRoute={getRoute} />
          <button
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              opacity: 0.5,
              border: 0,
              background: 'none',
              fontSize: 'inherit',
              color: 'inherit',
              cursor: 'pointer',
              lineHeight: '5vh',
              outline: 0,
            }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {`${theme[0].toUpperCase()}${theme.slice(1)}`} Theme
          </button>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
