import { Component, OnInit } from '@angular/core';
import { HeadersComponent } from '../../../../shared/components/headers/headers.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ResultsTableComponent } from '../../components/results-table/results-table.component';
import { DonutChartComponent } from '../../components/donut-chart/donut-chart.component';

@Component({
  selector: 'app-register-feeding-results',
  standalone: true,
  imports: [HeadersComponent, FooterComponent, ResultsTableComponent, DonutChartComponent],
  templateUrl: './register-feeding-results.component.html',
  styleUrls: ['./register-feeding-results.component.scss']
})
export class RegisterFeedingResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
