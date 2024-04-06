import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninFormComponent } from './signin-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Signin } from '../../../../core/models/auth/signin';
import { LoginService } from '../../../../core/services/auth/login.service';

describe('SigninFormComponent', () => {
  let component: SigninFormComponent;
  let fixture: ComponentFixture<SigninFormComponent>;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninFormComponent, HttpClientTestingModule, ToastrModule.forRoot(), BrowserAnimationsModule],
      providers: [LoginService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninFormComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call signIn method with correct parameters', () => {
    const signIn: Signin = { email: 'test@example.com', password: 'password' };
    const signInServiceSpy = spyOn(loginService, 'signIn').and.callThrough();
    component.signIn(signIn);
    expect(signInServiceSpy).toHaveBeenCalledWith(new Signin(signIn.email, signIn.password));
  });
});
