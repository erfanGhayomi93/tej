import { useSelector } from "react-redux";
import { Header } from "../../Components/Header";
import { RootState } from "../../redux/store";

export const Home = () => {
  const user = useSelector((state: RootState) => state.userSlice);

  return (
    <div>
      <Header />
      <div className="flex gap-2 m-4">
        <div className="flex gap-1">
          <p className="font-bold">id:</p>
          <p>{user.id}</p>
        </div>

        <div className="flex gap-1">
          <p className="font-bold">name:</p>
          <p>{user.name}</p>
        </div>

        <div className="flex gap-1">
          <p className="font-bold">username:</p>
          <p>{user.username}</p>
        </div>
      </div>
    </div>
  );
};
