import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Paciente} from "../Classes/Paciente";
import * as _ from "lodash";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {
  paciente: Paciente = new Paciente();
  @Input()
  pacienteId:string;
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    var url = "http://localhost:80/pacientes/";
    if(this.pacienteId){
      url += this.pacienteId;
    }
    this.http
      .get<Paciente>(url)
      .map(res => {
          return new Paciente(res.nombre, res.especie, res.raza, res.color,
            res.cliente, res.castrado, res.chip, res.ultimaVisita, res.foto);
      })
      .subscribe(data => {
        console.log(data);
        this.paciente = data;
    });
  }

}
