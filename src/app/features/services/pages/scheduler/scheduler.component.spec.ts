import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchedulerComponent } from './scheduler.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailService } from '../../../../core/services/services/detail.service';
import { of } from 'rxjs';
import { Service } from '../../../../core/models/services/service';

describe('SchedulerComponent', () => {
  let component: SchedulerComponent;
  let fixture: ComponentFixture<SchedulerComponent>;
  let detailService: DetailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([]), BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerComponent);
    component = fixture.componentInstance;
    detailService = TestBed.inject(DetailService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format date correctly in splitDate', () => {
    const date = '2023-05-18T12:00:00Z';
    const expectedFormattedDate = '2023-05-18';
    expect(component.splitDate(date)).toBe(expectedFormattedDate);
  });

  it('should format hour correctly when hour has one digit', () => {
    const inputHour = '9:30';
    const expectedOutput = '09:30:00';
    expect(component.extractHour(inputHour)).toBe(expectedOutput);
  });

  it('should format hour correctly when hour has two digits', () => {
    const inputHour = '12:45';
    const expectedOutput = '12:45:00';
    expect(component.extractHour(inputHour)).toBe(expectedOutput);
  });

  it('should call getDetailServices and update selectedService', () => {
    const mockService: Service = new Service('e67859da-0832-11ef-8a25-251c34276102', 'Carrera los Andes Test', 'Bogotá', '25000 COP');
    const serviceId = '1';
    component.getDetailServices(serviceId);
    spyOn(detailService, 'getServiceById').and.returnValue(of(mockService));
    component.getDetailServices(serviceId);
    expect(component.selectedService).toEqual(mockService);
  });

});
