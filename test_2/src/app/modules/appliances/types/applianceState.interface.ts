import { ApplianceInterface } from "./appliance.interface";

export interface ApplianceStateInterface{
    isLoading:boolean;
    appliances: ApplianceInterface[],
    error: string | null;
}