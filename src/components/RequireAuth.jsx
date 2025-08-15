import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireAuth = () => {
  const token = useSelector((state) => state.auth.token)
  const location = useLocation()

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default RequireAuth