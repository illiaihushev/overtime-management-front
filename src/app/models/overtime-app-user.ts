import {Project} from './project';

export class OvertimeAppUser {
  public name: string;
  public email: string;
  public projects: Project[];
  public manager: OvertimeAppUser;
}


