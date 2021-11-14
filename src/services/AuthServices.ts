import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import IUser from '../types/IUser';
import {LoginMethod} from '../utils/Enums';

const FBSDK = require('react-native-fbsdk');
class AuthServices {
  public static async GoogleLogin(): Promise<IUser> {
    return new Promise(async (resolve, reject) => {
      try {
        GoogleSignin.configure({
          webClientId:
            '106060791935-taqfhc606id617gkvobfu3l0d4v09iq2.apps.googleusercontent.com',
          iosClientId:
            '106060791935-kf2s1iomkpdo733ijkqj5qjooficnbkf.apps.googleusercontent.com',
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        let user: IUser = {
          token: userInfo.idToken ? userInfo.idToken : '',
          name: userInfo.user.name ? userInfo.user.name : '',
          method: LoginMethod.Google,
        };
        resolve(user);
      } catch (error) {
        console.log(error);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          reject(error);
        } else if (error.code === statusCodes.IN_PROGRESS) {
          reject(error);
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          reject(error);
        } else {
          reject(error);
        }
      }
    });
  }
  public static FBLogin(): Promise<IUser> {
    return new Promise((resolve, reject) => {
      FBSDK.LoginManager.logInWithPermissions(['public_profile']).then(
        function (result: any) {
          if (result.isCancelled) {
            reject('canceled');
          } else {
            const infoRequest = new FBSDK.GraphRequest(
              '/me',
              null,
              (error: any, result: any) => {
                if (error) {
                  reject(error);
                } else {
                  let user: IUser = {
                    token: result.id,
                    name: result.name,
                    method: LoginMethod.FB,
                  };
                  resolve(user);
                }
              },
            );

            new FBSDK.GraphRequestManager().addRequest(infoRequest).start();
          }
        },
        function (error: any) {
          reject(error);
        },
      );
    });
  }
}
export default AuthServices;
