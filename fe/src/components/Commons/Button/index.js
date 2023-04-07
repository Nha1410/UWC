function Button({ name, width, height, bgColor }) {
    return (
        <div className={`${width} ${height} ${bgColor} rounded-lg text-white text-xl flex justify-center items-center`}>
            <span>{name}</span>
        </div>
    );
}

export default Button;
