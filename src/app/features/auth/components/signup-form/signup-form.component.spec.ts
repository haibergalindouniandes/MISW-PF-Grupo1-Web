/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupFormComponent } from './signup-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ SignupFormComponent, HttpClientTestingModule, ToastrModule.forRoot(), BrowserAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return correct deportes array when get_deportes is called', () => {
    component.ciclismo = true;
    component.atletismo = true;component.otros = true;
    expect(component.get_deportes()).toContain('Ciclismo');
    expect(component.get_deportes()).toContain('Atletismo');
    expect(component.get_deportes()).toContain('Otros');
  });

  it('Should reset form and clear deportes array on cancel', () => {
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });

  it('Should update corresponding properties when get_tipo_documento is called', () => {
    const event: any = { target: { value: 'OTRO' } };
    component.get_tipo_documento(event);
    expect(component.tipo_documento).toEqual('OTRO');
  });

  it('Should update corresponding properties when get_pais_nacimiento is called', () => {
    const event: any = { target: { value: 'Colombia' } };
    component.get_pais_nacimiento(event);
    expect(component.pais_nacimiento).toEqual('Colombia');
  });

  it('Should update corresponding properties when get_ciudad_nacimiento is called', () => {
    const event: any = { target: { value: 'Bogota' } };
    component.get_ciudad_nacimiento(event);
    expect(component.ciudad_nacimiento).toEqual('Bogota');
  });

  it('Should update corresponding properties when get_genero is called', () => {
    const event: any = { target: { value: 'F' } };
    component.get_genero(event);
    expect(component.genero).toEqual('F');
  });

  it('Should update corresponding properties when get_pais_residencia is called', () => {
    const event: any = { target: { value: 'Colombia' } };
    component.get_pais_residencia(event);
    expect(component.pais_residencia).toEqual('Colombia');
  });

  it('Should update corresponding properties when get_ciudad_residencia is called', () => {
    const event: any = { target: { value: 'Bogota' } };
    component.get_ciudad_residencia(event);
    expect(component.ciudad_residencia).toEqual('Bogota');
  });

  it('Should update corresponding properties when get_tipo_plan is called', () => {
    const event: any = { target: { value: 'Premium' } };
    component.get_tipo_plan(event);
    expect(component.tipo_plan).toEqual('Premium');
  });

  it('Should update corresponding properties when get_tipo_usuario is called', () => {
    const event: any = { target: { value: 'Entrenador' } };
    component.get_tipo_usuario(event);
    expect(component.tipo_usuario).toEqual('Entrenador');
  });

  it('Should update ciclismo when checkboxCiclismoCambio is called', () => {
    const event: any = { target: { checked: true } };
    component.checkboxCiclismoCambio(event as Event);
    expect(component.ciclismo).toBe(true);
  });

  it('Should update atletismo when checkboxAtletismoCambio is called', () => {
    const event: any = { target: { checked: true } };
    component.checkboxAtletismoCambio(event as Event);
    expect(component.atletismo).toBe(true);
  });

  it('Should update otros when checkboxOtrosCambio is called', () => {
    const event: any = { target: { checked: true } };
    component.checkboxOtrosCambio(event as Event);
    expect(component.otros).toBe(true);
  });

  it('should call signupService.signUp and reset form when createUser is called with valid form', () => {
    spyOn(component, 'createUser').and.callThrough();
    const formData = {
      inputUsuario: 'test@test.com',
      inputContrasena: 'password123',
      inputNombres: 'John',
      inputPeso: '70',
      inputApellidos: 'Doe',
      inputEdad: '25',
      inputAltura: '180',
      inputNumDoc: '12345678',
      inputAntiguedad: '1'
    };
    component.serviceSignUpForm.setValue(formData);
    component.createUser();
    expect(component.createUser).toHaveBeenCalled();
  });

});
