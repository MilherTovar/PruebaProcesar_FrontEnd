import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../services/modelo.service';
import { Modelo } from '../interfaces/modelo';
import { Modelito } from '../interfaces/modelito';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modelos:any[];
  modelos_ca:Modelo[];
  modelitos:Modelito[];
  models:string[];

  constructor(
    private modeloService:ModeloService
  ) {}

  ngOnInit(): void {
    //i:Number;
    //const i;
    this.modeloService.getAllModels()
    .subscribe(data=>{
      /*for (i in data){
        this.modelitos[i]=data[i].subitems;
      }*/
      console.log(this.modelitos);
      let i=0;
      for(var index in data)
      {
        //console.log(data[i].subitems);
        let j=0;
        if(i==1){
          let uno:string[];
          for(var index2 in data[i].subitems){
            //console.log(data[i].subitems[j]);
            //this.models[j]=data[i].subitems[j].subtitle;
            //console.log(this.models);
            //if(j!=0){
            //  console.log(j);
            //this.models[j]=data[i].subitems[j].subtitle;
            //}
            //console.log(j);
            uno[j]=data[i].subitems[j].subtitle;
            this.modelitos[j]=data[i].subitems[j];
            console.log(data[i].subitems[j].subtitle);
            //this.models=data[i].subitems[j].subtitle;
            j++;
          }
        }
        //console.log(i);
        i++;
        //this.modelitos[index]=data[index].subitems;
      }
      /*for(var subtitle of data){
        this.modelitos=subtitle.subitems;
        console.log(this.modelitos);
        console.log(subtitle.subitems);
      }*/
    })
  }

}
