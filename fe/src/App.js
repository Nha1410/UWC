import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Management from './pages/Management';
import DefaultLayout from './components/Layout/DefaultLayout';

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
                    <Route path="/login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route
                        path="/task-management"
                        element={
                            <DefaultLayout>
                                <Management />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
