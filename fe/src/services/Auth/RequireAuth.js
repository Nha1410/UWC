import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './AuthSlice';
import Cookies from 'js-cookie';

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken);
    console.log(token);
    console.log('cookie');
    console.log(Cookies.get('jwt'));
    const location = useLocation();

    return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
