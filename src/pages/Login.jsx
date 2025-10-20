import { CheckCircle2, Info } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState("");


    // Function to handle form submission (replace with actual logic)
    const handleSubmit = async () => {

        try {
            setIsLoading(true)
            // login login-- starts ************************************

            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                })
            })

            const data = await response.json();

            if (response.ok == true) {
                localStorage.setItem("token", data.accessToken)
                localStorage.setItem("id", data.id) 
                localStorage.setItem("username", data.username) 
                localStorage.setItem("email", data.email) 
                localStorage.setItem("firstName", data.firstName) 
                localStorage.setItem("lastName", data.lastName) 
                localStorage.setItem("gender", data.gender) 
                localStorage.setItem("image", data.image) 

                navigate('/dashboard');
            } else {
                setError("Invalid username or password.")
                setSuccess("")
            }

            console.log(data);
            setIsLoading(true)

            // login login-- ends   ************************************

        } catch (error) {

        }
    };

    return (
        // Use the same professional gradient background as the 404 page
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4">

            {/* Container for the Login Form */}
            <div className="max-w-md w-full bg-white shadow-2xl rounded-xl p-8 sm:p-10 transition-all duration-300 transform hover:shadow-3xl">

                {/* Header/Logo Section */}
                <div className="text-center mb-8">
                    {/* Replace this with your actual logo or icon */}
                    <svg className="mx-auto h-12 w-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z" />
                    </svg>
                    <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Or <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">start your free trial</a>
                    </p>
                </div>

                {/* Login Form */}
                <div className="space-y-6">

                    {
                        error ? (<div className="flex gap-1 items-center p-3 border border-red-400 bg-red-100 text-red-800 rounded-md font-medium text-sm"><Info />{error}</div>)
                            : success ? (<div className="flex gap-1 items-center p-3 border border-green-400 bg-green-100 text-green-800 rounded-md font-medium text-sm"><CheckCircle2 /> {success}</div>)
                                : null
                    }

                    {/* Username/Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                                className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            onClick={handleSubmit}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.01]"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>

            {/* Optional: Footer Text */}
            <div className="mt-8 text-sm text-gray-600">
                New here? <a href="/signup" className="font-medium text-indigo-700 hover:text-indigo-600">Create an account</a>
            </div>
        </div>
    );
};

export default Login;