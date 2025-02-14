import './App.css';
import Login from './Login'; // Make sure the path is correct based on your project structure
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnalyzeData from './AnalyzeData'; 
import UserDetails from './UserDetails';
import Video from './Video';
// function App() {
  // return (
// <div calss="container">
  // );
// }

const App = () => {
  return (
    <div>
	   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/analyze-data" element={<AnalyzeData />} />
		<Route path="/user-details/:userId" element={<UserDetails />} />
		<Route path="/practice" element={<Video />} />
		
      </Routes>
    </BrowserRouter>
    </div>

  );
};

export default App;
