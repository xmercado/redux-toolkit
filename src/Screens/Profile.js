import { setScreen } from "../Utils/appSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();

    return (
    <>
        <div>
            Profile Screen
        </div>
        <button onClick={() => dispatch(setScreen("home"))}>
            Home
        </button>
    </> 
    )
}

export default Profile;