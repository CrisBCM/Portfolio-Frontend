import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string = "https://portfolio-api-3mv6.onrender.com";
  constructor(private http:HttpClient) { }
  
  obtenerDatosPersona():Observable<any>
  {
    return this.http.get<any>(this.url+"/obtener/personanombre/Cristian");
  }

  obtenerDatosLenguaje():Observable<any>
  {
    return this.http.get<any>(this.url+"/traer/lenguajes")
  }
}
