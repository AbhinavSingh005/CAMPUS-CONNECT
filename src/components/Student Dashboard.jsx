import React from 'react';

// Simple SVG icon components
const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const Award = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const StudentDashboard = ({ onNavigate, auth }) => {
    const studentStats = {
        eventsAttended: 12,
        clubsJoined: 3,
        hoursVolunteered: 45,
        achievements: 8
    };

    const upcomingEvents = [
        { name: "Tech Talk: AI in Education", date: "Tomorrow, 2:00 PM", location: "Engineering Building, Room 101", status: "Registered" },
        { name: "Volunteer Fair 2024", date: "Friday, 10:00 AM", location: "Student Center, Main Hall", status: "Registered" },
        { name: "Debate Club Meeting", date: "Monday, 6:00 PM", location: "Library, Room 201", status: "Interested" }
    ];

    const myClubs = [
        { name: "Coding Club", role: "Member", joined: "Sep 2024" },
        { name: "Debate Society", role: "Active Member", joined: "Aug 2024" },
        { name: "Volunteer Network", role: "Volunteer", joined: "Oct 2024" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-indigo-600">CampusConnect</div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700 text-sm">Welcome, {auth?.email}</span>
                        <button 
                            onClick={() => onNavigate('homepage')} 
                            className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Home
                        </button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome to Your Student Dashboard!</h1>
                    <p className="text-xl opacity-90">Track your campus involvement and discover new opportunities.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Events Attended</p>
                                <p className="text-3xl font-bold text-gray-900">{studentStats.eventsAttended}</p>
                            </div>
                            <Calendar className="w-8 h-8 text-blue-500" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Clubs Joined</p>
                                <p className="text-3xl font-bold text-gray-900">{studentStats.clubsJoined}</p>
                            </div>
                            <Users className="w-8 h-8 text-green-500" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Volunteer Hours</p>
                                <p className="text-3xl font-bold text-gray-900">{studentStats.hoursVolunteered}</p>
                            </div>
                            <Award className="w-8 h-8 text-purple-500" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Achievements</p>
                                <p className="text-3xl font-bold text-gray-900">{studentStats.achievements}</p>
                            </div>
                            <Award className="w-8 h-8 text-yellow-500" />
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Upcoming Events */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">My Upcoming Events</h2>
                            <button 
                                onClick={() => onNavigate('discovery')}
                                className="text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                View All
                            </button>
                        </div>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-gray-900">{event.name}</h3>
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            event.status === 'Registered' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {event.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                                    <p className="text-sm text-gray-500">{event.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* My Clubs */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">My Clubs</h2>
                            <button 
                                onClick={() => onNavigate('discovery')}
                                className="text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                Explore More
                            </button>
                        </div>
                        <div className="space-y-4">
                            {myClubs.map((club, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-gray-900">{club.name}</h3>
                                        <span className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full">
                                            {club.role}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">Joined: {club.joined}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button 
                            onClick={() => onNavigate('discovery')}
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition duration-150 text-center"
                        >
                            <Calendar className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                            <p className="font-medium text-gray-900">Browse Events</p>
                            <p className="text-sm text-gray-500">Discover new activities</p>
                        </button>
                        
                        <button 
                            onClick={() => onNavigate('discovery')}
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition duration-150 text-center"
                        >
                            <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                            <p className="font-medium text-gray-900">Join Clubs</p>
                            <p className="text-sm text-gray-500">Connect with peers</p>
                        </button>
                        
                        <button 
                            onClick={() => onNavigate('discovery')}
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition duration-150 text-center"
                        >
                            <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                            <p className="font-medium text-gray-900">Track Progress</p>
                            <p className="text-sm text-gray-500">View achievements</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
