import { Navigate } from 'react-router-dom';

const Protected = ({ isSuper, children }) => {
    const loginUserData = JSON.parse(localStorage.getItem('_userData'));
    console.log(loginUserData);
    console.log(loginUserData.role_id , isSuper);
    if (loginUserData.role_id == 1) {
        return children;
    }else if(loginUserData.role_id == 2){
        if(isSuper){
            return <Navigate to="/" replace />;
        }
        return children;
    }
    return <Navigate to="/" replace />;
};
export default Protected;
