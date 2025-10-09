import { useEffect, useState } from 'react'
import Homepage from './components/Homepage'
import SignIn from './components/SignIn'
import ActivitiesDiscovery from './components/Activities Discovery'
import ActivityDetail from './components/Activity Detail'
import AdminPanel from './components/Admin Panel'
import AboutUs from './components/AboutUs'
import StudentDashboard from './components/Student Dashboard'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('homepage')
  const [routeState, setRouteState] = useState(null)
  const [auth, setAuth] = useState(() => {
    try {
      const saved = localStorage.getItem('campusconnect_auth')
      return saved ? JSON.parse(saved) : { isAuthenticated: false, role: null, email: null }
    } catch {
      return { isAuthenticated: false, role: null, email: null }
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('campusconnect_auth', JSON.stringify(auth))
    } catch (error) {
      console.warn('Failed to save auth to localStorage:', error)
    }
  }, [auth])

  const navigateToSignIn = () => {
    setCurrentPage('signin')
  }

  const navigateToHome = () => {
    setCurrentPage('homepage')
  }

  const handleLoginSuccess = ({ role, email, remember }) => {
    setAuth({ isAuthenticated: true, role, email })
    if (!remember) {
      // If not remember, store ephemeral session (do nothing extra here). The state will reset on refresh.
    }
    // Redirect to appropriate dashboard based on role
    if (role === 'student') {
      setCurrentPage('student-dashboard')
    } else if (role === 'admin') {
      setCurrentPage('admin')
    } else {
      setCurrentPage('homepage')
    }
  }

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, role: null, email: null })
  }

  const navigate = (page, state) => {
    // simple guards
    if (page === 'discovery' || page === 'detail') {
      if (!auth.isAuthenticated || auth.role !== 'student') {
        setCurrentPage('signin')
        return
      }
    }
    if (page === 'admin') {
      if (!auth.isAuthenticated || auth.role !== 'admin') {
        setCurrentPage('signin')
        return
      }
    }
    setRouteState(state || null)
    setCurrentPage(page)
  }

  return (
    <>
      {currentPage === 'homepage' && (
        <Homepage onSignInClick={navigateToSignIn} auth={auth} onLogout={handleLogout} onNavigate={navigate} />
      )}
      {currentPage === 'signin' && (
        <SignIn onBackToHome={navigateToHome} onLoginSuccess={handleLoginSuccess} />
      )}
      {currentPage === 'student-dashboard' && (
        <StudentDashboard onNavigate={navigate} auth={auth} />
      )}
      {currentPage === 'discovery' && (
        <ActivitiesDiscovery onNavigate={navigate} auth={auth} />
      )}
      {currentPage === 'detail' && (
        <ActivityDetail onNavigate={navigate} activityData={routeState} auth={auth} />
      )}
      {currentPage === 'admin' && (
        <AdminPanel onNavigate={navigate} auth={auth} />
      )}
      {currentPage === 'about' && (
        <AboutUs onNavigate={navigate} auth={auth} />
      )}
    </>
  )
}

export default App
