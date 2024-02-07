import { Outlet, Navigate } from 'react-router-dom'
import {  useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';


const PrivateRoutes = () => {

    const user = useSelector(selectUser);

    let auth = {'token':user};
    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes