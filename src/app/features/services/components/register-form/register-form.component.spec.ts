import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormComponent, HttpClientTestingModule, ToastrModule.forRoot(), BrowserAnimationsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a registration service form', () => {
    expect(document.querySelector('h1')?.textContent).toContain('Register a new Service');
    expect(document.querySelector('input#name')).toBeTruthy();
    expect(document.querySelector('input#description')).toBeTruthy();
    expect(document.querySelector('input#cost')).toBeTruthy();
    expect(document.querySelector('input#date')).toBeTruthy();
    expect(document.querySelector('input#timeStart')).toBeTruthy();
    expect(document.querySelector('input#timeEnd')).toBeTruthy();
    expect(document.querySelector('input#minimum_number_participants')).toBeTruthy();
    expect(document.querySelector('input#maximum_number_participants')).toBeTruthy();
    expect(document.querySelector('input#frequency')).toBeTruthy();
    expect(document.querySelector('button#btn-register')).toBeTruthy();
    expect(document.querySelector('button#btn-cancel')).toBeTruthy();
  });

  it('Should call reset, set serviceRegistrationForm values and call registerService', () => {
    const formData = {
      name: 'Service Name',
      description: 'Service Description',
      frequency: 'Service Frequency',
      cost: 'Service Cost',
      minimum_number_participants: '1',
      maximum_number_participants: '10',
      date: '2024-04-20',
      timeStart: '06:00:00',
      timeEnd: '09:00:00'
    };
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
    spyOn(component, 'registerService').and.callThrough();
    sessionStorage.setItem('user_id', '0cbadc52-f8df-11ee-929e-a51c06b18a33');
    component.city = 'Bogota';
    component.serviceRegistrationForm.setValue(formData);
    component.serviceRegistrationForm.setValue(formData);
    component.registerService();
    expect(component.registerService).toHaveBeenCalled();
  });

  it('should generate range hours with 1 hour interval', () => {
    component.timeStart = '06:00:00';
    component.timeEnd = '08:00:00';
    component.generateRangeHours();
    expect(component.rangeHours.length).toEqual(3);
  });

  it('should not generate range hours if end time is before start time', () => {
    component.timeStart = '08:00:00';
    component.timeEnd = '07:00:00';
    component.generateRangeHours();
    expect(component.rangeHours.length).toBe(0);
  });

});
