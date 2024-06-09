const SubmitLoadingButton = ({ isLoading, children, ...props }) => {
  return (
    <button
      {...props}
      className={`mt-5 border-primary border-2 text-center h-[44px] px-8 rounded-[5px] disabled:border-disabled transition duration-300 ease-in-out w-full secondary-bg-button text-primary hover:secondary-bg-button hover:border-opacity-10 disabled:bg-disabled hover:border-opacity-10 ${isLoading ? 'cursor-not-allowed' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? "Procesando..." : children}
    </button>
  );
};

export default SubmitLoadingButton;
