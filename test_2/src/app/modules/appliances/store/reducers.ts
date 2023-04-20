import { ApplianceStateInterface } from "../types/applianceState.interface";
import { createReducer, on, } from "@ngrx/store"
import * as ApplianceActions from "./actions"

export const initialState: ApplianceStateInterface = {
    isLoading: false,
    appliances: [],
    error: null
}

export const reducers = createReducer(
    initialState,
    on(ApplianceActions.GetAppliances, (state) => ({
        ...state,
        isLoading: true
    })),
    on(ApplianceActions.GetAppliancesSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        appliances: action.appliances

    })),

    on(ApplianceActions.GetAppliancesFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error

    }))
)