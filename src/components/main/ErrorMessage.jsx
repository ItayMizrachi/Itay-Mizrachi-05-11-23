const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-[75vh] px-4 md:px-0">
      <div className="p-4 md:p-10 rounded-lg bg-base-200 text-center shadow-lg space-y-4 md:space-y-5 max-w-lg mx-auto">
        <h1 className="md:text-4xl text-2xl  font-bold text-primary mb-4">
          Oops!
        </h1>
        <h2 className="md:text-2xl text-lg font-bold text-secondary mb-4">
          We're currently experiencing issues. Please try again later.
        </h2>
      </div>
    </div>
  );
};

export default ErrorMessage;
