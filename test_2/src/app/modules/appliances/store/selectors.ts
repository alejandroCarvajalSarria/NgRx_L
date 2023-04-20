import { AppStateInterface } from "src/app/types/appState.interface";
import { createSelector } from "@ngrx/store"

export const selectFeature = (state: AppStateInterface) => state.appliances;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
)


export const appliancesSelector = createSelector(
    selectFeature,
    (state) => state.appliances
)


export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
)





