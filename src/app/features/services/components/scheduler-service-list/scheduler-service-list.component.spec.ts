import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { SchedulerServiceListComponent } from './scheduler-service-list.component';
import { ListService } from '../../../../core/services/services/list.service';
import { EmitterService } from '../../../../core/emitters/service-emitter';
import { Service } from '../../../../core/models/services/service';
import { RouterModule } from '@angular/router';

describe('SchedulerServiceListComponent', () => {
  let component: SchedulerServiceListComponent;
  let fixture: ComponentFixture<SchedulerServiceListComponent>;
  let listService: ListService;
  let listDetailSharedService: EmitterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerServiceListComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([])],
      providers: [ListService, EmitterService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerServiceListComponent);
    component = fixture.componentInstance;
    listService = TestBed.inject(ListService);
    listDetailSharedService = TestBed.inject(EmitterService);
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

  it('should return multiples schedules', () => {
    const schedule = ['10:00', '11:00'];
    const result = component.getSchedule(schedule);
    expect(result).toEqual('10:00 - 11:00');
  });

  it('should set selectedService and call EmmitedService', () => {
    const mockService: Service = { id: '1', nombre: 'Test Service', lugar: 'Bogotá - El Salitre', costo: '25000 COP' };
    spyOn(listDetailSharedService, 'cambiosService');
    component.onSelectedService(mockService);
    expect(component.selectedService).toEqual(mockService);
    
  });

});
