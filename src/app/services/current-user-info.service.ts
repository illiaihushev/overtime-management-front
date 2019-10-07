import { Injectable } from '@angular/core';
import {OvertimeAppUser} from '../models/overtime-app-user';
import {RelatedInfoTitles} from './existing-app.service';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserInfoService {
  user: OvertimeAppUser;
  username: string;
  token: string;
  certainUserRelatedInfo: RelatedInfoTitles;

  constructor() { }
}
