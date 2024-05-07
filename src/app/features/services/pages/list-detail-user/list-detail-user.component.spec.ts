/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDetailUserComponent } from './list-detail-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

describe('ListDetailUserComponent', () => {
  let component: ListDetailUserComponent;
  let fixture: ComponentFixture<ListDetailUserComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ ListDetailUserComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([]) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
