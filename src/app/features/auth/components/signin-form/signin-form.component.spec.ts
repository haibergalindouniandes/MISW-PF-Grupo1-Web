import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninFormComponent } from './signin-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SigninFormComponent', () => {
  let component: SigninFormComponent;
  let fixture: ComponentFixture<SigninFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninFormComponent, HttpClientTestingModule, ToastrModule.forRoot(), BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
