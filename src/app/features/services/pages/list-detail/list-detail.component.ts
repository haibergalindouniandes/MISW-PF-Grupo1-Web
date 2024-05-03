import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [CommonModule, HeadersComponent, FooterComponent, ListDetailComponent, ListComponent, DetailComponent],
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
