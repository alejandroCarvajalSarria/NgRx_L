import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { ApplianceService } from "../services/appliance.service";
import { map, mergeMap, catchError, of } from 'rxjs';
import * as ApplianceActions from './actions'


@Injectable()
export class ApplianceEffects {
    getAppliances$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ApplianceActions.GetAppliances),
            mergeMap(()=>{
                return this.applianceService
                    .getAppliances()
                    .pipe(map(appliances => ApplianceActions.GetAppliancesSuccess({ appliances })),
                        catchError(error => 
                            of(ApplianceActions.GetAppliancesFailure({ error: error.message}))
                            )
                    )
            })
        )
    )

    constructor(private actions$: Actions, private applianceService: ApplianceService ){}

}
