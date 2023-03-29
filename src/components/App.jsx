import { Routes, Route } from 'react-router-dom';
import { useState, lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

const Trends = lazy(() => import('./Trends'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  const [page, setPage] = useState(1);

  const previousPage = page => {
    setPage(prevPage => prevPage - 1);
  };
  const nextPage = page => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Trends
                page={page}
                onNextClick={page => nextPage(page)}
                onPreviousClick={page => previousPage(page)}
              />
            }
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Trends />} />
      </Routes>
    </div>
  );
};
