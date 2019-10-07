import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Timestamp} from 'rxjs';
import {map} from 'rxjs/operators';
import {CurrentUserInfoService} from './current-user-info.service';


@Injectable({
  providedIn: 'root'
})
export class ExistingAppService {
  private baseUrl = 'http://localhost:8094/users';

  constructor(private httpClient: HttpClient, private currentUserInfoService: CurrentUserInfoService) {
  }

  signIn(user: RawExistingAppUser) {
    const result = this.httpClient.post<TokenWrapper>(this.baseUrl + '/authenticate', user).pipe(
      map(
        data => {
          this.currentUserInfoService.token = data.token;
          this.currentUserInfoService.username = user.email;
          console.log(data.token);
          return data;
        }
      )
    );
    return result;
  }

  takeRelatedInfo() {
    const result = this.httpClient.post<RelatedInfoTitles>(this.baseUrl + '/info/titles', null).pipe(
      map(
        data => {
          this.currentUserInfoService.certainUserRelatedInfo = data;
          console.log(data);
          return data;
        }
      )
    );
    return result;
  }

  takeRelevantInfo(titles: RelatedInfoTitles) {
    const result = this.httpClient.post<RelatedInfo>(this.baseUrl + '/info/data', titles);
    return result;
  }
}

export class TokenWrapper {

  constructor(public token: string) {
  }
}

export class RelatedInfoTitles {
  public initiator: string;
  public employees: string[];
  public directManagers: string[];
  public lineManagers: string[];
  public pmos: string[];
  public projects: string[];
}

export class RelatedInfo {
  public employees: User[];
  public directs: User[];
  public lines: User[];
  public pmos: User[];
  public projects: Project[];
}

export class User {
  public username: string;
  public name: string;
  public manager: string;
  public positionId: number;
  public vacations: Vacation[];
  public projects: string[];
}

export class Vacation {
  public startDate: Date;
  public endDate: Date;
}

export class Project {
  public name: string;
  public pmo: string;
}

export class RawExistingAppUser {
  public email: string;
  public password: string;
  public positionId: number;
  public managerId: number;
  public projectIds: number[];
  public name: string;
}
