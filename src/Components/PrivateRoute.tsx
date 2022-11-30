import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FC } from 'react';


export { PrivateRoute };

type IPrivateRoute = {
    children : JSX.Element 
}

const PrivateRoute : FC<IPrivateRoute> = ({ children }) => {
  const authUser = useSelector((state: RootState) => state.counterSlice.username)

    
    if (!authUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" 
        // state={{ from: history.location }} 
        />
    }

    // authorized so return child components
    return children;
}