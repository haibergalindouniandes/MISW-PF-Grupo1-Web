/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonutChartComponent } from './donut-chart.component';

describe('DonutChartComponent', () => {
  let component: DonutChartComponent;
  let fixture: ComponentFixture<DonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutChartComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set data and create chart', () => {
    spyOn(component, 'createChart');
    component.data = { data: [300, 150], labels: ['Meta Kcal', 'Kcal restantes'] };
    expect(component.data).toEqual({ data: [300, 150], labels: ['Meta Kcal', 'Kcal restantes'] });
    component.createChart();
    expect(component.createChart).toHaveBeenCalled();
  });

  it('should calculate percentage of calories', () => {
    component.data = { data: [300, 150], labels: ['Meta Kcal', 'Kcal restantes'] };
    const result = component.calculatePercentageCalories();
    expect(result).toEqual([50, 50]);
  });

});
