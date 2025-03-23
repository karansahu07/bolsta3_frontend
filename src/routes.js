import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import AnalyzeData from "./New folder/AnalyzeData";
import Addperson from "./pages/admin/addperson/Addperson";
import Dashboard from "./pages/admin/dashboard/AdminDashboard";
import PersonDetail from "./pages/admin/persondetail/PersonDetail";
import TrainingScreen from "./pages/admin/trainingscreen/TrainingScreen";
import Video from "./pages/user/Video"
import UserDetails from "./pages/user/UserDetails";
import SuperDashboard from "./pages/superadmin/dashboard/SuperAdminDashboard";
// import Home from "./components/Home";
import AuthGuard from "./components/Authgaurd";
import AddCompany from "./pages/superadmin/addcompany/AddCompany";
// import { Home } from "lucide-react";

export const routes = [
    // {
    //     path : "/",
    //     element : <Home />
    // },
    
    {
        path : "",
        element : <AuthGuard><MainLayout></MainLayout></AuthGuard>,
        children : [
            {
                path : "/",
                element : <AddCompany />
            },
            {
                path : "/superdashboard",
                element : <SuperDashboard />
            },
            {
                path : "/dashboard",
                element : <Dashboard />
            },
            {
                path : "/trainings",
                element : <TrainingScreen />
            },
            {
                path : "/addperson",
                element : <Addperson />
            },
            {
                path : "/persons",
                element : <PersonDetail />
            },
            
        ]
    },
    {
        path : "/practice",
        element : <Video />
    },
    {
        path : "/analyze-data",
        element : <AnalyzeData />
    },
    {
        path : "/user-details/:userId",
        element : <UserDetails />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/*",
        element : <h1>404 not found</h1>
    },
]