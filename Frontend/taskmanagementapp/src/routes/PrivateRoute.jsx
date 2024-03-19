import {Navigate,Outlet} from 'react-router-dom';

export const PrivateRoutes = () => {
//   let {auth} = localStorage.getItem('userDetail');
let auth = true;
return (
    auth ? <Outlet/> : <Navigate to='/'/>
  )
}