// Core
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Error from "./screens/Error/Error";

// Styles
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/year",
    element: <Detail />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
