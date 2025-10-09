import { useState } from 'react';

const Homepage = ({ onSignInClick, auth, onLogout, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Header/Navigation Bar */}
      <header className="header">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">CampusConnect</div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
              <button onClick={() => scrollToSection('students')} className="nav-link">Students</button>
            <button
              onClick={() => scrollToSection('organizations')}
              className="nav-link"
            >
              Organizations
            </button>
            <button
              onClick={() => scrollToSection('admin')}
              className="nav-link"
            >
              Admin
            </button>
              <button className="nav-link" onClick={() => onNavigate?.('discovery')}>Activities</button>
              {auth?.isAuthenticated && auth?.role === 'admin' && (
                <button className="nav-link" onClick={() => onNavigate?.('admin')}>Admin Panel</button>
              )}
              <button className="nav-link" onClick={() => onNavigate?.('about')}>About</button>
              <div className="flex items-center space-x-4">
                {!auth?.isAuthenticated ? (
                  <>
                    <button className="nav-link" onClick={onSignInClick}>Login</button>
                    <button className="btn-primary" onClick={onSignInClick}>Sign Up</button>
                  </>
                ) : (
                  <>
                    <span className="text-gray-700 text-sm">{auth.email} ({auth.role})</span>
                    <button className="btn-secondary" onClick={onLogout}>Logout</button>
                  </>
                )}
              </div>
          </nav>

          {/* Mobile menu button */}
          <div className="nav-mobile">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-link"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? '' : 'hidden'}`}>
          <button
            onClick={() => scrollToSection('students')}
            className="nav-link block w-full text-left mb-2"
          >
            Students
          </button>
          <button
            onClick={() => scrollToSection('organizations')}
            className="nav-link block w-full text-left mb-2"
          >
            Organizations
          </button>
          <button
            onClick={() => scrollToSection('admin')}
            className="nav-link block w-full text-left mb-2"
          >
            Admin
          </button>
          <div className="pt-2 space-y-2">
                <button className="nav-link block w-full text-left" onClick={onSignInClick}>Login</button>
                <button className="btn-primary w-full" onClick={onSignInClick}>Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Connect, Discover,
            <span className="gradient-text block">Thrive.</span>
          </h1>
          <p>
            Centralizing all campus activities and events in one powerful platform. 
            Transform fragmented, analog processes into seamless digital experiences.
          </p>
          <div className="hero-buttons">
            {auth?.isAuthenticated ? (
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  className="btn-primary" 
                  onClick={() => onNavigate?.(auth?.role === 'admin' ? 'admin' : 'student-dashboard')}
                >
                  {auth?.role === 'admin' ? 'Go to Admin Panel' : 'Go to My Dashboard'}
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => onNavigate?.('discovery')}
                >
                  Browse Activities
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="btn-primary" onClick={() => onNavigate?.('discovery')}>Find Your Next Activity</button>
                <button 
                  onClick={() => scrollToSection('problem-solution')}
                  className="btn-secondary"
                >
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="problem-solution" className="section section-gray">
        <div className="section-content">
          <div className="section-header">
            <h2>From Chaos to Clarity</h2>
            <p>
              Campus life is fragmented across multiple platforms, paper forms, and disconnected systems. 
              CampusConnect brings everything together in one streamlined solution.
            </p>
          </div>

          <div className="features-grid">
            {/* Easy Discovery */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="icon-container emerald">
                  <svg className="icon emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Easy Discovery</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Find all campus events, clubs, and activities in one centralized platform. No more scattered flyers or missed opportunities.
              </p>
            </div>

            {/* Seamless Registration */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="icon-container blue">
                  <svg className="icon blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Seamless Registration</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                One-click registration for events and clubs. Digital forms replace paper processes for instant access and confirmation.
              </p>
            </div>

            {/* Track Your Impact */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="icon-container purple">
                  <svg className="icon purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Track Your Impact</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monitor your participation, achievements, and contributions. Build a comprehensive campus engagement portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sneak Peek - Dashboard UI Mockup */}
      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2>See CampusConnect in Action</h2>
            <p>
              Experience the clean, intuitive interface that makes campus engagement effortless
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="dashboard-mockup">
            {/* Mock Header */}
            <div className="dashboard-header">
              <div className="dashboard-logo">
                <div className="dashboard-logo-icon">CC</div>
                <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Mock Content */}
            <div className="dashboard-content">
              <div className="dashboard-grid">
                {/* Upcoming Events */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-semibold text-gray-900">Upcoming Events</h4>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">3 events</span>
                  </div>
                  <div className="space-y-3">
                    <div className="event-card">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="event-title">Tech Talk: AI in Education</h5>
                          <p className="event-time">Tomorrow, 2:00 PM</p>
                          <p className="event-location">Engineering Building, Room 101</p>
                        </div>
                        <div className="event-indicator emerald"></div>
                      </div>
                    </div>
                    <div className="event-card">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="event-title">Volunteer Fair 2024</h5>
                          <p className="event-time">Friday, 10:00 AM</p>
                          <p className="event-location">Student Center, Main Hall</p>
                        </div>
                        <div className="event-indicator blue"></div>
                      </div>
                    </div>
                    <div className="event-card">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="event-title">Debate Club Meeting</h5>
                          <p className="event-time">Monday, 6:00 PM</p>
                          <p className="event-location">Library, Room 201</p>
                        </div>
                        <div className="event-indicator purple"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Summary */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-semibold text-gray-900">Your Activity</h4>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">This month</span>
                  </div>
                  <div className="activity-stats">
                    <div className="stat-card bg-emerald-50">
                      <div className="stat-number text-emerald-600">12</div>
                      <div className="stat-label">Events</div>
                    </div>
                    <div className="stat-card bg-blue-50">
                      <div className="stat-number text-blue-600">8</div>
                      <div className="stat-label">Attended</div>
                    </div>
                    <div className="stat-card bg-purple-50">
                      <div className="stat-number text-purple-600">3</div>
                      <div className="stat-label">Clubs</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="activity-item">
                      <div className="flex items-center">
                        <div className="activity-icon emerald">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="activity-text">Registered for Tech Talk</span>
                      </div>
                      <span className="activity-time">2h ago</span>
                    </div>
                    <div className="activity-item">
                      <div className="flex items-center">
                        <div className="activity-icon blue">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="activity-text">Attended Coding Workshop</span>
                      </div>
                      <span className="activity-time">1d ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary" onClick={() => onNavigate?.('discovery')}>Get Early Access</button>
          </div>
        </div>
      </section>

      {/* Target Audience Sections */}
      <section id="students" className="section section-gray">
        <div className="section-content">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">For Students</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover opportunities, track your involvement, and build meaningful connections throughout your campus journey.
            </p>
            <button className="btn-primary" onClick={() => onNavigate?.('discovery')}>Join as Student</button>
          </div>
        </div>
      </section>

      <section id="organizations" className="section">
        <div className="section-content">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">For Organizations</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Streamline event management, increase participation, and grow your community with powerful digital tools.
            </p>
            <button className="btn-primary" onClick={() => onNavigate?.('discovery')}>Partner with Us</button>
          </div>
        </div>
      </section>

      <section id="admin" className="section section-gray">
        <div className="section-content">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">For Administrators</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Gain insights into campus engagement, streamline processes, and create a more connected campus community.
            </p>
            <button className="btn-primary" onClick={() => onNavigate?.('admin')}>Request Demo</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-logo">CampusConnect</h3>
          <p className="text-gray-400 mb-6">
            Connecting students beyond the classroom
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Support</a>
          </div>
          <p className="footer-copyright">
            © 2024 CampusConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;