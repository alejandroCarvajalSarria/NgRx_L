import { createAction, props } from "@ngrx/store";
import { ApplianceInterface } from "../types/appliance.interface";

export enum AppliancesActions {
GET_APPLIANCES = '[Appliances] Get Appliances',
GET_APPLIANCES_SUCCESS = '[Appliances] Get Appliances Success',
GET_APPLIANCES_FAILURE = '[Appliances] Get Appliances Failure'
}

export const GetAppliances = createAction(
    AppliancesActions.GET_APPLIANCES
);

export const GetAppliancesSuccess = createAction(
    AppliancesActions.GET_APPLIANCES_SUCCESS,
    props<{appliances: ApplianceInterface[]}>()
);

export const GetAppliancesFailure = createAction(
    AppliancesActions.GET_APPLIANCES_FAILURE,
    props<{error:string}>()
);
