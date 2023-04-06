import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Home() {
    return (
        <div>
            <h2 className="text-3xl font-bold underline">Home Page</h2>;
            <FontAwesomeIcon icon={icon({ name: 'user-secret' })} />
        </div>
    );
}

export default Home;
