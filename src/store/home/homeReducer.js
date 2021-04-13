const initState = {};

const ACTION = "ACTION";

export default function homeReducer(state, { type, payload }) {
  switch (type) {
    case ACTION:
      return {};

    default:
      return state;
  }
}
