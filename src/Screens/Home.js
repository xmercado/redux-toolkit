import { setScreen } from "../Utils/appSlice";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    return (
    <>
        <div>
            Home Screen
        </div>
        <button onClick={() => dispatch(setScreen("profile"))}>
            Profile
        </button>
    </> 
    )
}

export default Home;