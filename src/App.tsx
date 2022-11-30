import { useEffect, useState } from "react";
import "./App.css";
import { RootState, store } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "./redux/auth/counterSlice";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useRoutes,
  useNavigate,
} from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import axios from "axios";

function App22() {
  const [userName, setuserName] = useState<string>("");
  const dispatch = useDispatch();
  const usernameRedux = useSelector(
    (state: RootState) => state.counterSlice.username
  );
  let navigate = useNavigate();

  useEffect(() => {
    console.log("usernameRedux", usernameRedux);
  }, [usernameRedux]);

  const handleSubmit = () => {
    dispatch(setUsername(userName));
    alert(userName);
  };

  return (
    <div className="App">
      <div className="flex flex-col mb-4 gap-2">
        <label
          className="m-2 p-2 uppercase font-bold text-lg text-grey-darkest"
          htmlFor="userName"
        >
          userName:
        </label>
        <input
          className="border p2 px-3 bg-red text-grey-darkest"
          type="text"
          name="userName"
          id="userName"
          placeholder="userName"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>

      <div>
        <button onClick={() => navigate("/")}>go to home</button>
      </div>
    </div>
  );
}

export default App22;

//  const Test = () => {
//   return (
//       <Routes>
//         <Route path="/" element={<div>homesssssssssssssssssssssssssssssssssss</div>} />
//         <Route path="/login" element={<App />} />
//       </Routes>
//   );
// };

export const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
    { path: "login", element: <App22 /> },
    // ...
  ]);
  return routes;
};

const Home = () => {
  useEffect(() => {}, []);

  return <div>homesssssssssssssssssssssssssssssssssss</div>;
};

const Axios = () => {
  const axiosInstance = axios.create();
  return axiosInstance;
};
