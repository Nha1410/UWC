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
import RequireAuth from './services/Auth/RequireAuth';
import VehicalManagement from './pages/VehicleManagement';
import RouteManagement from './pages/RouteManagement';
import ScheduleList from './pages/ScheduleList';
import CheckInOut from './pages/CheckInOut';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { selectCurrentToken, setCredentials } from './services/Auth/AuthSlice';
import jwt from 'jwt-decode';
import { useDispatch } from 'react-redux';

function App() {
    const [cookies, setCookie] = useCookies(['jwt']);
    const dispatch = useDispatch();
    if (!useSelector(selectCurrentToken) && cookies.jwt) {
        const user = jwt(cookies.jwt);
        console.log(user);
        dispatch(setCredentials({ email: user.email, id: user.id, accessToken: cookies.jwt }));
    }
    return (
        <CookiesProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route element={<RequireAuth isHomePage={true} />}>
                            <Route
                                path="/"
                                element={
                                    <DefaultLayout>
                                        <Home />
                                    </DefaultLayout>
                                }
                            />
                        </Route>
                        <Route
                            path="/login"
                            element={
                                <AuthLayout Sidebar={<SidebarLogin />}>
                                    <Login />
                                </AuthLayout>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <AuthLayout Sidebar={<SidebarSignUp />}>
                                    <SignUp />
                                </AuthLayout>
                            }
                        />
                        <Route element={<RequireAuth />}>
                            <Route
                                path="/route-management"
                                element={
                                    <DefaultLayout>
                                        <RouteManagement />
                                    </DefaultLayout>
                                }
                            />
                        </Route>
                        <Route element={<RequireAuth />}>
                            <Route
                                path="/staff-management"
                                element={
                                    <DefaultLayout>
                                        <StaffManagement />
                                    </DefaultLayout>
                                }
                            />
                        </Route>
                        <Route element={<RequireAuth />}>
                            <Route
                                path="/vehicle-management"
                                element={
                                    <DefaultLayout>
                                        <VehicalManagement />
                                    </DefaultLayout>
                                }
                            />
                        </Route>
                        <Route element={<RequireAuth />}>
                            <Route
                                path="/schedule-list"
                                element={
                                    <DefaultLayout>
                                        <ScheduleList />
                                    </DefaultLayout>
                                }
                            />
                        </Route>
                        <Route
                            path="/check-in-out"
                            element={
                                <DefaultLayout>
                                    <CheckInOut />
                                </DefaultLayout>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </CookiesProvider>
    );
}

export default App;
