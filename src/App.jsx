import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Animations from "./pages/Animations";
// import Videos from "./pages/Videos";
// import Designs from "./pages/Designs";
import Root from "./pages/Root";
import { Suspense ,lazy } from "react";

const Animations = lazy(() => import('./pages/Animations'));
const Videos = lazy(() => import('./pages/Videos'))
const Designs = lazy(() => import('./pages/Designs'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/animations",
        element: <Suspense fallback={<p>Loading...</p>}><Animations /></Suspense>,
      },
      {
        path: '/videos',
        element: <Suspense fallback={<p>Loading...</p>}><Videos /></Suspense>
      },
      {
        path: '/designs',
        element: <Suspense fallback={<p>Loading...</p>}><Designs /></Suspense>
      },
      
    ]
  },
 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
