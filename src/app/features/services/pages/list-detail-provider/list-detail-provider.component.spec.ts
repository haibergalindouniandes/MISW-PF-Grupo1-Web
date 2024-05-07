/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDetailProviderComponent } from './list-detail-provider.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

describe('ListDetailProviderComponent', () => {
  let component: ListDetailProviderComponent;
  let fixture: ComponentFixture<ListDetailProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDetailProviderComponent, HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
