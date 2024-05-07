/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationFormComponent } from './notification-form.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { SendNotificationService } from '../../../../core/services/services/send-notification.service';
import { Notification } from '../../../../core/models/services/notification';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

describe('NotificationFormComponent', () => {
  let component: NotificationFormComponent;
  let fixture: ComponentFixture<NotificationFormComponent>;
  let listDetailSharedService: ListDetailSharedService;
  let sendNotificationService: SendNotificationService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ NotificationFormComponent, ToastrModule.forRoot(), HttpClientTestingModule ],
      providers: [ListDetailSharedService, SendNotificationService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationFormComponent);
    component = fixture.componentInstance;
    listDetailSharedService = TestBed.inject(ListDetailSharedService);
    sendNotificationService = TestBed.inject(SendNotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize notification form and subscribe to data notification', () => {
    const testData: Notification = {
      id_servicio: '98f2a2e9-e396-412b-a4ca-0c0cab729c27',
      descripcion: 'Description of the service',
      emails: ['test@example.com'],
      tipo: 'notification',
      usuario: 'Test User'
    };
    spyOn(listDetailSharedService, 'getDataNotification').and.returnValue(of(testData));
    component.ngOnInit();
    expect(component.notificationForm).toBeDefined();
    expect(component.selectedService).toEqual(testData);
  });

  it('should send notification when sendNotification is called', () => {
    const testData: Notification = {
      id_servicio: '98f2a2e9-e396-412b-a4ca-0c0cab729c27',
      descripcion: 'Description of the service',
      emails: ['test@example.com'],
      tipo: 'notification',
      usuario: 'Test User'
    };
    component.selectedService = testData;
    spyOn(sendNotificationService, 'sendMasiveNotification').and.returnValue(of(testData));
    component.notificationForm = new FormGroup({
      message: new FormControl('Test message', [Validators.required, Validators.minLength(8)])
    });
    component.sendNotification();
    expect(sendNotificationService.sendMasiveNotification).toHaveBeenCalledWith(new Notification('Test message', '98f2a2e9-e396-412b-a4ca-0c0cab729c27'));
    expect(component.notificationForm.value.message).toBe(null);
  });

});
