import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import MainLayout from "./layouts/MainLayout";
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-center">
      <p className="text-red-500 text-2xl font-bold">Page Not Found!</p>
    </div>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
