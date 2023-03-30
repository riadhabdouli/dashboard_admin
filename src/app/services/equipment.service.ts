import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment.model';

const baseUrl = 'http://localhost:44304/api/Equipment';
@Injectable({
    providedIn: 'root'  
  })

  export class EquipmentService {
    private baseUrl:string ="https://localhost:44304/api/Equipment/"

    constructor(private  http: HttpClient) { }


    getAll(): Observable<Equipment[]> {
        return this.http.get<Equipment[]>(this.baseUrl);
      }

      create(data: any) {
        return this.http.post<any>(`${this.baseUrl}`, data);
      }

      signIn(userobj:any){
        return this.http.post<any>(`${this.baseUrl}login`,userobj);
      }

      update(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
      }

      delete(id: any) {
        return this.http.delete(`${baseUrl}/${id}`);

      }

  }