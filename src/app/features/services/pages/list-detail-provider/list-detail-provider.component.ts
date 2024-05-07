import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { ListServicesComponent } from '../../components/list-services-table/list-services-table.component';
import { DetailCardComponent } from '../../components/detail-card/detail-card.component';
import { ListScheduledUsersTableComponent } from '../../components/list-scheduled-users-table/list-scheduled-users-table.component';
import { NotificationFormComponent } from '../../components/notification-form/notification-form.component';

@Component({
  selector: 'app-list-services-table-detail-provider',
  standalone: true,
  imports: [CommonModule, ListDetailProviderComponent, HeadersComponent, FooterComponent, ListServicesComponent, DetailCardComponent, ListScheduledUsersTableComponent, NotificationFormComponent],
  templateUrl: './list-detail-provider.component.html',
  styleUrls: ['./list-detail-provider.component.scss']
})
export class ListDetailProviderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
