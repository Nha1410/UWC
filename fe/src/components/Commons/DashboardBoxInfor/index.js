function BoxItem({ srcIcon, headerInfo, contentInfo }) {
    return (
        <div className="w-[250px] h-4/5 rounded-lg bg-[#364153] flex p-[20px] justify-center items-center">
            <img alt="icon" src={srcIcon} />
            <div className="flex-1 flex flex-col justify-center ml-[10px]">
                <span className="text-white text-lg font-bold">{headerInfo}</span>
                <span className="text-white text-xs font-light">{contentInfo}</span>
            </div>
        </div>
    );
}

export default BoxItem;
