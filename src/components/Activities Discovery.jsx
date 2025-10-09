import React from 'react';

// Simple SVG icon components to replace lucide-react
const Search = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Filter = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ActivityCard = ({ name, club, date, location, onNavigate, auth }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer">
        <div className="h-32 bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold">
            {name.split(' ').map(n => n[0]).join('')} {/* Simple Text Placeholder */}
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-sm text-indigo-600 font-medium mb-2">{club}</p>
            <div className="flex items-center text-gray-600 text-sm mb-1"><Calendar className="w-4 h-4 mr-2" /> {date}</div>
            <div className="flex items-center text-gray-600 text-sm mb-3"><MapPin className="w-4 h-4 mr-2" /> {location}</div>
            {auth?.role === 'admin' ? (
                <div className="space-y-2">
                    <button 
                        onClick={() => onNavigate('detail', { name })}
                        className="w-full py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition duration-150"
                    >
                        View Details
                    </button>
                    <div className="flex space-x-2">
                        <button className="flex-1 py-1 bg-yellow-500 text-white rounded text-sm font-medium hover:bg-yellow-600 transition duration-150">
                            Edit
                        </button>
                        <button className="flex-1 py-1 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition duration-150">
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                <button 
                    onClick={() => onNavigate('detail', { name })}
                    className="w-full py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition duration-150"
                >
                    View Details
                </button>
            )}
        </div>
    </div>
);

const ActivitiesDiscovery = ({ onNavigate, auth }) => {
    const activities = [
        { name: "Annual Robotics Workshop", club: "The Tech Club", date: "Oct 25, 10 AM", location: "Engg. Block 301" },
        { name: "Debate Championship Tryouts", club: "Debate Society", date: "Oct 28, 4 PM", location: "Auditorium Hall" },
        { name: "Community Service Day", club: "Volunteer Network", date: "Nov 5, 9 AM", location: "Main Gate" },
        { name: "Intro to Python for Beginners", club: "Coding Group", date: "Nov 12, 6 PM", location: "Lab 204" },
        { name: "Intramural Basketball Tournament", club: "Sports Council", date: "Nov 19-21", location: "Sports Ground" },
        { name: "Creative Writing Workshop", club: "Literary Circle", date: "Dec 1, 3 PM", location: "Library Annex" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-indigo-600">CampusConnect</div>
                    <button 
                        onClick={() => onNavigate('homepage')} 
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Back to Home
                    </button>
                </div>
            </header>

            <div className="bg-indigo-600 text-white py-12 mb-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold mb-2">
                        {auth?.role === 'admin' ? 'Manage Campus Activities' : 'Discover Your Campus Life'}
                    </h1>
                    <p className="text-xl opacity-90 mb-6">
                        {auth?.role === 'admin' 
                            ? 'Oversee and manage all campus activities, events, and club meetings.' 
                            : 'Centralized hub for all activities, events, and club meetings.'
                        }
                    </p>
                    <div className="max-w-xl mx-auto flex bg-white rounded-lg shadow-xl overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search activities, clubs, or keywords..."
                            className="w-full p-4 text-gray-800 focus:outline-none"
                        />
                        <button className="bg-yellow-400 p-4 text-indigo-900 hover:bg-yellow-500 transition duration-150">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex flex-col md:flex-row gap-8">
                
                {/* Left Sidebar for Filters */}
                <aside className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg self-start">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Filter className="w-5 h-5 mr-2 text-indigo-600" /> Filter Activities</h3>
                    
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                            <option>All Categories</option>
                            <option>Academic</option>
                            <option>Sports</option>
                            <option>Volunteer</option>
                            <option>Arts & Culture</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                        <input type="date" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Enrollment Status</label>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input type="checkbox" id="open" defaultChecked className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                <label htmlFor="open" className="ml-2 text-sm text-gray-700">Open</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="full" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                <label htmlFor="full" className="ml-2 text-sm text-gray-700">Full (Waitlist)</label>
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition duration-150">
                        Apply Filters
                    </button>
                </aside>

                {/* Main Activity Grid */}
                <main className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg text-gray-600">Showing 6 of 15 activities found.</p>
                        {auth?.role === 'admin' && (
                            <button 
                                onClick={() => onNavigate('admin')}
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-150"
                            >
                                + Add New Activity
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activities.map((activity, index) => (
                            <ActivityCard key={index} {...activity} onNavigate={onNavigate} auth={auth} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ActivitiesDiscovery;
