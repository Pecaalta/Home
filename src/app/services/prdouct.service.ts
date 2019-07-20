import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrdouctService {

  constructor(
    private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<any[]>(environment.URL_API + 'all').pipe(
        catchError(this.handleError)
    )
  }  

  /**
  * Genera el headers de los riquest
  */
 getheaders(){
   return {
     headers: new HttpHeaders({
         'Content-Type': 'application/json'
     })
   };
 }

 /**
  * Cacheo de errores
  * @param error 
  */
 private handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
         console.error('An error occurred:', error.error.message);
     } else {
         console.error(
             `Backend returned code ${error.status}, ` +
             `body was: ${error.error}`);
     }
     return throwError(
         {
             code: error.status,
             body: error.error
         }
     );
 }

}
