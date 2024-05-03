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
    /* istanbul ignore next */
    this.entrenamientoService.consulrarPlanAEntrenamiento().subscribe((exitoso: { plan_entrenamiento: PlanEntrenamiento; }) => {
      this.datosEntrenamiento = exitoso.plan_entrenamiento;
      this.alimentacionService.consulrarPlanAlimentacion().subscribe(success => {
        this.datosAlimentacion = success.plan_alimentacion;
        this.planes= [
          ['Lunes', this.datosEntrenamiento?.lunes + ' Km',this.datosAlimentacion?.lunes + ' Calorias'],
          ['Martes',this.datosEntrenamiento?.martes+ ' Km',this.datosAlimentacion?.martes+ ' Calorias'],
          ['Miercoles',this.datosEntrenamiento?.miercoles+ ' Km',this.datosAlimentacion?.miercoles+ ' Calorias'],
          ['Jueves',this.datosEntrenamiento?.jueves+ ' Km',this.datosAlimentacion?.jueves+ ' Calorias'],
          ['Viernes',this.datosEntrenamiento?.viernes+ ' Km',this.datosAlimentacion?.viernes+ ' Calorias'],
          ['Sabado',this.datosEntrenamiento?.sabado+ ' Km',this.datosAlimentacion?.sabado+ ' Calorias'],
          ['Domingo',this.datosEntrenamiento?.domingo+ ' Km',this.datosAlimentacion?.domingo+ ' Calorias']
        ]
      });
    });
  }
}
