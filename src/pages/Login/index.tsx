import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsernameAction } from "../../redux/auth/userSlice";

const url = "https://jsonplaceholder.typicode.com/users/1";

export const Login = () => {
  const [userName, setuserName] = useState<string>("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const getUser = async () => {
    let res = await axios(url);
    const { id, name, username } = res.data;

    dispatch(setUsernameAction({ id, name, username }));
    navigate("/");
  };

  const handleSubmit = () => {
    getUser();
  };

  return (
    <div>
      <div className="flex mb-4 gap-2 m-2">
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

        <button className="mx-2 bg-slate-500 p-2 text-white" onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};
