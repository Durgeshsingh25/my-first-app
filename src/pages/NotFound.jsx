import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4">
      {/* Container for the 404 content */}
      <div className="relative max-w-2xl w-full bg-white shadow-xl rounded-2xl p-10 sm:p-16 text-center transition-all duration-300 transform hover:shadow-2xl overflow-hidden">
        
        {/* Background Image from Unsplash (can be customized) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543286348-1510461b427b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
        ></div>

        <div className="relative z-10"> {/* Ensure content is above the blurred image */}
          {/* The large, impactful '404' number */}
          <h1 className="text-8xl sm:text-9xl font-extrabold text-indigo-700 mb-6 tracking-tight drop-shadow-md">
            404
          </h1>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          
          {/* Descriptive Text */}
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
            It might be a broken link or a typo in the URL.
          </p>
          
          {/* Navigation Button (Replace 'href' with your actual routing, e.g., using Link from 'react-router-dom') */}
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Go Back to Homepage
            {/* Optional Icon (e.g., Heroicons 'arrow-right') */}
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* Optional: Secondary link for support or contacting staff */}
          <div className="mt-6">
            <a href="/contact" className="text-sm font-medium text-gray-600 hover:text-indigo-700">
              Need help? Contact support
            </a>
          </div>
        </div>
      </div>
      
      {/* Optional: Footer or Copyright Text */}
      <footer className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
};

export default NotFound;