import {Injectable} from '@angular/core';
import { Pakketje } from '../domain/pakketje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class DroneService {
  dronebase : string = "http://localhost:8080/dronebase";
  
  constructor(private http: HttpClient) {}

  public getPakketjes(): Observable<Pakketje[]> {
    return this.http.get <Pakketje[]> (this.dronebase + '/pakket');
  }

  public findById(id: number): Observable<Pakketje> {
    console.log(`${this.dronebase}/pakket/${id}`)
    return this
      .http.get<Pakketje>(
        `${this.dronebase}/pakket/${id}`)
  }

  public create(pakketje: Pakketje): Observable<Pakketje>{
    return this
      .http.post<Pakketje>(
        `${this.dronebase}/pakket`, 
        pakketje, 
        httpOptions)
  }

  public update(pakketje: Pakketje): Observable<Pakketje>{
    return this
      .http.put<Pakketje>(
        `${this.dronebase}/pakket/${pakketje.id}`, 
        pakketje, 
        httpOptions)
  }

  public delete(id: number) : Observable<void> {
    return this
      .http
      .delete<void>(
        `${this.dronebase}/pakket/${id}`
      ) 
  }

 
}
