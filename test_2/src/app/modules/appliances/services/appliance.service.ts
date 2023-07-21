import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { ApplianceInterface } from '../types/appliance.interface';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  constructor(private httpService : HttpService) { }

  getAppliances(): Observable<ApplianceInterface[] >{
    return this.httpService.get('https://random-data-api.com/api/appliance/random_appliance?size=30')
      .pipe(
        map((res:ApplianceInterface[])=>{
          return res
        }),
        catchError((err)=>{
          console.error(err);
          
          return of([]);
        })
      )
  }

}
