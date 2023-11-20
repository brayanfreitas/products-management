import { GenderEnum } from "@/common";

export interface CustomerDto { 
    id: string, 
    name: string, 
    cpf: string,
    email: string,        
    gender: GenderEnum,
    dateOfBirth: string,
    cellPhone?: string,

}