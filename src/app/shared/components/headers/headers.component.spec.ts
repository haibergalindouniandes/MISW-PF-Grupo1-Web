import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HeadersComponent } from './headers.component';
import { ToastrModule } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

describe('HeadersComponent', () => {
  let component: HeadersComponent;
  let fixture: ComponentFixture<HeadersComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadersComponent, ToastrModule.forRoot(), RouterModule.forRoot([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return true if user is logged in', () => {
    sessionStorage.setItem('username', 'testUser');
    expect(component.isLoggedIn()).toBeTrue();
  });

  it('Should return false if user is not logged in', () => {
    sessionStorage.removeItem('username');
    expect(component.isLoggedIn()).toBeFalse();
  });

  it('Should logout and remove session storage items', () => {
    sessionStorage.setItem('username', 'testUser');
    sessionStorage.setItem('user_id', '1');
    sessionStorage.setItem('rol', 'admin');
    component.logout();
    expect(sessionStorage.getItem('username')).toBeNull();
    expect(sessionStorage.getItem('user_id')).toBeNull();
    expect(sessionStorage.getItem('rol')).toBeNull();
  });

});
