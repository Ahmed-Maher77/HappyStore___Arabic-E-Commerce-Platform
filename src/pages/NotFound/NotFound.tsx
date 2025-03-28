import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800" style={{ height: "calc(100vh - 60px)" }}>
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="text-lg mt-2 text-gray-600">
                The page you're looking for doesn't exist or has been moved.
            </p>
            
            {/* Go Home Button */}
            <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
