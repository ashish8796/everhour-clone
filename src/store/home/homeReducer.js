const initState = {};

const ACTION = 'ACTION';

export default function homeReducer(state = initState, { type, payload }) {
  switch (type) {
    case ACTION:
      return {};

    default:
      return state;
  }
}
