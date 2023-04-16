function InputForm({ nameLabel, placeholder, width, height, refInput, valueInput, handleOnChange }) {
    return (
        <div className={`${width} ${height}`}>
            <label className="text-white">{nameLabel}:</label>
            <input
                placeholder={placeholder}
                ref={refInput}
                value={valueInput}
                onChange={handleOnChange}
                className={`w-full h-full rounded-lg mt-[10px] px-[20px] outline-0 bg-[#1A202C] text-white`}
            />
        </div>
    );
}

export default InputForm;
