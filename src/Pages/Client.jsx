import { useDispatch, useSelector } from "react-redux";
import Bottom from "../Components/Client/Bottom";
import WithoutBottomData from "../Components/Client/WithoutBottomData";
import Mainbox from "../Components/Client/Mainbox";
import Middlebox from "../Components/Client/Middlebox";
import MainPageNav from "../Components/MainpageNavbar/MainpageNav";
import { useEffect, useState } from "react";
import { getClientData, setAllClients } from "../store/Client/action";

const Client = () => {
  const client = useSelector((state) => state.client.client);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientData());
    dispatch(setAllClients());
  }, [dispatch]);
  return (
    <div>
      <MainPageNav />
      <Mainbox />
      <Middlebox query={query} setQuery={setQuery} />
      {client.length === 0 ? <WithoutBottomData /> : <Bottom query={query} />}
    </div>
  );
};

export default Client;
