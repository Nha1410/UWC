import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function BoxContent({ title, children }) {
    return (
        <div className="flex flex-col justify-center p-[30px] bg-[#364153] rounded-lg">
            <div className="flex justify-between text-white">
                <span className="font-bold">{title}</span>
                <FontAwesomeIcon icon={faEllipsis} className="text-white pl-[10px]" />
            </div>
            <div className="mt-[20px] flex-1">{children}</div>
        </div>
    );
}

export default BoxContent;
