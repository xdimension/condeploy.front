import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider';
import AuthPage from './pages/Auth'
import ProjectsPage from './pages/Projects'

function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<ProjectsPage />} />
        </Routes>
      </AuthProvider>
    )
}

export default App;
