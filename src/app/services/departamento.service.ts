import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../interfaces/departamento';

@Injectable({
    providedIn:'root'
})
export class DepartamentoService{
    private api='localhost:8080/api/departamento/'
    constructor(
        private http:HttpClient
    ){}

    getAllDepartaments(){
        return this.http.get<Departamento[]>(this.api);
    }
}