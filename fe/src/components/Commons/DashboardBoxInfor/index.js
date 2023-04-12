function BoxItem({ srcIcon, headerInfo, contentInfo }) {
    return (
        <div className="w-[200px] h-[60px] rounded-lg bg-[#364153] flex my-[5px] p-[20px] justify-self-center justify-center items-center">
            <img className="scale-75" alt="icon" src={srcIcon}/>
            <div className="flex-1 flex flex-col justify-center ml-[5px]">
                <span className="text-white text-base font-bold">{headerInfo}</span>
                <span className="text-white text-sm font-light">{contentInfo}</span>
            </div>
        </div>
    );
}

export default BoxItem;
