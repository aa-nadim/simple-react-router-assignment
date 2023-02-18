import { createBrowserRouter } from 'react-router-dom';
import ColorDetails from '../components/ColorDetails';
import Colors from '../components/Colors';
import ErrorPage from '../components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      return fetch(`https://jsonplaceholder.typicode.com/photos`);
    },
    element: <Colors />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'color-details/:id',
    loader: async ({ params }) => {
      return fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
    },
    element: <ColorDetails />,
  },
]);
