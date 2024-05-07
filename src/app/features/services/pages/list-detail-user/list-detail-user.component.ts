import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailCardComponent } from '../../components/detail-card/detail-card.component';
import { ListScheduledServicesTableComponent } from '../../components/list-scheduled-services-table/list-scheduled-services-table.component';

@Component({
  selector: 'app-list-services-table-detail',
  standalone: true,
  imports: [CommonModule, HeadersComponent, FooterComponent, ListDetailUserComponent, ListScheduledServicesTableComponent, DetailCardComponent],
  templateUrl: './list-detail-user.component.html',
  styleUrls: ['./list-detail-user.component.scss']
})
export class ListDetailUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
