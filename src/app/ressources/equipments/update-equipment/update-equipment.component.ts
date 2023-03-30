import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Equipment } from 'src/app/models/equipment.model';
@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.scss']
})
export class UpdateEquipmentComponent {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }
  /** PUT: update the equipment on the server */
  updateProduct(equipment: Equipment): Observable<Equipment> {
    const url = 'https://localhost:44304/api/Equipment/`${equipment.idEquipment}`';
    return this.http.put<Equipment>(url, equipment, this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${equipment.idEquipment}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
