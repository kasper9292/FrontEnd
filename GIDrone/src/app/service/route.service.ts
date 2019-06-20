import {Injectable} from '@angular/core';
import { Route } from '../domain/route';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class RouteService {
  dronebase : string = "http://localhost:8080/dronebase";
  
  constructor(private http: HttpClient) {}

  public getKortsteRoute(): Observable<Route[]> {
    return this.http.get <Route[]> (this.dronebase + '/route/kortst');
  }

  public getAllRoutes(): Observable<Route[]> {
    return this.http.get <Route[]> (this.dronebase + '/route');
  }

  public findById(id: number): Observable<Route> {
    console.log(`${this.dronebase}/${id}`)
    return this
      .http.get<Route>(
        `${this.dronebase}/route/${id}`)
  }

  public createRoute(): Observable<Route[]>{
    return this
    .http.post<Route[]>(
      `${this.dronebase}/route`, 
      httpOptions)
  }

  public update(route: Route): Observable<Route>{
    return this
      .http.put<Route>(
        `${this.dronebase}/route/${route.id}`, 
        route, 
        httpOptions)
  }

  public delete(id: number) : Observable<void> {
    return this
      .http
      .delete<void>(
        `${this.dronebase}/route/${id}`
      ) 
  }

 
}
