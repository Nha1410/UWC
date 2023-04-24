function InputForm({ nameLabel, placeholder, width, height, refInput, valueInput, handleOnChange, type = 'text' }) {
    const mystyle = {
        backgroundColor: 'white',
        textColor: 'black',
        color: 'black',
    }
    return (
        <div className={`${width} ${height}`}>
            <label className="text-white">{nameLabel}:</label>
            <input
                style={mystyle}
                placeholder={placeholder}
                ref={refInput}
                type={type}
                value={valueInput}
                onChange={handleOnChange}
                className={`w-full h-full rounded-lg mt-[10px] px-[20px] outline-0 bg-[#1A202C] focus:border focus:border-[#605CFF]`}
            />
        </div>
    );
}

export default InputForm;
