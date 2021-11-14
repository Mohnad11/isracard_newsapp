import IUserState from '../../types/IUserState';

const UserReducers = {
  SAVE_USER: saveUser,
};
function saveUser(state: IUserState, action: any) {
  return {...state, ...{user: action.user}};
}
export default UserReducers;
