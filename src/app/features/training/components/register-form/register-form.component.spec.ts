/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { RegisterFormComponent } from './register-form.component';
import { TrainingPlan } from '../../../../core/models/training/training-plan';

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

  it('should return true when training plan is complete', () => {
    const completeTrainingPlan: TrainingPlan = {
      id_usuario: 'ce357334-bf36-4a4a-a55a-5a01e54d7e8d',
      entrenamiento: 'Ciclismo',
      numero_semanas: 4,
      plan_entrenamiento: {
        domingo: 7,
        jueves: 6,
        lunes: 8,
        martes: 4,
        miercoles: 5,
        sabado: 7,
        viernes: 9,
      }
    };
    component.trainingPlan = completeTrainingPlan;
    expect(component.validateIfAllowRegister()).toBeTrue();
  });

  it('should return false when training plan is missing properties', () => {
    const incompleteTrainingPlans = [
      { entrenamiento: 'Ciclismo', numero_semanas: 4 },
      { entrenamiento: 'Ciclismo', numero_semanas: 4, plan_entrenamiento: { jueves: 'data', martes: 'data', miercoles: 'data', viernes: 'data', sabado: 'data', domingo: 'data' } },
      { entrenamiento: 'Ciclismo', plan_entrenamiento: { domingo: 'data', jueves: 'data', lunes: 'data', martes: 'data', miercoles: 'data', sabado: 'data', viernes: 'data' } },
    ];
    for (const incompleteTrainingPlan of incompleteTrainingPlans) {
      component.trainingPlan = incompleteTrainingPlan;
      expect(component.validateIfAllowRegister()).toBeFalse();
    }

    let trainingPlan = new TrainingPlan('Ciclismo', 'ce357334-bf36-4a4a-a55a-5a01e54d7e8d', 4, {
      lunes: 10,
      martes: 15,
      miercoles: 20,
      jueves: 10,
      viernes: 25,
      sabado: 10,
      domingo: 30
    });
  });

  it('should reset table with cancel fuction', () => {
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });

  it('should convert numeric values in the plan_entrenamiento object to strings', () => {
    const originalTrainingPlan = {
      plan_entrenamiento: {
        lunes: 10,
        martes: 15,
        miercoles: 20,
        jueves: 10,
        viernes: 25,
        sabado: 10,
        domingo: 30
      }
    };
    component.trainingPlan = originalTrainingPlan;
    const convertedPlan = component.convert_number_to_string();
    const TrainingPlan_number_as_string = {
      plan_entrenamiento: {
        lunes: '10',
        martes: '15',
        miercoles: '20',
        jueves: '10',
        viernes: '25',
        sabado: '10',
        domingo: '30'
      }
    };
    expect(convertedPlan).toEqual(TrainingPlan_number_as_string.plan_entrenamiento);
  });

});


