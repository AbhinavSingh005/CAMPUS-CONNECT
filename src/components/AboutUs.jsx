import React from 'react';

// Simple SVG icon components to replace lucide-react
const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const Search = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const CheckSquare = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BarChart2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const AboutUs = ({ onNavigate, auth }) => {
    // Custom icon utility function using Lucide-React for visual consistency
    const FeatureIcon = ({ Icon, color, bgColor }) => ( // eslint-disable-line no-unused-vars
        <div className={`p-3 rounded-full ${bgColor} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${color}`} />
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header (Matching Homepage style) */}
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

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Hero Section: Vision Statement */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        From Fragmentation to Connection: The Research Behind CampusConnect
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We conducted a rigorous discovery phase, validating the critical need for a centralized platform to transform fragmented, analog campus processes.
                    </p>
                    {auth?.isAuthenticated && (
                        <div className="mt-6 p-4 bg-indigo-50 rounded-lg max-w-2xl mx-auto">
                            <p className="text-indigo-800 font-medium">
                                Welcome back, {auth?.email}! 
                                {auth?.role === 'admin' 
                                    ? ' As an administrator, you have full access to manage and oversee all campus activities.' 
                                    : ' As a student, you can discover and participate in various campus activities.'
                                }
                            </p>
                        </div>
                    )}
                </section>

                {/* Problem Statistics Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                        The Validated Problem: The Cost of Disconnected Systems
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Stat Card 1: Discovery Difficulty */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 hover:shadow-xl transition duration-300">
                            <p className="text-5xl font-extrabold text-red-600 mb-2">72%</p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Missed Opportunities</h3>
                            <p className="text-gray-600">Students report difficulty in discovering campus activities due to fragmented listings (posters, multiple platforms, emails).</p>
                        </div>

                        {/* Stat Card 2: Administrative Waste */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500 hover:shadow-xl transition duration-300">
                            <p className="text-5xl font-extrabold text-yellow-600 mb-2">3X</p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Time on Manual Processes</h3>
                            <p className="text-gray-600">Administrative time wasted on manual approvals, paper-based forms, and inefficient club roster management.</p>
                        </div>

                        {/* Stat Card 3: Club Outreach */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-xl transition duration-300">
                            <p className="text-5xl font-extrabold text-teal-600 mb-2">40%</p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ineffective Outreach</h3>
                            <p className="text-gray-600">Clubs and organizations report low outreach effectiveness using current legacy communication channels.</p>
                        </div>

                    </div>
                </section>

                {/* Solution Pillars Section */}
                <section className="mb-16 bg-white p-8 rounded-xl shadow-inner">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                        Our Vision: Centralizing Campus Success
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        
                        <div className="text-center">
                            <FeatureIcon Icon={Search} color="text-indigo-600" bgColor="bg-indigo-100" />
                            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Seamless Discovery</h3>
                            <p className="text-gray-600">A single, personalized hub for all engagement, clubs, and events, maximizing student participation.</p>
                        </div>

                        <div className="text-center">
                            <FeatureIcon Icon={CheckSquare} color="text-green-600" bgColor="bg-green-100" />
                            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Streamlined Management</h3>
                            <p className="text-gray-600">Automated workflows, digital registration, and compliance tracking reduce admin burden by 90%.</p>
                        </div>

                        <div className="text-center">
                            <FeatureIcon Icon={BarChart2} color="text-purple-600" bgColor="bg-purple-100" />
                            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Data-Driven Impact</h3>
                            <p className="text-gray-600">Real-time analytics provide administrators with actionable insights into campus engagement health.</p>
                        </div>

                    </div>
                </section>

                {/* Mission Statement */}
                <section className="p-8 bg-indigo-600 text-white rounded-xl shadow-2xl">
                    <p className="text-2xl font-medium italic text-center">
                        "CampusConnect is committed to fostering a vibrant, engaged, and successful campus community by simplifying participation and maximizing institutional efficiency."
                    </p>
                </section>

            </div>
        </div>
    );
};

export default AboutUs;
