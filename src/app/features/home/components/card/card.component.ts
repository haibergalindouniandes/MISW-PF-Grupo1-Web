import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ConsultarPlanAlimentacionService } from '../../../../core/services/services/alimentacion.service';
import { ConsultarPlanEntrenamientoService } from '../../../../core/services/services/entrenamiento.service';
import { Validators } from '@angular/forms';
import { Alimentacion, PlanAlimentacion } from '../../../../core/models/services/alimentacion';
import { PlanEntrenamiento } from '../../../../core/models/services/entrenamiento';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  datosEntrenamiento: PlanEntrenamiento | undefined;
  datosAlimentacion: PlanAlimentacion | undefined;

  constructor(
    private entrenamientoService: ConsultarPlanEntrenamientoService,
    private alimentacionService: ConsultarPlanAlimentacionService
  ) { }

  columnas: string[] = ['Día','Entrenamiento','Alimentación'];
  objectKeys = Object.keys;
  dia:any[]=[];
  planes: any[][]= [];

  ngOnInit() {
    console.log('Consultando servicio plan entrenamiento')
    this.entrenamientoService.consulrarPlanAEntrenamiento().subscribe((exitoso: { plan_entrenamiento: PlanEntrenamiento; }) => {
      console.log('resultado:::::::::::');
      this.datosEntrenamiento = exitoso.plan_entrenamiento;
      console.log(exitoso.plan_entrenamiento);
      console.log(this.datosEntrenamiento.id);
      console.log('plan Entrenamiento:::::::::::');

      console.log('Consultando servicio plan alimentacion')
      this.alimentacionService.consulrarPlanAlimentacion().subscribe(success => {
        console.log('resultado:::::::::::');
        this.datosAlimentacion = success.plan_alimentacion;
        console.log(success.plan_alimentacion);
        console.log(this.datosAlimentacion.id);
        this.planes= [
          ['Lunes', this.datosEntrenamiento?.lunes,this.datosAlimentacion?.lunes],
          ['Martes',this.datosEntrenamiento?.martes,this.datosAlimentacion?.martes],
          ['Miercoles',this.datosEntrenamiento?.miercoles,this.datosAlimentacion?.miercoles],
          ['Jueves',this.datosEntrenamiento?.jueves,this.datosAlimentacion?.jueves],
          ['Viernes',this.datosEntrenamiento?.viernes,this.datosAlimentacion?.viernes],
          ['Sabado',this.datosEntrenamiento?.sabado,this.datosAlimentacion?.sabado],
          ['Domingo',this.datosEntrenamiento?.domingo,this.datosAlimentacion?.domingo]
        ]
        
        console.log('plan alimentacion:::::::::::');
        console.log(this.planes);
      });   



    });


   

    
  }
}
