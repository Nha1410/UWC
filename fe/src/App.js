import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TaskManagement from './pages/TaskManagement';
import StaffManagement from './pages/StaffManagement';
import DefaultLayout from './components/Layout/DefaultLayout';
import AuthLayout from './components/Layout/AuthLayout';
import SidebarLogin from './components/Layout/components/SidebarAuth/Login';
import SidebarSignUp from './components/Layout/components/SidebarAuth/Signup';
import VehicalManagement from './pages/VehicleManagement';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <AuthLayout Sidebar={<SidebarLogin />}>
                                <Login />
                            </AuthLayout>
                        }
                    />
                    <Route
                        path="signup"
                        element={
                            <AuthLayout Sidebar={<SidebarSignUp />}>
                                <SignUp />
                            </AuthLayout>
                        }
                    />
                    <Route
                        path="/task-management"
                        element={
                            <DefaultLayout>
                                <TaskManagement />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/staff-management"
                        element={
                            <DefaultLayout>
                                <StaffManagement />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/vehicle-management"
                        element={
                            <DefaultLayout>
                                <VehicalManagement />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
