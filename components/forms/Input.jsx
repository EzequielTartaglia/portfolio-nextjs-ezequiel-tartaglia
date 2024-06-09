const Input = ({ label, type = 'text', name, value, placeholder, onChange, isSubmitted, errorMessage }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="flex flex-col gap-4 mt-2 mb-2 text-white">
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full rounded-[5px] p-1 h-[35px] text-black focus-visible:outline-none border-2 ${isSubmitted && !value
            ? "border-red-500"
            : "border-transparent focus:border-primary"
          }`}
        style={{ marginBottom: '2px' }}
      />

      {isSubmitted && !value && (
        <span className="text-danger">{errorMessage}</span>
      )}

    </div>
  );
};

export default Input;