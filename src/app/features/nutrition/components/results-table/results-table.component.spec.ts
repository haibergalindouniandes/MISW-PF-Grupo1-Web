/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsTableComponent } from './results-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { DonutChartService } from '../../../../core/services/nutrition/donut-chart.service';

describe('ResultsTableComponent', () => {
  let component: ResultsTableComponent;
  let fixture: ComponentFixture<ResultsTableComponent>;
  let donutChartService: DonutChartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsTableComponent, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [
        { provide: DonutChartService, useValue: jasmine.createSpyObj('DonutChartService', ['setData']) }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResultsTableComponent);
    component = fixture.componentInstance;
    donutChartService = TestBed.inject(DonutChartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle edit mode', () => {
    component.toggleEdit();
    expect(component.editMode).toBeTrue();
  });

  it('should enter edit mode when not already in edit mode', () => {
    component.editMode = false;
    component.feedingResults = { calorias_1: '100', calorias_2: '200', calorias_3: '300', ml_agua: '1500' };
    component.toggleEdit();
    expect(component.editMode).toBeTrue();
    expect(component.originalResults).toEqual(component.feedingResults);
  });

  it('should reset table with cancel fuction', () => {
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });

  it('should calculate total calories correctly', () => {
    component.feedingResults = {
      calorias_1: '100',
      calorias_2: '200',
      calorias_3: '300'
    };
    const totalCalories = component.getTotalCalories();
    expect(totalCalories).toEqual(600);
  });

  it('should return day of the week', () => {
    component.selectedDate = '2024-04-19';
    const expectedDay = 'viernes';
    const result = component.getDayOfWeek();
    expect(result).toEqual(expectedDay);
  });

  it('should return formatted date', () => {
    const currentDate = new Date();
    const expectedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const formattedDate = component.getFormattedDate();
    expect(formattedDate).toEqual(expectedDate);
  });

  it('should set editMode to false and execute onChange', () => {
    component.editMode = true;
    component.onDateChange('2024-04-19');
    expect(component.editMode).toBeFalse();
  });

  it('should return the correct calories for a specific day of the week', () => {
    const feedingPlanMock = {
      plan_alimentacion: {
        lunes: 2000,
        martes: 2000,
        miercoles: 2000,
        jueves: 2000,
        viernes: 2000,
        sabado: 2000,
        domingo: 2000
      }
    };
    component.feedingPlan = feedingPlanMock;
    const expectedResult = 2000;
    const result = component.getCaloriesByDayOfWeek();
    expect(result).toEqual(expectedResult);
  });

  describe('validateIfAllowRegister', () => {
    it('debería devolver true si feedingPlan y feedingResults tienen los campos requeridos', () => {
      component.feedingPlan = { plan_alimentacion: { 'lunes': 1500, 'martes': 1600 } };
      component.feedingResults = { 'calorias_1': 500, 'calorias_2': 600, 'calorias_3': 700, 'ml_agua': 200 };
      expect(component.validateIfAllowRegister()).toBe(true);
    });

    it('debería devolver false si feedingPlan o feedingResults no tienen los campos requeridos', () => {
      component.feedingPlan = { plan_alimentacion: { 'lunes': 1500, 'martes': 1600 } };
      expect(component.validateIfAllowRegister()).toBe(false);
      component.feedingPlan = null;
      component.feedingResults = { 'calorias_1': 500, 'calorias_2': 600, 'calorias_3': 700, 'ml_agua': 200 };
      expect(component.validateIfAllowRegister()).toBe(false);
      component.feedingPlan = { plan_alimentacion: { 'lunes': 1500, 'martes': 1600 } };
      component.feedingResults = null;
      expect(component.validateIfAllowRegister()).toBe(false);
    });
  });

});
