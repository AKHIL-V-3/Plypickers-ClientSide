import api from "../../../../lib/Axios"
import useAuthHook from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../../lib/Redux/Slices";
import { useEffect } from "react";


function UserDashboard() {

    const { Logout } = useAuthHook()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.AuthSlice.user)

    const handleverify = async () => {
        const response = await api.get(`/verifycheck`)
        console.log(response, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    }

    const handlelogout = async () => {
        const response = await Logout()
        dispatch(AuthActions.removeUser())
        if(response.status === 200){
              navigate("/signin")
        }        
    }

    useEffect(()=>{
        if(!user){
            navigate("/signin")
       }
    },[navigate,user])


    return (
        <>
            <h1>UserDashboard</h1>

            <button onClick={handleverify}>verifyUser</button>
            <button onClick={handlelogout}>Logout</button>
        </>
    )
}

export default UserDashboard