// CityNotFound.jsx
import { Link } from 'react-router-dom';

const CityNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[75vh] px-4 md:px-0">
      <div className="p-4 md:p-10 rounded-lg bg-base-200 text-center shadow-lg space-y-4 md:space-y-5 max-w-lg mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4">
          <span className="text-error">Oops!</span> City Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-4">
          The page you’re looking for doesn’t exist or the city was not found.
        </p>
        <Link to="/" className="btn btn-primary w-full">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default CityNotFound;