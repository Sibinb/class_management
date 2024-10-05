import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SelectSlot from "./Pages/SelectSlot";
import ProtectedRoute from "./routes/ProtectedRoute";

// routes for the entrie App
const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <ProtectedRoute>
        <Home/>
      </ProtectedRoute>
    ) ,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:'/add-new-slot',
    element:(
      <ProtectedRoute>
        <SelectSlot/>
      </ProtectedRoute>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
