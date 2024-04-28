import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitComponent } from './init.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

describe('InitComponent', () => {
  let component: InitComponent;
  let fixture: ComponentFixture<InitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitComponent, ToastrModule.forRoot(), RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
