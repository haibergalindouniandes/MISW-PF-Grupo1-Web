/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { of } from 'rxjs';
import { Service } from '../../../../core/models/services/service';
import { DetailService } from '../../../../core/services/services/detail.service';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let listDetailSharedService: ListDetailSharedService;
  let detailService: DetailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([])],
      providers: [ListDetailSharedService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    listDetailSharedService = TestBed.inject(ListDetailSharedService);
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
    const mockService: Service = { id: '1', nombre: 'Test Service', lugar: 'Bogotá - El Salitre', costo: '25000 COP' };
    const serviceId = '1';
    spyOn(listDetailSharedService, 'getData').and.returnValue(of({ id: serviceId }));
    spyOn(detailService, 'getServiceById').and.returnValue(of(mockService));
    component.getDetailServices(serviceId);
    expect(component.selectedService).toEqual(mockService);
  });

});
