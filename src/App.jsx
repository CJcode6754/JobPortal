import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage, { JobLoader } from "./Pages/JobPage";
import AddJob from "./Pages/AddJob";
import EditJob from './Pages/EditJob';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage isHome={true} />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="/edit-job/:id" element={<EditJob updateJobSubmit={updateJob} />} loader={JobLoader} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={JobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );


  return <RouterProvider router={router} />;
};

export default App;
