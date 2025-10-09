import React from 'react';

// Simple SVG icon components to replace lucide-react
const LayoutDashboard = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AlertTriangle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const XCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const StatCard = ({ title, value, unit, color, icon: Icon }) => ( // eslint-disable-line no-unused-vars
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color.border} flex justify-between items-center`}>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-extrabold text-gray-900 mt-1">
                {value}
                <span className="text-base font-normal text-gray-500 ml-1">{unit}</span>
            </p>
        </div>
        <Icon className={`w-8 h-8 ${color.text} opacity-70`} />
    </div>
);

const ApprovalRequest = ({ title, club, status }) => {
    let statusClass = '';
    let statusText = '';
    let ActionIcon = null;

    if (status === 'Pending') {
        statusClass = 'text-yellow-600 bg-yellow-100 border-yellow-400';
        statusText = 'Pending';
        ActionIcon = Clock;
    } else if (status === 'Approved') {
        statusClass = 'text-green-600 bg-green-100 border-green-400';
        statusText = 'Approved';
        ActionIcon = CheckCircle;
    }

    return (
        <div className="flex justify-between items-center p-4 border-b last:border-b-0">
            <div>
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-500">from {club}</p>
            </div>
            <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusClass}`}>
                    {statusText}
                </span>
                {status === 'Pending' && (
                    <>
                        <button className="text-green-500 hover:text-green-700 p-1 rounded-full hover:bg-green-50">
                            <CheckCircle className="w-5 h-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50">
                            <XCircle className="w-5 h-5" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

const AdminPanel = ({ onNavigate, auth }) => {
    const requests = [
        { title: "Chess Club: Tournament Venue Request", club: "Chess Club", status: "Pending" },
        { title: "Debate Team: Travel Budget Approval", club: "Debate Team", status: "Pending" },
        { title: "Art Society: Gallery Show Submission", club: "Art Society", status: "Approved" },
        { title: "Robotics Club: Workshop Supplies Purchase", club: "The Tech Club", status: "Pending" },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header (Matching Homepage style) */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-indigo-600 flex items-center">
                        <LayoutDashboard className="w-6 h-6 mr-2" /> Admin Dashboard
                    </div>
                    <button 
                        onClick={() => onNavigate('homepage')} 
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Back to Home
                    </button>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Engagement Overview</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Welcome, {auth?.email}</span>
                        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                            Admin Access
                        </div>
                    </div>
                </div>
                
                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard 
                        title="Total Participation (Current Semester)" 
                        value="5,890" 
                        unit="students" 
                        color={{ border: 'border-indigo-500', text: 'text-indigo-500' }} 
                        icon={Users}
                    />
                    <StatCard 
                        title="Pending Approvals (Action Required)" 
                        value="12" 
                        unit="requests" 
                        color={{ border: 'border-red-500', text: 'text-red-500' }} 
                        icon={AlertTriangle}
                    />
                    <StatCard 
                        title="Average Engagement Rate" 
                        value="65" 
                        unit="%" 
                        color={{ border: 'border-green-500', text: 'text-green-500' }} 
                        icon={CheckCircle}
                    />
                </div>

                {/* Admin Quick Actions */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <button 
                            onClick={() => onNavigate('discovery')}
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition duration-150 text-center"
                        >
                            <div className="text-2xl mb-2">📅</div>
                            <p className="font-medium text-gray-900">Manage Events</p>
                            <p className="text-sm text-gray-500">Create & edit activities</p>
                        </button>
                        
                        <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition duration-150 text-center">
                            <div className="text-2xl mb-2">👥</div>
                            <p className="font-medium text-gray-900">Manage Clubs</p>
                            <p className="text-sm text-gray-500">Oversee organizations</p>
                        </button>
                        
                        <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition duration-150 text-center">
                            <div className="text-2xl mb-2">📊</div>
                            <p className="font-medium text-gray-900">Analytics</p>
                            <p className="text-sm text-gray-500">View detailed reports</p>
                        </button>
                        
                        <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition duration-150 text-center">
                            <div className="text-2xl mb-2">⚙️</div>
                            <p className="font-medium text-gray-900">Settings</p>
                            <p className="text-sm text-gray-500">System configuration</p>
                        </button>
                    </div>
                </div>

                {/* Workflow Mockup: Recent Approval Requests */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg">
                        <div className="p-5 border-b">
                            <h2 className="text-xl font-bold text-gray-900">Recent Approval Requests</h2>
                            <p className="text-sm text-gray-500">Streamline administrative workflows and approvals.</p>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {requests.map((req, index) => (
                                <ApprovalRequest key={index} {...req} />
                            ))}
                        </div>
                        <div className="p-4 text-center">
                            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                                View All Pending Approvals &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Quick Analytics Mockup */}
                    <div className="bg-white rounded-xl shadow-lg p-5">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Analytics</h2>
                        <div className="space-y-4">
                            <div className="border p-3 rounded-lg">
                                <p className="text-sm text-gray-500">Top Category</p>
                                <p className="font-semibold text-indigo-600">Academic (28%)</p>
                            </div>
                            <div className="border p-3 rounded-lg">
                                <p className="text-sm text-gray-500">Low Attendance Alert</p>
                                <p className="font-semibold text-red-500">Film Club (Below 10)</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition">
                            Detailed Reports
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
