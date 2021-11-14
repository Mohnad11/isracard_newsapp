import {LoginMethod} from '../utils/Enums';

export default interface IUser {
  token: string;
  name: string;
  method: LoginMethod;
}
