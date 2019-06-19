import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GeoService {
  mykey : string = "d92dcd80032849478837a0f358c2435c";
  geourl : string = "https://api.opencagedata.com/geocode/v1/geojson?key=" + this.mykey + "&q=";
  
  constructor(private http: HttpClient) {}

  public getCoordinaten(adres: string, stad: string): Observable<any> {
    adres = adres.replace(" ", "+");
    return this.http.get <any> (this.geourl + adres + "%2C" + stad);
  }
}
