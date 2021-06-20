import { getAllUsers, getUser, getUserTime } from "../../api/api";
import { SET_ALL_USERS, SET_USER, SET_USER_TIME } from "./actionTypes";

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

export const setAllUsers = () => async (dispatch) => {
  try {
    const { data } = await getAllUsers();
    dispatch({
      type: SET_ALL_USERS,
      payload: data,
    });
  } catch (error) {}
};
