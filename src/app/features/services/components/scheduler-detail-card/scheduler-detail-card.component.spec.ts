/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchedulerDetailCardComponent } from './scheduler-detail-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { of } from 'rxjs';
import { Service } from '../../../../core/models/services/service';
import { DetailService } from '../../../../core/services/services/detail.service';
import { EmitterHour } from '../../../../core/emitters/hour-emitter';

describe('DetailCardComponent', () => {
  let component: SchedulerDetailCardComponent;
  let fixture: ComponentFixture<SchedulerDetailCardComponent>;
  let listDetailSharedService: ListDetailSharedService;
  let emitterHour: EmitterHour;
  let detailService: DetailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerDetailCardComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([])],
      providers: [ListDetailSharedService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerDetailCardComponent);
    component = fixture.componentInstance;
    listDetailSharedService = TestBed.inject(ListDetailSharedService);
    emitterHour = TestBed.inject(EmitterHour);
    detailService = TestBed.inject(DetailService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format date correctly', () => {
    const date = '2022-04-01T00:00:00.000Z';
    const formattedDate = component.splitDate(date);
    expect(formattedDate).toEqual('2022-04-01');
  });

  it('should return single schedule', () => {
    const schedule = ['10:00'];
    const result = component.getSchedule(schedule);
    expect(result).toEqual('10:00');
  });

  it('should return range of schedules', () => {
    const schedule = ['10:00', '11:00', '12:00'];
    const result = component.getSchedule(schedule);
    expect(result).toEqual('10:00 - 12:00');
  });

  it('should set selectedService when service is retrieved successfully', () => {
    const mockService: Service = new Service('e67859da-0832-11ef-8a25-251c34276102', 'Carrera los Andes Test', 'Bogotá - El Salitre', '25000 COP');
    const serviceId = '1';
    spyOn(listDetailSharedService, 'getDataService').and.returnValue(of(mockService));
    spyOn(detailService, 'getServiceById').and.returnValue(of(mockService));
    component.getDetailServices(serviceId);
    expect(component.selectedService).toEqual(mockService);
  });

  it('should set horario and emit hour correctly', (done) => {
    const testHour = '10:00 AM';
    emitterHour.hourEmitter.subscribe((emittedHour: string) => {
      expect(emittedHour).toBe(testHour);
      done();
    });

    emitterHour.setHour(testHour);
    expect(emitterHour.horario).toBe(testHour);
  });

});
