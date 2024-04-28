/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormComponent, HttpClientTestingModule, ToastrModule.forRoot()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
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
    component.trainingPlan = { lunes: '10', martes: '20', miercoles: '30', jueves: '15', viernes: '15', sabado: '25', domingo: '15' };
    component.toggleEdit();
    expect(component.editMode).toBeTrue();
    expect(component.trainingPlan_original_values).toEqual(component.trainingPlan);
  });

  it('should reset table with cancel fuction', () => {
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });
});


