import './App.css';
import { useRoutes , RouterProvider , createBrowserRouter, BrowserRouter} from 'react-router-dom';
import { routes } from './routes';


const Router = () => {
  const content = useRoutes(routes);
  return content;
};

const App = () => {
  return <BrowserRouter> <Router /></BrowserRouter>
};
export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// // import Login from './pages/sessions/Login'
// import SuperAdminDashboard from './pages/SuperAdminDashboard';
// import AdminDashboard from './pages/AdminDashboard';
// import StudentDashboard from './pages/StudentDashboard';
// import ProtectedRoute from './routes/ProtectedRoute';
// import Video from './pages/user/Video'

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/superadmin-dashboard" element={<ProtectedRoute role="superadmin"><SuperAdminDashboard /></ProtectedRoute>} />
//                 <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
//                 <Route path="/student-dashboard" element={<ProtectedRoute role="student"><Video /></ProtectedRoute>} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

