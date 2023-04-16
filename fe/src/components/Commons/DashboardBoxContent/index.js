import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function BoxContent({ title, children }) {
    return (
        <div className="flex flex-col h-full min-w-fit overflow-auto justify-top p-[10px] bg-[#364153] rounded-lg">
            <div className="flex justify-between text-white">
                <span className="font-bold pt-[10px] pb-[20px]">{title}</span>
                <FontAwesomeIcon icon={faEllipsis} className="text-white pl-[10px]" />
            </div>
            <div className="flex-1 min-h-0 overflow-auto">{children}</div>
        </div>
    );
}

export default BoxContent;
