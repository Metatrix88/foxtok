import { USER } from '../../constants/actionTypes';

export const setUser = (payload) => ({
  type: USER.set,
  payload,
});

// export const setUser = {
//   type: USER.set,
// };