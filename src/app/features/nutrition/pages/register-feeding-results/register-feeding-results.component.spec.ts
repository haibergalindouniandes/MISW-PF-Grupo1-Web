/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFeedingResultsComponent } from './register-feeding-results.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterFeedingResultsComponent', () => {
  let component: RegisterFeedingResultsComponent;
  let fixture: ComponentFixture<RegisterFeedingResultsComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ RegisterFeedingResultsComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([]), BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFeedingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
