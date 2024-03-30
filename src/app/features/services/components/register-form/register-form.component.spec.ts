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
      imports: [RegisterFormComponent, HttpClientTestingModule, ToastrModule.forRoot(), BrowserAnimationsModule]
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
    // Validate title
    expect(document.querySelector('h1')?.textContent).toContain('Register a new Service');
    // Validate input name
    expect(document.querySelector('input#name')).toBeTruthy();
    // Validate input description
    expect(document.querySelector('input#description')).toBeTruthy();
    // Validate input cost
    expect(document.querySelector('input#cost')).toBeTruthy();
    // Validate input place
    expect(document.querySelector('input#place')).toBeTruthy();
    // Validate input date
    expect(document.querySelector('input#date')).toBeTruthy();
    // Validate input time
    expect(document.querySelector('input#time')).toBeTruthy();
    // Validate input minimum_number_participants
    expect(document.querySelector('input#minimum_number_participants')).toBeTruthy();
    // Validate input maximum_number_participants
    expect(document.querySelector('input#maximum_number_participants')).toBeTruthy();
    // Validate input frequency
    expect(document.querySelector('input#frequency')).toBeTruthy();
    // Validate button btn-register
    expect(document.querySelector('button#btn-register')).toBeTruthy();
    // Validate button btn-cancel
    expect(document.querySelector('button#btn-cancel')).toBeTruthy();
  });
});
