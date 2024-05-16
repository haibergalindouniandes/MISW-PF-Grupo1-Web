import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { ListScheduledUsersService } from '../../../../core/services/services/list-scheduled-users.service';
import { Notification } from '../../../../core/models/services/notification';
import { ScheduledUsers } from '../../../../core/models/services/scheduled-users';

@Component({
  selector: 'app-list-scheduled-users-table',
  standalone: true,
  imports: [CommonModule, ListScheduledUsersTableComponent],
  templateUrl: './list-scheduled-users-table.component.html',
  styleUrls: ['./list-scheduled-users-table.component.scss']
})
export class ListScheduledUsersTableComponent implements OnInit {

  listScheduledUserList: Array<ScheduledUsers> = [];

  constructor(
    private listScheduledUserService: ListScheduledUsersService,
    private listDetailSharedService: ListDetailSharedService
  ) { }

  ngOnInit() {
    this.listDetailSharedService.getDataService().subscribe(data => {
      this.sendDataSharedNotification(undefined);
      this.getScheduledUsersByService(data.id);

    });
  }

  /* istanbul ignore next */
  getScheduledUsersByService(serviceId: string) {
    this.listScheduledUserList = [];
    this.listScheduledUserService.getScheduledUsersByService(serviceId)
      .pipe(
        switchMap(listScheduledUserSucess => {
          this.listScheduledUserList = listScheduledUserSucess;
          this.sendDataSharedNotification(serviceId);
          return [];
        })
      )
      .subscribe(() => { });
  }

  sendDataSharedNotification(serviceId: string | undefined) {
    this.listDetailSharedService.setDataNotification(new Notification(undefined, serviceId));
  }


}
