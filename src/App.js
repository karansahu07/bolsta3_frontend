import './App.css';
import { useRoutes , RouterProvider , createBrowserRouter, BrowserRouter} from 'react-router-dom';
import { routes } from './routes';
// import Login from './Login'; // Make sure the path is correct based on your project structure
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AnalyzeData from './AnalyzeData'; 
// import UserDetails from './UserDetails';
// import Video from './Video';
// import TrainingScreen from './admin/TrainingScreen';
// import Addperson from './admin/Addperson';
// import Dashboard from './admin/Dashboard';
// import PersonDetail from './admin/PersonDetail';

// function App() {
  // return (
// <div calss="container">
  // );
// }

// const App = () => {
//   return (
//     <div>
// 	   <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<PersonDetail />} exact />
//         <Route path="/analyze-data" element={<AnalyzeData />} />
// 		<Route path="/user-details/:userId" element={<UserDetails />} />
// 		<Route path="/practice" element={<Video />} />
// 		<Route path="/TrainingScreen" element={<TrainingScreen/>} />
// 		<Route path="/addperson" element={<Addperson/>} />
// 		<Route path="/dashboard" element={<Dashboard/>} />
		
//       </Routes>
//     </BrowserRouter>
//     </div>

//   );
// };

const Router = () => {
  const content = useRoutes(routes);
  return content;
};

const App = () => {
  // const content = createBrowserRouter(routes);
  // return <RouterProvider>{content}</RouterProvider>;
  return <BrowserRouter> <Router /></BrowserRouter>
};
export default App;
