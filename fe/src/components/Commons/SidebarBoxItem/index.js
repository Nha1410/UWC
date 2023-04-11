function BoxItem({ iconComponent, title, numberNotifications, textColor, isActive }) {
    const classNameIsActive = isActive && 'rounded-r-lg bg-[#99B2C6] text-xl bg-opacity-20';
    return (
        <div
            className={`w-full ${textColor} text-sm flex py-[5px] justify-center items-center hover:cursor-pointer hover:bg-[#99B2C6] hover:bg-opacity-20`}
        >
            <div className={`pl-[30px] py-[5px] ${classNameIsActive}`}>{iconComponent}</div>
            <div className="flex-1 px-[15px] py-[5px]">{title}</div>
            {numberNotifications && (
                <div className="w-[30px] h-[20px] rounded-full bg-[#FF69B4] bg-opacity-20 text-[#FF69B4] text-center text-sm flex items-center justify-center mr-[30px]">
                    <span>{numberNotifications}</span>
                </div>
            )}
        </div>
    );
}

export default BoxItem;
