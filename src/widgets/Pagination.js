import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const Pagination = ({slides, getRoute}) => {
  const match = useRouteMatch(`/:page`);
  if (!match || !match.params || !match.params.page) {
    return null;
  }
  const currentIndex = slides.findIndex(
    Comp => getRoute(Comp) === match.params.page
  );
  if (currentIndex === -1) {
    return null;
  }
  return (
    <ul className="pagination">
      <li>
        {currentIndex === 0 ? (
          <span>&lt; </span>
        ) : (
          <Link to={`/${getRoute(slides[currentIndex - 1])}`}>
            &lt;{' '}
          </Link>
        )}
      </li>
      {slides.map((Comp, index) =>
        currentIndex === index ? (
          <span key={getRoute(Comp)}>{index + 1}</span>
        ) : (
          <li key={getRoute(Comp)}>
            <Link to={`/${getRoute(Comp)}`}>•</Link>
          </li>
        )
      )}
      <li>
        {currentIndex === slides.length - 1 ? (
          <span> /&gt;</span>
        ) : (
          <Link to={`/${getRoute(slides[currentIndex + 1])}`}>
            {' '}
            /&gt;
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
