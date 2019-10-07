import {RawExistingAppUser} from '../../services/existing-app.service';


export class SignInForm {
  user: RawExistingAppUser;
  serverErrorMsg: string;

  constructor(

  ) {this.user = new RawExistingAppUser(); }
}
