import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SearchComponentService {
  
  private myUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {  }

  public getLogs(value): Observable<any> {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
  
    return this.http.post(`${this.myUrl}/v1/logs/filtro`, value, requestOptions)
      .pipe(
        map(response => {
          return response;
        })
      );
  }
}
