import './App.css';
import { useSelector } from "react-redux";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";

function App() {
  const app = useSelector((state) => state.app.data);

  return (
    <div className="App">
      {
        app.screen === "home"
        ? 
          <Home />
        :
          <Profile />
      }
    </div>
  );
}

export default App;
