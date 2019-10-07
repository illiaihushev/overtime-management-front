import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CurrentUserInfoService} from './current-user-info.service';
import {map} from 'rxjs/operators';
import {RelatedInfo, RelatedInfoTitles} from './existing-app.service';

@Injectable({
  providedIn: 'root'
})
export class OvertimeAppService {
  private baseUrl = 'http://localhost:8099/users';

  constructor(private httpClient: HttpClient, private currentUserInfoService: CurrentUserInfoService) {

  }

  requestIrrelevantTitles(titles: RelatedInfoTitles) {
    const result = this.httpClient.post<RelatedInfoTitles>(this.baseUrl + '/info/titles', titles);
    return result;
  }

  sendData(data: RelatedInfo) {
    return this.httpClient.post<string>(this.baseUrl + '/info/data', data);
  }
}
