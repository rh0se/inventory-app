import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import MainLayout from './layouts/mainLayout';
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
       <Route index element={<AdminPage />} />
       <Route path="/user" element={<UserPage />} />
       <Route path="*" element={<h1>Page Not Found</h1>} /> {/* Fallback Route */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
