import './App.css';
import Login from './Login'; // Make sure the path is correct based on your project structure
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnalyzeData from './AnalyzeData'; 
import UserDetails from './UserDetails';
import Video from './Video';
import Traningscreen from './admin/Traningscreen';
import Addperson from './admin/Addperson';
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
		<Route path="/traningscreen" element={<Traningscreen/>} />
		<Route path="/addperson" element={<Addperson/>} />
		
      </Routes>
    </BrowserRouter>
    </div>

  );
};

export default App;
