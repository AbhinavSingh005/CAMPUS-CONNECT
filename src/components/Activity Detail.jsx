import React from 'react';

// Simple SVG icon components to replace lucide-react
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

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ActivityDetail = ({ onNavigate, activityData, auth }) => {
    // Mock Data for a single event (even if passed activityData is null)
    const event = activityData?.name === 'Annual Robotics Workshop' ? activityData : {
        name: "Annual Robotics Workshop: Build Your First Drone",
        club: "The Tech Club",
        date: "October 25, 2025",
        time: "10:00 AM - 1:00 PM",
        location: "Engineering Block 301, Lab A",
        organizer: "Anjali Sharma",
        contact: "techclub@campusconnect.edu",
        description: "Join The Tech Club for our highly anticipated Annual Robotics Workshop! This intensive session will guide beginners through the basics of drone assembly, programming (using Arduino), and basic flight controls. No prior experience is required—just bring your enthusiasm for technology and engineering!",
        slots: 50,
        registered: 42,
    };

    const isFull = event.registered >= event.slots;

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-indigo-600">CampusConnect</div>
                    <button 
                        onClick={() => onNavigate('discovery')} 
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Back to Activities
                    </button>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Event Banner/Title */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8">
                    <div className="h-64 bg-indigo-200 flex items-center justify-center">
                        <h1 className="text-4xl font-extrabold text-indigo-800 p-4">{event.name}</h1>
                    </div>
                    
                    <div className="p-6 md:p-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">
                                {event.club}
                            </h2>
                            
                            {/* Registration Button */}
                            {auth?.role === 'admin' ? (
                                <div className="flex space-x-3">
                                    <button className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition duration-200 shadow-md hover:shadow-lg">
                                        EDIT EVENT
                                    </button>
                                    <button className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-bold transition duration-200 shadow-md hover:shadow-lg">
                                        MANAGE REGISTRATIONS
                                    </button>
                                    <button className="py-3 px-6 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition duration-200 shadow-md hover:shadow-lg">
                                        DELETE EVENT
                                    </button>
                                </div>
                            ) : (
                                <button
                                    disabled={isFull}
                                    className={`py-3 px-8 rounded-full font-bold text-white transition duration-200 ${
                                        isFull 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-red-500 hover:bg-red-600 shadow-md hover:shadow-lg'
                                    }`}
                                >
                                    {isFull ? 'FULLY BOOKED' : 'REGISTER NOW'}
                                </button>
                            )}
                        </div>
                        
                        {/* Key Information Box */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-gray-100 p-4 rounded-lg">
                            <div className="flex items-center text-gray-700">
                                <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                                <div><span className="font-semibold block">Date:</span> {event.date}</div>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                                <div><span className="font-semibold block">Time:</span> {event.time}</div>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                                <div><span className="font-semibold block">Location:</span> {event.location}</div>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Users className="w-5 h-5 mr-2 text-indigo-600" />
                                <div><span className="font-semibold block">Slots:</span> {event.registered}/{event.slots}</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Event Details</h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{event.description}</p>
                        </div>

                        {/* Organizer Contact */}
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Organizer Contact</h3>
                            <div className="flex items-center text-gray-700">
                                <Mail className="w-5 h-5 mr-2 text-yellow-700" />
                                <span className="font-semibold">Email:</span> {event.contact}
                            </div>
                        </div>

                        {/* Admin-only Information */}
                        {auth?.role === 'admin' && (
                            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mt-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Admin Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Registration Status</p>
                                        <p className="text-lg font-bold text-gray-900">{event.registered}/{event.slots} registered</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Event Status</p>
                                        <p className="text-lg font-bold text-green-600">Active</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Created By</p>
                                        <p className="text-lg font-bold text-gray-900">Admin User</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Last Modified</p>
                                        <p className="text-lg font-bold text-gray-900">Oct 20, 2024</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm font-medium text-gray-600 mb-2">Registered Students</p>
                                    <div className="bg-white p-3 rounded border max-h-32 overflow-y-auto">
                                        <p className="text-sm text-gray-500">student1@campus.com, student2@campus.com, student3@campus.com...</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Call to Action Reminder */}
                <div className="text-center mt-10">
                    <p className="text-xl text-gray-600">
                        {isFull ? "Check back soon for the next session!" : "Don't miss out! Secure your spot now with a single click."}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ActivityDetail;
