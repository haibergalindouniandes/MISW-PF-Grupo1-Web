import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadersComponent } from './headers.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

describe('HeadersComponent', () => {
  let component: HeadersComponent;
  let fixture: ComponentFixture<HeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadersComponent, ToastrModule.forRoot(), RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
