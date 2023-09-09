import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

function ProtectedRoute() {
  // Replace this with your actual authentication check logic
  const user = useAppSelector(state => state.userState.user)

  const isAuthenticated = user !== null // or false;

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute
