import { useDispatch, useSelector } from "react-redux";
import Bottom from "../Components/Client/Bottom";
import WithoutBottomData from "../Components/Client/WithoutBottomData";
import Mainbox from "../Components/Client/Mainbox";
import Middlebox from "../Components/Client/Middlebox";
import MainPageNav from "../Components/MainpageNavbar/MainpageNav";
import { useEffect } from "react";
import { setAllClients } from "../store/Client/action";

const Client = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.client);
  console.log(client);

  useEffect(() => {
    dispatch(setAllClients());
  }, []);

  return (
    <div>
      <MainPageNav />
      <Mainbox />
      <Middlebox />
      {client.length === 0 ? <WithoutBottomData /> : <Bottom />}
    </div>
  );
};

export default Client;
