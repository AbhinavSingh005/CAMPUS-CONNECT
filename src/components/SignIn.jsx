import { useState } from 'react';

// Simple SVG icon components to replace lucide-react
const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const SignIn = ({ onBackToHome, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Demo credential store (client-side only for prototype)
    const demoUsers = {
      student: { email: 'student@campus.com', password: 'student123' },
      admin: { email: 'admin@campus.com', password: 'admin123' }
    };

    // Simple async simulation
    setTimeout(() => {
      const creds = demoUsers[activeTab];
      const emailOk = formData.email.trim().toLowerCase() === creds.email;
      const passOk = formData.password === creds.password;

      if (emailOk && passOk) {
        onLoginSuccess({ role: activeTab, email: formData.email.trim(), remember: formData.rememberMe });
      } else {
        setError('Invalid credentials. Try demo accounts: student@campus.com / student123 or admin@campus.com / admin123');
        setIsLoading(false);
      }
    }, 700);
  };

  return (
    <div className="signin-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">CampusConnect</div>
          <nav className="nav-desktop">
            <button onClick={onBackToHome} className="nav-link">Back to Home</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="signin-container">
        <div className="signin-content">
          {/* Welcome Section */}
          <div className="welcome-section">
            <h1 className="signin-title">Welcome Back</h1>
            <p className="signin-subtitle">
              Sign in to access your CampusConnect dashboard
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'student' ? 'active' : ''}`}
              onClick={() => setActiveTab('student')}
            >
              <div className="tab-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span>Student</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
            >
              <div className="tab-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Admin</span>
            </button>
          </div>

          {/* Login Form */}
          <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              {error && <div className="auth-error" role="alert">{error}</div>}

              <button type="submit" className="login-button" disabled={isLoading}>
                {isLoading ? 'Signing in…' : `Sign In as ${activeTab === 'student' ? 'Student' : 'Admin'}`}
              </button>
            </form>

            {/* Additional Options */}
            <div className="signin-options">
              <div className="divider">
                <span>or</span>
              </div>
              
              <button className="social-button google">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <button className="social-button microsoft">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#00A4EF" d="M13 1h10v10H13z"/>
                  <path fill="#7FBA00" d="M1 13h10v10H1z"/>
                  <path fill="#FFB900" d="M13 13h10v10H13z"/>
                </svg>
                Continue with Microsoft
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="signup-link">
              <p>
                Don't have an account? 
                <a href="#" className="signup-text">Sign up here</a>
              </p>
            </div>
          </div>

          {/* Role-specific Information */}
          <div className="role-info">
            {activeTab === 'student' ? (
              <div className="info-card student">
                <div className="info-icon">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Student Access</h3>
                  <p>Access your personalized dashboard to discover events, join clubs, and track your campus engagement.</p>
                  <ul>
                    <li>View upcoming events and activities</li>
                    <li>Join clubs and organizations</li>
                    <li>Track your participation history</li>
                    <li>Connect with other students</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="info-card admin">
                <div className="info-icon">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Admin Access</h3>
                  <p>Manage campus activities, oversee student engagement, and access comprehensive analytics.</p>
                  <ul>
                    <li>Create and manage events</li>
                    <li>Monitor student participation</li>
                    <li>Generate engagement reports</li>
                    <li>Manage organizations and clubs</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
