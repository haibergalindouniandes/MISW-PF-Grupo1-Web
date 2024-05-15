/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFeedingPlanComponent } from './register-feeding-plan.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterFeedingPlanComponent', () => {
  let component: RegisterFeedingPlanComponent;
  let fixture: ComponentFixture<RegisterFeedingPlanComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ RegisterFeedingPlanComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([]) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFeedingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
