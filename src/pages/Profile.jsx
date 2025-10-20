import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfileCard = () => {

    const [userData, setUserData] = useState({});


    useEffect(() => {
        setUserData({
            "id": localStorage.getItem("id"),
            "username": localStorage.getItem("username"),
            "email": localStorage.getItem("email"),
            "firstName": localStorage.getItem("firstName"),
            "lastName": localStorage.getItem("lastName"),
            "gender": localStorage.getItem("gender"),
            "image": localStorage.getItem("image"),
        })
    }, [])


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 transition duration-300 transform hover:shadow-3xl border border-gray-100">

                {/* Profile Header and Image */}
                <div className="flex flex-col items-center">
                    <img
                        className="h-32 w-32 rounded-full object-cover ring-4 ring-indigo-500 ring-offset-2 shadow-lg transition duration-300 transform hover:scale-105"
                        src={userData.image}
                        alt={`${userData.firstName} ${userData.lastName}'s profile`}
                    />

                    <h2 className="mt-4 text-3xl font-bold text-gray-900">
                        {userData.firstName} {userData.lastName}
                    </h2>
                    <p className="text-lg text-indigo-600 font-medium">
                        @{userData.username}
                    </p>
                </div>

                {/* Separator */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* Profile Details */}
                <div className="space-y-4">

                    {/* Email */}
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-indigo-500">📧</span>
                        <div>
                            <p className="text-xs font-medium text-gray-500">Email Address</p>
                            <p className="text-sm font-semibold text-gray-800 break-words">{userData.email}</p>
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-indigo-500">🚻</span>
                        <div>
                            <p className="text-xs font-medium text-gray-500">Gender</p>
                            <p className="text-sm font-semibold text-gray-800 capitalize">{userData.gender}</p>
                        </div>
                    </div>

                    {/* User ID */}
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-indigo-500">#️⃣</span>
                        <div>
                            <p className="text-xs font-medium text-gray-500">User ID</p>
                            <p className="text-sm font-semibold text-gray-800">{userData.id}</p>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="mt-8">
                    <Link
                        to="/dashboard"
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.01]"
                    >
                        Back to Dashboard
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default UserProfileCard;