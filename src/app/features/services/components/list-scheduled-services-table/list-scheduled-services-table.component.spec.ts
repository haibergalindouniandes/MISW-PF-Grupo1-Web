/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListScheduledServicesTableComponent } from './list-scheduled-services-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { ListService } from '../../../../core/services/services/list.service';
import { Service } from '../../../../core/models/services/service';

describe('ListScheduledServicesTableComponent', () => {
  let component: ListScheduledServicesTableComponent;
  let fixture: ComponentFixture<ListScheduledServicesTableComponent>;
  let listService: ListService;
  let listDetailSharedService: ListDetailSharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListScheduledServicesTableComponent, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ListService, ListDetailSharedService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScheduledServicesTableComponent);
    component = fixture.componentInstance;
    listService = TestBed.inject(ListService);
    listDetailSharedService = TestBed.inject(ListDetailSharedService);
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

  it('should set selectedService and call sendDataSharedService', () => {
    const mockService: Service = { id: '1', nombre: 'Test Service', lugar: 'Bogotá', costo: '25000 COP' };
    spyOn(listDetailSharedService, 'setDataService');
    component.onSelectedService(mockService);
    expect(component.selectedService).toEqual(mockService);
    expect(listDetailSharedService.setDataService).toHaveBeenCalledWith(mockService);
  });

});
