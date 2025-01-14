// Core
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Providers
import QueryProvider from "./providers/QueryProvider";

// Components
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Error from "./screens/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Styles
import "./App.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/:stateId?",
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/year/:year",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </div>
  );
}

export default App;
