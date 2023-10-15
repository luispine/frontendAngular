import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { } 

  getDevHours(): Observable<any> {
  
    return of({ hours: [1, 2, 3] });
  }

  getProxySize(): Observable<any> {
    
    return of({ size: [10, 20, 30] });
  }
}
