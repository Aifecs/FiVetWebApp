import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Paciente} from "../Classes/Paciente";
import { ReactiveFormsModule } from '@angular/forms';
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
      .subscribe(data => {
        this.paciente = data;
        console.log(this.paciente);
    });
  }

  getCliente(index: number): String {
    if(this.paciente.clientes && index < this.paciente.clientes.length && index >= 0){
      return this.paciente.clientes[index];
    } else {
      return null;
    }
  }

  getUltimaVisita(): Date {
    if(this.paciente.ultimaVisita)
      return this.paciente.ultimaVisita;
    else {
      return new Date(Date.now());
    }
  }
}
