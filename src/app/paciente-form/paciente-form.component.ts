import { Component, OnInit, HostBinding} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Paciente} from "../Classes/Paciente";
import {PacienteSearchBoxService} from '../paciente-search-box/paciente-search-box.service';
import * as _ from "lodash";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  @HostBinding('class.paciente')
  paciente: Paciente = new Paciente();

  constructor(private http:HttpClient, private pacienteSearchBoxService:PacienteSearchBoxService) {
  }
  ngOnInit() { 
    this.pacienteSearchBoxService.changePaciente.subscribe(
      (paciente: Paciente) => {
        console.log(paciente);
        this.paciente = paciente;
    });
  }

  getUltimaVisita(): Date {
    if(this.paciente.ultimaVisita)
      return this.paciente.ultimaVisita;
    else {
      return new Date(Date.now());
    }
  }
}