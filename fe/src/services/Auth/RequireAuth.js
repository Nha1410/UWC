import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './AuthSlice';
import { useCookies } from 'react-cookie';
import jwt from 'jwt-decode';

const RequireAuth = ({ isHomePage = false }) => {
    let token = useSelector(selectCurrentToken);
    const [cookies, setCookie] = useCookies(['jwt']);
    let hasRole = true;
    if (token) {
        const jwtToken = cookies.jwt;
        const jwtDecode = jwt(jwtToken);
        const role = jwtDecode.role;
        hasRole = role === 1;
    }

    const location = useLocation();

    console.log(hasRole, isHomePage);

    return token && (hasRole || isHomePage) ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
