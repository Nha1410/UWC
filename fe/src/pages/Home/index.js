import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../../services/Auth/AuthSlice';

function Home() {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectCurrentToken);

    const userAuthSuccess = user ? `Hello ${user}` : 'Hello';
    const tokenAuthSuccess = `${token.slice(0, 9)}...`;

    console.log(userAuthSuccess, ' ', tokenAuthSuccess);

    return (
        <div className="">
            <h2>home page</h2>
        </div>
    );
}

export default Home;
