/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListScheduledUsersTableComponent } from './list-scheduled-users-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { Notification } from '../../../../core/models/services/notification';
import { ScheduledUsers } from '../../../../core/models/services/scheduled-users';
import { ListScheduledUsersService } from '../../../../core/services/services/list-scheduled-users.service';
import { of } from 'rxjs';
import { Service } from '../../../../core/models/services/service';

describe('ListScheduledUsersTableComponent', () => {
  let component: ListScheduledUsersTableComponent;
  let fixture: ComponentFixture<ListScheduledUsersTableComponent>;
  let listDetailSharedService: ListDetailSharedService;
  let listScheduledUserService: ListScheduledUsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListScheduledUsersTableComponent, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ListScheduledUsersService, ListDetailSharedService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScheduledUsersTableComponent);
    component = fixture.componentInstance;
    listDetailSharedService = TestBed.inject(ListDetailSharedService);
    listScheduledUserService = TestBed.inject(ListScheduledUsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedService and call sendDataSharedService', () => {
    const serviceId = '98f2a2e9-e396-412b-a4ca-0c0cab729c27';
    const expectedNotification = new Notification(undefined, serviceId);
    spyOn(listDetailSharedService, 'setDataNotification');
    component.sendDataSharedNotification(serviceId);
    expect(listDetailSharedService.setDataNotification).toHaveBeenCalledWith(expectedNotification);
  });

  it('should initialize list of scheduled users when ngOnInit is called', () => {
    const servieData: Service = new Service('id_servicio', 'test', 'Bogotá', '25000 COP');
    const scheduledUsersData: ScheduledUsers[] = [
      new ScheduledUsers('Bogota', 'test12234@gmail.com', '2024-08-09', '08:00:00', '12345678-e396-412b-a4ca-0c0cab729c27', 'test', 'Colombia'),
      new ScheduledUsers('Bogota', 'pepito545@gmail.com', '2024-08-09', '10:00:00', '44445555-e396-412b-a4ca-0c0cab729c27', 'pepito', 'Colombia')
    ];
    spyOn(listDetailSharedService, 'getDataService').and.returnValue(of(servieData));
    spyOn(listScheduledUserService, 'getScheduledUsersByService').and.returnValue(of(scheduledUsersData));
    component.ngOnInit();
    expect(component.listScheduledUserList).toEqual(scheduledUsersData);
  });

});
