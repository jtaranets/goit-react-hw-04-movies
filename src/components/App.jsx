import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Header/Header';
import styles from './App.module.css';

const Home = Loadable({
  loader: () =>
    import('../Pages/Home/Home' /* webpackChunkName: "home-page" */),
  loading() {
    return <h2>Loading...</h2>;
  },
});

const MovieDetailsPage = Loadable({
  loader: () =>
    import(
      '../Pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movieDetailspage" */
    ),
  loading() {
    return <h2>Loading...</h2>;
  },
});

const MoviesPage = Loadable({
  loader: () =>
    import(
      '../Pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
    ),
  loading() {
    return <h2>Loading...</h2>;
  },
});

const NotFound = Loadable({
  loader: () =>
    import(
      '../Pages/NotFound/NotFound' /* webpackChunkName: "notFound-page" */
    ),
  loading() {
    return <h2>Loading...</h2>;
  },
});

const App = () => (
  <>
    <Header />
    <div className={styles.container}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </>
);

export default App;

// const routes = [
//   { path: '/', name: 'Home', component: Home },
//   { path: '/movies', name: 'Movies', component: MoviesPage },
//   {
//     path: '/movies/:movieId',
//     name: 'MovieDetailsPage',
//     component: MovieDetailsPage,
//   },
//   { name: 'Not Found', component: NotFound },
// ];
