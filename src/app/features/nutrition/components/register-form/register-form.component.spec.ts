/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FeedingPlan } from '../../../../core/models/nutrition/feeding-plan';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormComponent, HttpClientTestingModule, ToastrModule.forRoot()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle edit mode', () => {
    component.toggleEdit();
    expect(component.editMode).toBeTrue();
  });

  it('should return true when feeding plan is complete', () => {
    const completeFeedingPlan: FeedingPlan = {
      id_usuario: 'ce357334-bf36-4a4a-a55a-5a01e54d7e8d',
      numero_semanas: 10,
      plan_alimentacion: {
        domingo: 1000,
        jueves: 1500,
        lunes: 1200,
        martes: 2500,
        miercoles: 1800,
        sabado: 1000,
        viernes: 1200,
      }
    };
    component.feedingPlan = completeFeedingPlan;
    expect(component.validateIfAllowRegister()).toBeTrue();
  });

  it('should return false when feeding plan is missing properties', () => {
    const incompleteFeedingPlans = [
      { numero_semanas: 4 },
      { numero_semanas: 4, plan_alimentacion: { jueves: 'data', martes: 'data', miercoles: 'data', viernes: 'data', sabado: 'data', domingo: 'data' } },
      { plan_alimentacion: { domingo: 'data', jueves: 'data', lunes: 'data', martes: 'data', miercoles: 'data', sabado: 'data', viernes: 'data' } },
    ];
    for (const incompleteFeedingPlan of incompleteFeedingPlans) {
      component.feedingPlan = incompleteFeedingPlan;
      expect(component.validateIfAllowRegister()).toBeFalse();
    }

    let feedingPlan = new FeedingPlan('e357334-bf36-4a4a-a55a-5a01e54d7e8d', 4, {
      domingo: 1000,
      jueves: 1500,
      lunes: 1200,
      martes: 2500,
      miercoles: 1800,
      sabado: 1000,
      viernes: 1200,
    });
  });

  it('should reset table with cancel fuction', () => {
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });

  it('should convert numeric values in the plan_alimentacion object to strings', () => {
    const originalFeedingPlan = {
      plan_alimentacion: {
        lunes: 1000,
        martes: 1500,
        miercoles: 2000,
        jueves: 1000,
        viernes: 2500,
        sabado: 1000,
        domingo: 3000
      }
    };
    component.feedingPlan = originalFeedingPlan;
    const convertedPlan = component.convert_number_to_string();
    const FeedingPlan_number_as_string = {
      plan_alimentacion: {
        lunes: '1000',
        martes: '1500',
        miercoles: '2000',
        jueves: '1000',
        viernes: '2500',
        sabado: '1000',
        domingo: '3000'
      }
    };
    expect(convertedPlan).toEqual(FeedingPlan_number_as_string.plan_alimentacion);
  });

});
