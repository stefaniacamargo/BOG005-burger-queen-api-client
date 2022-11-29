import { useLocation, Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!localStorage.getItem('jwt')) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
