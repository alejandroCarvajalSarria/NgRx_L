import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplianceInterface } from '../../types/appliance.interface';
import { Store, select } from '@ngrx/store' 
import { AppStateInterface } from 'src/app/types/appState.interface';
import { appliancesSelector, errorSelector, isLoadingSelector } from '../../store/selectors';
import * as ApplianceActions from './../../store/actions'



@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {


  isLoading$!:Observable<boolean>;
  appliances$!:Observable<ApplianceInterface[]>;
  error$!:Observable<string | null>;

  constructor(private store:Store<AppStateInterface>){
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.appliances$ = this.store.pipe(select(appliancesSelector));
  }


  ngOnInit(): void {
     this.store.dispatch(ApplianceActions.GetAppliances())
  }

}
