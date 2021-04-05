import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../interfaces/modelo';

@Injectable({
    providedIn:'root'
})
export class ModeloService{
    private api1='https://integrador.processoft.com.co/api/menutest';
    constructor(
        private http:HttpClient
    ){}

    getAllModels(){
        return this.http.get<Modelo[]>(this.api1);
    }
}