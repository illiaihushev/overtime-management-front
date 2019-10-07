import {Component, OnInit} from '@angular/core';
import {ExistingAppService, RelatedInfoTitles} from '../../services/existing-app.service';
import {OvertimeAppService} from '../../services/overtime-app.service';
import {CurrentUserInfoService} from '../../services/current-user-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: ExistingAppService,
              private overtimeAppService: OvertimeAppService,
              private currentInfo: CurrentUserInfoService) {
  }

  ngOnInit() {
    this.authService.takeRelatedInfo().subscribe(
      {
        next: (titles) => this.overtimeAppService.requestIrrelevantTitles(
          this.expandWithInitiator(titles)).subscribe(
          {
            next: (irrelevant) => {
              this.authService.takeRelevantInfo(irrelevant).subscribe(
                {
                  next: (relevant) => {
                    this.overtimeAppService.sendData(relevant).subscribe(
                      {
                        next: (msg) => console.log(msg)
                      }
                    );
                  }
                }
              );
            }
          }
        ),
        error: (err) => console.log(err)
      }
    );
  }

  expandWithInitiator(titles: RelatedInfoTitles) {
    titles.initiator = this.currentInfo.username;
    return titles;
  }

}
