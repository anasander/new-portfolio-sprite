import Home from './assets/pages/Home';
import Secret from './assets/pages/Secret';
import './App.css';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/secret', element: <Secret /> },
];