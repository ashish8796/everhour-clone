import { getUser, getUserTime } from "../../api/api";
import { SET_USER, SET_USER_TIME } from "./actionTypes";

export const setUser = () => async (dispatch) => {
  try {
    const { data } = await getUser();
    dispatch({
      type: SET_USER,
      payload: { id: data.id, name: data.name, email: data.email },
    });
  } catch (error) {}
};

export const setUserTime = (id) => async (dispatch) => {
  try {
    const { data } = await getUserTime(id);
    dispatch({ type: SET_USER_TIME, payload: data });
  } catch (error) {}
};
