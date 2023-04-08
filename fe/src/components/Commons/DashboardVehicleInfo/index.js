import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function BoxInfo({ srcImage, name, numberStarts, weight }) {
    return (
        <div className="flex items-center py-[20px] text-white w-full flex-1">
            <img alt="" src={srcImage} className="w-[100px] h-[100px] object-fit" />
            <div className="flex flex-col ml-[20px]">
                <span>{name}</span>
                <div className="flex items-center my-[10px]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <span>{weight}</span>
            </div>
        </div>
    );
}

export default BoxInfo;
