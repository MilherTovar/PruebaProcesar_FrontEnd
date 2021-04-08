import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../services/modelo.service';
import { Modelo } from '../interfaces/modelo';
import { DepartamentoService } from '../services/departamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modelos:Modelo[];
  models:string[];


  constructor(
    private modeloService:ModeloService,
    private departamentoService:DepartamentoService
  ) {}

  ngOnInit(): void {
    this.modeloService.getAllModels()
    .subscribe(data=>{
      this.modelos=[];
      this.models=[];
      for(let i in data){
        if(data[i].subitems!=null){
          this.modelos[i]=data[i];
          console.log(data[i].subitems.subtitle);
        }
      }
      console.log(this.modelos);
      /*for(let i in this.modelos){
        this.models[i]=this.modelos[i].subitems.subtitle;
      }
      console.log(this.models);*/
    })
    /*this.departamentoService.getAllDepartaments()
    .subscribe(data=>{
      console.log(data);
    })*/
  }

}
