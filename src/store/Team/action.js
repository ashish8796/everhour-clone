import {
  ADDMEMBERFAILURE,
  ADDMEMBERREQUEST,
  ADDMEMBERSUCCESS,
  DELETEMEMBERFAILURE,
  DELETEMEMBERREQUEST,
  DELETEMEMBERSUCCESS,
  TIMERFAILURE,
  TIMERREQUEST,
  TIMERSUCCESS,
  TIMESHEETFAILURE,
  TIMESHEETREQUEST,
  TIMESHEETSUCCESS,
} from "./actionType";
import { getTimer } from "../../api/api";
import { getTimeSheet } from "../../api/api";

const timerRequest = () => {
  return {
    type: TIMERREQUEST,
  };
};

const timerSuccess = (payload) => {
  return {
    type: TIMERSUCCESS,
    payload,
  };
};

const timerFailure = () => {
  return {
    type: TIMERFAILURE,
  };
};

const timeSheetRequest = () => {
  return {
    type: TIMESHEETREQUEST,
  };
};

const timeSheetSuccess = (payload) => {
  return {
    type: TIMESHEETSUCCESS,
    payload,
  };
};

const timeSheetFailure = () => {
  return {
    type: TIMESHEETFAILURE,
  };
};

const addMemberRequest = () => {
  return {
    type: ADDMEMBERREQUEST,
  };
};

const addMemberSuccess = (payload) => {
  return {
    type: ADDMEMBERSUCCESS,
    payload,
  };
};

const addMemberFailure = () => {
  return {
    type: ADDMEMBERFAILURE,
  };
};

const deleteMemberRequest = () => {
  return {
    type: DELETEMEMBERREQUEST,
  };
};

const deleteMemberSuccess = (payload) => {
  return {
    type: DELETEMEMBERSUCCESS,
    payload,
  };
};

const deleteMemberFailure = () => {
  return {
    type: DELETEMEMBERFAILURE,
  };
};

const getTimerDetails = (payload) => async (dispatch) => {
  return getTimer()
    .then((res) => dispatch(timerSuccess(res.data)))
    .catch((res) => dispatch(timerFailure()));
};

const getTimeSheetDetails = (payload) => async (dispatch) => {
  dispatch(timeSheetRequest());
  try {
    const { data } = await getTimeSheet();
    dispatch({ type: TIMESHEETSUCCESS, payload: data });
  } catch (error) {
    dispatch(timeSheetFailure());
  }
};

const addMemberData = (payload) => (dispatch) => {
  dispatch(addMemberRequest());
  const info = {
    name: payload,
    active: true,
    rate: "$50",
    cost: "$30",
    capacity: "35h",
    limit: "no limit",
    teamGroups: "no groups",
  };
  dispatch(addMemberSuccess(info));
  dispatch(addMemberFailure());
};

// const deleteMemberData = payload => dispatch => {
//     dispatch(deleteMemberRequest())
//     return deletemember(payload)
//     .then(res => dispatch(deleteMemberSuccess(res.data)))
//     .catch(res => dispatch(deleteMemberFailure()))
// }

export { getTimeSheetDetails, getTimerDetails, addMemberData };
