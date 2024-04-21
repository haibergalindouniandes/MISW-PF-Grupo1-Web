import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ConsultarPlanAlimentacionService } from '../../../../core/services/services/alimentacion.service';
import { Validators } from '@angular/forms';
import { Alimentacion, PlanAlimentacion } from '../../../../core/models/services/alimentacion';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  constructor(
    private alimentacionService: ConsultarPlanAlimentacionService,
  ) { }

  columnas: string[] = ['Día','Alimentación'];
  datos : PlanAlimentacion | undefined;
  objectKeys = Object.keys;
  dia:any[]=[];
  planes: any[][]= [];

  ngOnInit() {
    console.log('Consultando servicio plan alimentacion')
    this.alimentacionService.consulrarPlanAlimentacion().subscribe(success => {
      console.log('resultado:::::::::::')
      this.datos = success.plan_alimentacion;
      console.log(success.plan_alimentacion);
      console.log(this.datos.id);
      this.planes= [
        ['Lunes',this.datos.lunes],
        ['Martes',this.datos.martes],
        ['Miercoles',this.datos.miercoles],
        ['Jueves',this.datos.jueves],
        ['Viernes',this.datos.viernes],
        ['Sabado',this.datos.sabado],
        ['Domingo',this.datos.domingo]
      ]
      console.log('plan alimentacion:::::::::::')
      console.log(this.planes);
    })   
    
  }
}
