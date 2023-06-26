import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageA from "./pageA";
import PageB from "./pageB";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageA></PageA>,
  },
  {
    path: "/detail/:id",
    element: <PageB></PageB>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
