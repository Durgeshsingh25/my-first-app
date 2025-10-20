import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Assuming you would use react-router-dom for navigation
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("asdf")

    useEffect(()=>{
        setName(localStorage.getItem("firstName")+" "+localStorage.getItem("lastName"))
    }, [])

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }

    // Mock data for the statistics cards
    const stats = [
        { name: 'Total Revenue', stat: '$40,500', icon: '💰', change: '+4.5%', changeType: 'increase' },
        { name: 'New Users', stat: '1,256', icon: '👥', change: '-3.2%', changeType: 'decrease' },
        { name: 'Tasks Completed', stat: '87.4%', icon: '✅', change: '+2.1%', changeType: 'increase' },
    ];

    // Mock data for the Recent Transactions table
    const transactions = [
        { id: '#1001', name: 'Software Subscription', amount: '$49.00', status: 'Completed', date: 'Oct 15, 2025' },
        { id: '#1002', name: 'Hosting Renewal', amount: '$129.00', status: 'Pending', date: 'Oct 14, 2025' },
        { id: '#1003', name: 'Consulting Fee', amount: '$750.00', status: 'Completed', date: 'Oct 14, 2025' },
        { id: '#1004', name: 'Domain Registration', amount: '$15.99', status: 'Failed', date: 'Oct 13, 2025' },
    ];

    return (
        <div className="flex h-screen bg-gray-50">

            {/* 1. Sidebar */}
            <div className="w-64 bg-indigo-800 text-white flex flex-col shadow-xl">
                <div className="p-6 text-2xl font-bold border-b border-indigo-700">
                    <span className="text-indigo-300">App</span>Name
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {/* Active Link */}
                    <a href="#" className="flex items-center p-3 rounded-lg bg-indigo-700 text-white font-semibold transition duration-150 shadow-md">
                        <span className="mr-3">🏠</span> Dashboard
                    </a>

                    {/* Inactive Links */}
                    <a href="#" className="flex items-center p-3 rounded-lg text-indigo-200 hover:bg-indigo-700 hover:text-white transition duration-150">
                        <span className="mr-3">📊</span> Analytics
                    </a>
                    <a href="#" className="flex items-center p-3 rounded-lg text-indigo-200 hover:bg-indigo-700 hover:text-white transition duration-150">
                        <span className="mr-3">👥</span> Users
                    </a>
                    <a href="#" className="flex items-center p-3 rounded-lg text-indigo-200 hover:bg-indigo-700 hover:text-white transition duration-150">
                        <span className="mr-3">⚙️</span> Settings
                    </a>
                    <Link to="/profile" className="flex items-center p-3 rounded-lg text-indigo-200 hover:bg-indigo-700 hover:text-white transition duration-150">
                        <span className="mr-3">⚙️</span> Profile
                    </Link>
                </nav>

                {/* User/Logout Section */}
                <div className="p-4 border-t border-indigo-700">
                    <button onClick={logout} className="w-full text-left text-sm p-2 rounded-lg text-indigo-200 hover:bg-indigo-700 hover:text-white transition duration-150">
                        Logout
                    </button>
                </div>
            </div>

            {/* 2. Main Content Area */}
            <div className="flex-1 overflow-y-auto">

                {/* Top Bar/Header */}
                <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center z-10">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition">🔔</button>
                        <div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium">JD</div>
                    </div>
                </header>

                {/* Main Content Body */}
                <main className="p-8">

                    {/* 3. Stats Cards */}
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to user dashboard, <span className='text-sky-600'>{name}</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-600 transition duration-300 transform hover:scale-[1.01] hover:shadow-xl">
                                <div className="flex justify-between items-start">
                                    <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                    <span className="text-2xl">{stat.icon}</span>
                                </div>
                                <p className="mt-1 text-3xl font-bold text-gray-900">{stat.stat}</p>
                                <div className="mt-2 text-sm">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-medium ${stat.changeType === 'increase'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                        }`}>
                                        {stat.change}
                                    </span>
                                    <span className="ml-2 text-gray-500">since last month</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 4. Data Table */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-6">Recent Transactions</h2>
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {['Invoice ID', 'Description', 'Amount', 'Status', 'Date'].map((header) => (
                                            <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {transactions.map((t) => (
                                        <tr key={t.id} className="hover:bg-indigo-50 transition duration-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{t.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{t.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">{t.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${t.status === 'Completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : t.status === 'Pending'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {t.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default DashboardPage;